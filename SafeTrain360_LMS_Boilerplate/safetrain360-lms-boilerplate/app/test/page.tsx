'use client';

import { useEffect } from 'react';
import supabase from '@/supabaseClient'; // adjust the path if needed

export default function TestPage() {
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        console.error('❌ Supabase error:', error);
      } else {
        console.log('✅ Courses:', data);
      }
    };

    fetchCourses();
  }, []);

  return <div className="p-4 text-lg">Check console for Supabase data.</div>;
}
