"use client";

import Image from "next/image";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {ContactForm} from "@/components/ui/ContactForm";
import {SocialIcon} from "@/components/ui/SocialIcon";
import {useData} from "@/components/providers/DataProvider";

export function Contact() {
    const {contact, personal} = useData();
    const socials = Object.entries(personal.social).filter(([, url]) => Boolean(url)) as [string, string][];

    return (
        <section id="contact" className="py-12">
            <SectionHeading number="05" title={contact.headline}/>

            <div className="grid md:grid-cols-2 gap-16">
                {/* Left: copy + social */}
                <div className="animate-on-view flex flex-col gap-6">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {contact.subtext}
                    </p>
                    <ContactForm/>
                </div>

                {/* Right: image */}
                <div className="animate-on-view">
                    <div className="relative w-full aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden">
                        <Image
                            src={personal.profileImage}
                            alt="Lenny Reed"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
