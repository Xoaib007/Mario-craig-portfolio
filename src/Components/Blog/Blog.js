import React from 'react';
import { Player} from '@lottiefiles/react-lottie-player';

const Blog = () => {
    document.title = "blog";
    return (
        <div className='flex flex-row'>
            <div className="mockup-phone mb-20 relative left-24">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className="h-full carousel carousel-vertical rounded-box">
                            <div className="carousel-item h-screen flex-col">
                                <p className='text-black bg-white relative top-16 font-bold text-left px-5'>1. What is the Difference between SQL and NoSQL?</p>
                                <p className='text-black bg-white   text-left p-5'>The critical differences between SQL vs NoSQL are:

                                    <br />☐SQL databases are relational, NoSQL databases are non-relational.
                                    <br />☐SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                    <br />☐SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                    <br />☐SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                    <br />☐SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                </p>
                            </div>
                            <div className="carousel-item h-screen flex-col">
                                <p className='text-black bg-white relative top-16 font-bold text-left px-5'>2. What is JWT, and how does it work?</p>
                                <p className='text-black bg-white   text-left p-5'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                                    <br />Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                                </p>
                            </div>
                            <div className="carousel-item h-screen flex-col">
                                <p className='text-black bg-white relative top-16 font-bold text-left px-5'>3. What is the difference between javascript and NodeJS?</p>
                                <p className='text-black bg-white  mt-10 text-left p-5'>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                                    <br />2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                                </p>
                            </div>
                            <div className="carousel-item h-screen flex-col">
                                <p className='text-black bg-white relative top-16 font-bold text-left px-5'>4. How does NodeJS handle multiple requests at the same time?</p>
                                <p className='text-black bg-white   text-left p-5'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.

                                    How NodeJS handle multiple client requests?

                                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative top-56 right-96 pr-32'>
                <Player
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_y0c11mbg.json"
                    style={{ height: '80px', width: '80px' }}>
                </Player>
            </div>
        </div>
    );
};

export default Blog;