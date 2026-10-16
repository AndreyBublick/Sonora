"use client";
import {Oauth2CallbackPage} from "@/src/views/oauth2/ui/callback";
import {Fallback} from "@/src/views/oauth2/ui/fallback";
import {Suspense} from "react";

export default function OAuthCallbackPage() {
   return <Suspense fallback={<Fallback />}>
   <Oauth2CallbackPage />
   </Suspense>
}