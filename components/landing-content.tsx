'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserAvatar } from './user-avatar';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: 'Pedro',
    avatar: 'P',
    title: 'Software Engineer',
    description: "This is the best applicaiton I've used!",
    color: 'bg-purple-700',
  },
  {
    name: 'Karolina',
    avatar: 'K',
    title: 'Designer',
    description: 'I use this daily for generating new photos!',
    color: 'bg-blue-700',
  },
  {
    name: 'Michal',
    avatar: 'M',
    title: 'CEO',
    description: 'This app has changed my life, cannot imagine working without it!',
    color: 'bg-pink-700',
  },
  {
    name: 'Ana',
    avatar: 'A',
    title: 'CFO',
    description: 'The best in class, definitely worth the premium subscription!',
    color: 'bg-orange-700',
  },
];

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>Testimonials</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <Avatar className='h-8 w-8'>
                  <AvatarFallback className={`${item.color} text-sm`}>{item.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-gray-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
