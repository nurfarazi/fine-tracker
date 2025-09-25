import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

async function loadFirebaseConfig(): Promise<FirebaseOptions> {
  try {
    const res = await fetch('/assets/firebase-config.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load firebase-config.json: ${res.status}`);
    return (await res.json()) as FirebaseOptions;
  } catch (e) {
    console.error('Firebase config load error', e);
    // Fallback to empty config to avoid breaking dev server; auth will be disabled.
    return {} as FirebaseOptions;
  }
}

(async () => {
  const firebaseConfig = await loadFirebaseConfig();
  await bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ],
  });
})();
