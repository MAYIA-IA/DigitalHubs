import { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if(email){
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000);
        } 
    };

    // Intersection Observer para animar cuando sea visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);
    
    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className="relative py-24 pb-0 bg-black"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className={`max-w-4xl mx-auto mb-32 md:mb-40 lg:mb-48 transition-all duration-1000 ${
                    hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                    <div className="glass-effect p-12 rounded-3xl text-center">
                        <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-6">
                            <span className="text-[#7FD1FF] font-mono text-sm">Newsletter</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Suscríbete a Nuestro <span className="gradient-text">Newsletter</span>
                        </h2>
                        <p className="text-[#B8C5D3] mb-8">Entérate de nuestros eventos y mucho más</p>
                        
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Ingresa tu email" 
                                    required 
                                    className="flex-1 px-6 py-4 bg-[#000000] border border-[#4881EB] border-opacity-20 rounded-lg text-white placeholder-[#8A9AA8] focus:outline-none focus:border-[#4881EB] transition-colors"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-[#4881EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#7FD1FF] transition-all hover:scale-105 will-change-transform"
                                >
                                    Suscribirse
                                </button>
                            </form>
                        ) : (
                            <div className="bg-[#10B981] bg-opacity-20 border border-[#10B981] rounded-lg p-4 animate-fadeIn">
                                <span className="text-[#10B981] font-semibold">¡Gracias por suscribirte!</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default Contact;