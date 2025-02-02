'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function NavbarSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border border-purple-600 p-2 pr-10  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}
