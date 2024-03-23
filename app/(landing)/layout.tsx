import StickyBar from '@/components/sticky-bar';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='h-full bg-[#111827] overflow-auto'>
        <StickyBar />
        <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
      </main>
    </>
  );
};

export default LandingLayout;
