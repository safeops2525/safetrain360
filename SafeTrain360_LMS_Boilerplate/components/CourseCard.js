export default function CourseCard({ course }) {
  return (
    <div className='p-4 border rounded-lg'>
      <h3 className='font-semibold text-lg'>{course.title}</h3>
      <p className='text-sm text-gray-600'>{course.description}</p>
    </div>
  );
}