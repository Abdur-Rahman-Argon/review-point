import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="m-5 border-2 p-5 bg-indigo-100 rounded-lg">
        <h1 className="text-2xl m-2 font-semibold">
          <span className="text-2xl mx-2 font-bold">Q-1: </span> What is Contex
          Api?
        </h1>
        <p>
          <span className="text-2xl mx-2 font-bold"> A:</span>
          React Context Api হল একটি React Aplication এর জন্য কার্যকরভাবে গ্লোবাল
          ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে data পাস করাতে পারে। এটি
          দাদা-দাদি থেকে শিশু থেকে পিতা-মাতার কাছে Props সরানোর বিকল্প।
          <br />
          একটি সাধারণ React Application এ প্রপসের মাধ্যমে ডেটা উপর থেকে নিচে
          (parent to child) পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরনের
          প্রপসের ব্যবহার application এর মধ্যে অনেক উপাদানের জন্য প্রয়োজন যা
          Context ব্যবহার করে সহজে করা যায়। এজন্য React Application এ Context
          Api এর ব্যবহার বহুল ব্যবহৃত।
        </p>
      </div>
      <div className="m-5 border-2 p-5 bg-indigo-100 rounded-lg">
        <h1 className="text-2xl m-2  font-semibold">
          <span className="text-2xl mx-2 font-bold">Q-2: </span> What is
          Semantic tag?
        </h1>
        <p>
          <span className="text-2xl mx-2 font-bold"> A:</span>
          Semantic Tag হল এমন Tag যা Document কে মানুষের এবং কম্পিউটার এর সহজে
          বোঝার জন্য একটা কাঠামো তৈরি করে। এখানে প্রত্যেকটি Tag নিজস্ব অর্থ বহন
          করে। যেটা দেখে ঐ এলাকার কিছু তথ্য পাওয়া যায়। এবং সেই তথ্য দ্বারা
          কাঠামো সম্পর্কে ধারণা পাওয়া যায়।এর মাধ্যমে একটি Website এর কোনটা
          Navber কোনটা Header কোনটা Blog কোনটা Footer এসব আলাদা ভাবে পৃথক করা
          যায়।
        </p>
      </div>
      <div className="m-5 border-2 p-5 bg-indigo-100 rounded-lg">
        <h1 className="text-2xl m-2  font-semibold">
          <span className="text-2xl mx-2 font-bold">Q-3: </span> Inline And
          Inline-Block?
        </h1>
        <p>
          <span className="text-2xl mx-2 font-bold"> A:</span>
          HTML এ কিছু Tag প্রকৃতি গত ভাবেই Inline অথবা Inline Block হতে পারে।
          Inline উপাদান গুলোতে একাধিক Inline উপাদান একই সঙ্গে বসালে তা এক লাইনে
          বসে। আবার এসব উপাদান এর উপর নিচে মার্জিন প্যডিং দেওয়া যায় না। Block
          উপাদানে একটি উপাদান ঐ লাইনের সম্পূর্ণ জায়গা দখল করে। আবার CSS ব্যবহার
          করে একটি Inline উপাদানকে Inline Block অথবা Block উপাদানকে Inline
          উপাদানে পরিবর্তন করা যায়। আর পরিবর্তন করার পর সেটা ঐ উপাদান এর মতো
          আচরণ করে।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
