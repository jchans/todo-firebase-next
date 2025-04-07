'use client'

import { signInWithPopup, User } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase'
import { useState } from 'react'
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log("✅ 登入成功:", result.user)
      setUser(result.user)
      router.push('/todo')
    } catch (err) {
      console.error("❌ 登入失敗:", err)
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Firebase 測試頁（TypeScript）</h1>

      {user ? (
        <div className="mt-4">
          <p className="mb-2">歡迎，{user.displayName}</p>
          <img
            src={user.photoURL || ''}
            alt="user avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          用 Google 登入
        </button>
      )}
    </main>
  )
}