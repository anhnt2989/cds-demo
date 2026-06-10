import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export interface AuthUser {
  name: string;
  email: string;
  avatar: string; // initials
  role: string;
}

interface AuthCtx {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | null>(null);

const MOCK_ACCOUNTS: Record<string, { password: string; name: string; role: string }> = {
  'admin@bkhcn.gov.vn': { password: 'admin123', name: 'Quản trị viên',    role: 'Bộ Khoa học & Công nghệ' },
  'user@demo.vn':        { password: 'demo123',  name: 'Người dùng Demo', role: 'Doanh nghiệp'              },
};

function initials(name: string) {
  return name.split(' ').slice(-2).map(w => w[0]).join('').toUpperCase();
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]       = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('auth_user').then(raw => {
      if (raw) setUser(JSON.parse(raw));
      setLoading(false);
    });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const trimEmail = email.trim().toLowerCase();
    const acct = MOCK_ACCOUNTS[trimEmail];

    if (!acct || acct.password !== password.trim()) {
      // Also allow any email with password "123456" for demo convenience
      if (password.trim() !== '123456') {
        return { ok: false, error: 'Email hoặc mật khẩu không đúng.' };
      }
    }

    const u: AuthUser = {
      name:   acct?.name ?? trimEmail.split('@')[0],
      email:  trimEmail,
      avatar: initials(acct?.name ?? trimEmail),
      role:   acct?.role ?? 'Người dùng',
    };
    await AsyncStorage.setItem('auth_user', JSON.stringify(u));
    setUser(u);
    return { ok: true };
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('auth_user');
    setUser(null);
  }, []);

  return <Ctx.Provider value={{ user, loading, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}
