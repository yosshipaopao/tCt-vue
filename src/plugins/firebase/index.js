import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth";

import firebaseConfig from "@/plugins/firebase/config";
export const firebaseApp = firebaseConfig.projectId ? initializeApp(firebaseConfig) : {};
export const firebaseAuth = firebaseConfig.projectId ? getAuth() : {};
