'use client'
import Link from 'next/link'; // Import Link from next/link
import { useParams } from 'next/navigation';
import { CodeBlock } from "react-code-blocks";
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const Documentation = () => {
  


  const myCustomTheme = {
    backgroundColor: 'black',
    textColor: 'white',
    keywordColor: "#0077ff",

  }

  const code = '<script src="main.js"></script>';
  const language = 'javascript';

  return (
    <>
      <div>
        <div className='bg-[url("/ai-bg.jpg")] bg-cover min-h-screen text-white'>
          <div>
            <div>
              <h2>Welcome to </h2>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;