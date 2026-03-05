# Deploy Backend (Indi-Air-Services) on Firebase – Step by Step

This guide deploys your Node/Express backend as **Firebase Cloud Functions (2nd gen)** so it runs inside your Firebase project.

---

## Prerequisites

- **Node.js 20** (Cloud Functions 2nd gen use Node 20 by default).
- **Firebase CLI** installed and logged in.
- **Google Cloud / Firebase project** (e.g. `indi-air-project` – same as frontend or a dedicated one).

---

## Step 1: Install Firebase CLI and log in

In a terminal (PowerShell or Command Prompt):

```powershell
npm install -g firebase-tools
firebase login
```

Sign in with the Google account that owns your Firebase project.

---

## Step 2: Set the Firebase project (if needed)

From the **Indi-Air-Services** folder:

```powershell
cd D:\Indi-Air-Services
firebase use default
```

To use a different project:

```powershell
firebase use indi-air-project
```

Or list projects and select one:

```powershell
firebase projects:list
firebase use <project-id>
```

---

## Step 3: Enable required APIs and billing

1. Open [Google Cloud Console](https://console.cloud.google.com/) and select the same project as in Firebase.
2. Enable **Cloud Build** and **Cloud Functions**:
   - APIs & Services → Enable APIs and Services.
   - Enable **Cloud Build API** and **Cloud Functions API**.
3. Ensure the project has **Blaze (pay-as-you-go)** billing.  
   Firebase Cloud Functions (2nd gen) require Blaze; you still get a free tier.

---

## Step 4: Install dependencies and build the functions

From **D:\Indi-Air-Services**:

```powershell
cd D:\Indi-Air-Services
npm run build:functions
```

This runs `cd functions && npm ci && npm run build` so the `functions` app is built into `functions/lib/`.

If you prefer to do it manually:

```powershell
cd D:\Indi-Air-Services\functions
npm install
npm run build
cd ..
```

---

## Step 5: Deploy the backend to Firebase

From **D:\Indi-Air-Services**:

```powershell
firebase deploy --only functions
```

When it finishes, the CLI prints the function URL, for example:

```text
Function URL (api(us-central1)): https://us-central1-indi-air-project.cloudfunctions.net/api
```

Copy this URL; the frontend will use it as the production API base URL.

---

## Step 6: Set the production API URL in the frontend

1. Open **D:\Indi-Air\\.env.production** (frontend repo).
2. Set:

   ```env
   VITE_API_BASE_URL=https://us-central1-indi-air-project.cloudfunctions.net/api
   ```

   Replace with your actual URL from Step 5 (no trailing slash).

3. Rebuild and redeploy the frontend:

   ```powershell
   cd D:\Indi-Air
   npm run build
   firebase deploy --only hosting
   ```

---

## Step 7: (Optional) Proxy API from Firebase Hosting

To have the frontend call `/api` on the same domain (e.g. `https://yoursite.web.app/api`), add a rewrite in the **frontend** repo’s `firebase.json`:

1. Open **D:\Indi-Air\\firebase.json**.
2. Add a rewrite that sends `/api` (and optionally `/api/**`) to your function URL, for example:

   ```json
   {
     "hosting": {
       "public": "dist/public",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "/api/**",
           "function": "api"
         },
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   If your function is in a **different** Firebase project than the one used for `firebase deploy` from Indi-Air, you need to configure that project’s functions in the same `firebase.json` or use a full URL rewrite (Firebase Hosting can proxy to a Cloud Function in the same project).

   For a single project that has both hosting and the `api` function, the above rewrite is correct. Then in the frontend use:

   ```env
   VITE_API_BASE_URL=
   ```

   (empty) and call `/api` (e.g. `fetch('/api/...')`) so the same origin is used.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Install Firebase CLI and run `firebase login` |
| 2 | From `D:\Indi-Air-Services`, run `firebase use <project-id>` |
| 3 | Enable Cloud Build + Cloud Functions and set Blaze billing |
| 4 | Run `npm run build:functions` from Indi-Air-Services |
| 5 | Run `firebase deploy --only functions` and copy the function URL |
| 6 | Set `VITE_API_BASE_URL` in `D:\Indi-Air\.env.production` and rebuild/redeploy frontend |
| 7 | (Optional) Add Hosting rewrite so frontend can use `/api` on the same domain |

---

## Troubleshooting

- **“Billing account not configured”**  
  Attach a Blaze billing account to the project (free tier still applies).

- **“Permission denied” / “API not enabled”**  
  Enable Cloud Build API and Cloud Functions API for the project and wait a few minutes.

- **Build fails in `functions`**  
  Run `cd D:\Indi-Air-Services\functions`, then `npm install` and `npm run build`, and fix any TypeScript or dependency errors.

- **CORS errors from the frontend**  
  The function is created with `cors: true`. If you add custom origins, configure CORS in `functions/src/app.ts` (e.g. `cors({ origin: ['https://yoursite.web.app'] })`).

- **Function URL format**  
  It looks like: `https://<region>-<project-id>.cloudfunctions.net/<function-name>`. The function name is `api` (from `export const api = onRequest(...)`).
