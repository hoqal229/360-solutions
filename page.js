
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className='p-6 space-y-10 bg-[#f2eddf] text-black min-h-screen'>
      <section className='text-center space-y-4'>
        <div className='flex justify-center'>
          <Image src='/360.png' alt='360 Solutions Logo' width={200} height={200} />
        </div>
        <h1 className='text-4xl font-bold'>Welcome to 360 Solutions</h1>
        <p className='text-lg text-gray-700'>Your all-in-one service provider</p>
        <Button className='mt-4 bg-black text-white hover:bg-gray-800'>Get a Free Quote</Button>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>About Us</h2>
        <p>
          360 Solutions is a one-stop-shop offering high-quality services ranging from construction
          and landscaping to PC builds, car detailing, snow removal, and more. We are committed to
          excellence, reliability, and customer satisfaction.
        </p>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            'Construction Work',
            'Landscaping',
            'PC Builds & Repairs',
            'Power Washing',
            'Snow Removal',
            'Car Detailing',
          ].map((service) => (
            <Card key={service} className='hover:shadow-lg bg-white'>
              <CardContent className='p-4'>
                <h3 className='text-lg font-medium'>{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Contact Us</h2>
        <form className='space-y-4 max-w-md'>
          <input type='text' placeholder='Your Name' className='w-full p-2 border rounded' />
          <input type='email' placeholder='Your Email' className='w-full p-2 border rounded' />
          <textarea placeholder='Your Message' className='w-full p-2 border rounded' rows={4} />
          <Button type='submit' className='bg-black text-white hover:bg-gray-800'>Send Message</Button>
        </form>

        <div className='mt-6 space-y-2'>
          <p><strong>Phone:</strong> <a href='tel:2168580142' className='text-blue-600 hover:underline'>(216) 858-0142</a></p>
          <p><strong>Instagram:</strong> <Link href='https://www.instagram.com/360_solutionsss?igsh=bm00cGg5cjluZ3Bx&utm_source=qr' target='_blank' className='text-blue-600 hover:underline'>@360_solutionsss</Link></p>
        </div>
      </section>
    </div>
  );
}
