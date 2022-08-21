import Link from 'next/link';

export default function Header({}) {
  return (
    <header className='bg-fuchsia-100 mb-8 py-4'>
      <div className='container mx-auto flex justify-center'>
        <Link href='/'>
          <a>🏡</a>
        </Link>
        <span className='mx-auto'>Welcome to my blog</span>{' '}
      </div>
    </header>
  );
}