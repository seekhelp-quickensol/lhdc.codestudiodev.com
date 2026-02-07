
// lib/auth/actions.ts
// Updated server actions to use Express backend
"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_EXPRESS_BACKEND_URL || 'http://localhost:3000/express';

export async function signIn(formData: FormData) {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const response = await fetch(`${API_URL}/auth/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, error: result.error || "Sign in failed" };
        }

        const cookieStore = await cookies();
        cookieStore.set('auth_token', result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

        return { success: true };
    } catch (error) {
        console.error("Sign in error:", error);
        return { success: false, error: "An error occurred during sign in" };
    }
}


export async function signUp(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const response = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: result.error || 'Sign up failed',
            };
        }

        return { success: true };
    } catch (error) {
        console.error('Sign up error:', error);
        return {
            success: false,
            error: 'An error occurred during sign up',
        };
    }
}

/**
 * Sign out
 */
export async function signOut() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');

    if (token) {
        // Call Express backend to clear cookie there too
        try {
            await fetch(`${API_URL}/auth/signout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token.value}`,
                },
            });
        } catch (error) {
            console.error('Error calling backend signout:', error);
        }
    }

    // Clear cookie in Next.js
    cookieStore.delete('auth_token');
    redirect('/auth/signin');
}

/**
 * Get current user from Express backend
 */
export async function getCurrentUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token');
        

        if (!token) {
            return null;
        }

        const response = await fetch(`${API_URL}/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token.value}`,
            },
        });

        if (!response.ok) {
            return null;
        }

        const result = await response.json();
        return result.user;
    } catch (error) {
        console.error('Get current user error:', error);
        return null;
    }
}

/**
 * Require authentication
 */
export async function requireAuth() {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/auth/signin');
    }

    return user;
}

/**
 * Require admin role
 */
export async function requireAdmin() {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/auth/signin');
    }

    if (user.role !== 'ADMIN') {
        redirect('/auth/unauthorized');
    }

    return user;
}