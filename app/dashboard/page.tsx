import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dashboard from "@/components/dashboard";
export default async function Page(){const store=await cookies();const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key){return <main className="config"><h1>Configuração necessária</h1><p>Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY na Vercel para habilitar a autenticação.</p></main>;}const client=createServerClient(url,key,{cookies:{getAll(){return store.getAll()},setAll(){}}});const {data:{user}}=await client.auth.getUser();if(!user)redirect("/login");return <Dashboard email={user.email??""}/>}
