import CourseCard from '../components/CourseCard';
export default function Home() {
  const courses = [
    { title: 'WHMIS Training', description: 'Workplace Hazardous Materials Information System' },
    { title: 'Ladder Safety', description: 'Basic fall protection and ladder use' }
  ];
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to SafeTrain360</h1>
      <div className='grid gap-4'>{courses.map((c, i) => <CourseCard key={i} course={c} />)}</div>
    </div>
  );
}