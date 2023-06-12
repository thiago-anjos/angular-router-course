import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../model/user";
import { map, shareReplay, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: "root",
})
export class AuthStore {
  // Criar um BehaviorSubject é uma forma de manter estado do último valor emitido nesta classe de uma forma reativa
  private subject = new BehaviorSubject<User>(null);

  //depois associamos esse BehaviorSubject como um observable para que possamos permitir que outros componentes se inscrevam no objeto user
  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);

    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>("/api/login", { email, password }).pipe(
      tap((user) => {
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
