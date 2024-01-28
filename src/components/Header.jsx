import logo from '../assets/logo.png';

// it is a functional component 
export default function Header() { 
    return (
      <header className="flex flex-col items-center mt-16 mb-8 md:mb-16">
        <img src={logo} alt="logo" className="w-44 h-44 mb-8 object-contain" />
        <h1 className="uppercase font-title text-xl text-center font-semibold tracking-widest text-amber-800 md:text-4xl">
          REACTART
        </h1>
        <p className='text-stone-500'>A community of artists and art-lovers</p>
      </header>
    );
}