import Link from 'next/link';

export default function Header({}) {
  return (
    <header className='text-base'>
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-3'>
          <div className='flex flex-start'>Logo</div>
        </div>
        <nav className='col-span-8'>
          <ul className='flex justify-end space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className='col-span-1 text-center'>
          <button className='btn'>Enter</button>
        </div>
      </div>
    </header>
  );
}