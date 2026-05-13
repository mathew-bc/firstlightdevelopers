import './style.css'

document.querySelector('#app').innerHTML = `
<main class="min-h-screen bg-black text-white overflow-hidden">
<section class="relative min-h-screen overflow-hidden bg-black text-white">

    <!-- Ambient Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_35%)]"></div>

    <!-- Content Container -->
    <div class="relative z-10 w-full px-[8vw] md:px-[clamp(6vh,3vw,8vh)] md:py-[clamp(6vh,3vw,8vh)]">

        <!-- Header Logo -->
        <img 
            src="/header.png"
            alt="First Light"
            class="h-[clamp(5vh,2.5vw,7vh)] w-auto"
        />

        <!-- Main Heading -->
        <h1 class="
            font-[350]
            leading-[clamp(12vh,6vw,14vh)]
            text-[clamp(8vw,6vh,10vw)]
            md:text-[clamp(10vh,5vw,12vh)]
            mt-[clamp(16vh,8vw,18vh)]
            md:ml-[clamp(8vh,4vw,10vh)]
        ">
            Modern products.<br>
            Built thoughtfully.
        </h1>

        <!-- Subtext -->
        <p class="
            mt-[clamp(4vh,3vw,6vh)]
            text-zinc-400
            font-[350]
            leading-[1.4]
            text-[clamp(2vh,1.2vw,2.2vh)]
            md:text-[clamp(3vh,1.5vw,8vh)]
            md:ml-[clamp(8vh,4vw,10vh)]
        ">
            Technology design for the next <br> 
            generation of industry.
        </p>

    </div>

    <!-- Hero Mark -->
    <div class="
    absolute
    right-[clamp(16vh,8vw,18vh)]
    top-1/2
    -translate-y-1/2
">
    <img 
        src="/Logo.png"
        alt="First Light mark"
        class="
            h-[100vh]
            opacity-90
            pointer-events-none
            select-none
        "
    />
</div>

</section>

    <section class="
    relative
    overflow-hidden
    bg-black
    px-[6vw]
">

    <div class="
        grid
        lg:grid-cols-[0.9fr_1.1fr]
        gap-[clamp(6vh,6vw,12vh)]
        items-center
    ">

        <!-- LEFT CONTENT -->
        <div>

            <p class="
                uppercase
                font-[350]
                tracking-[0.35em]
                text-zinc-500
                mb-[clamp(2vh,2vw,3vh)]
                text-[clamp(2vh,1vw,5vh)]
            ">
                Our platform
            </p>

            <h2 class="
                font-[450]
                leading-[0.95]
                tracking-[-0.04em]
                mb-[clamp(2vh,2vw,3vh)]
                text-[clamp(7vw,5vh,8vh)]
                md:text-[clamp(8vh,4vw,9vh)]
            ">
                TRACE
            </h2>

            <p class="
                text-zinc-400
                font-[400]
                mb-[clamp(4vh,3vw,5vh)]
                text-[clamp(2vh,1.2vw,2.4vh)]
                md:text-[clamp(1.8vh,1vw,2vh)]
            ">
                Installation management application
            </p>

            <p class="
                max-w-[34ch]
                text-zinc-500
                leading-[1.6]
                font-[400]
                text-[clamp(1.8vh,1vw,2vh)]
                md:text-[clamp(1.6vh,0.9vw,1.9vh)]
            ">
                A mobile and web-based platform for managing istallations,
                quality control, and project delivery across large-scale
                engineering and infrastructure projects.
            </p>

        </div>

        <!-- RIGHT VISUAL -->
        <div class="
            relative
            flex
            items-center
            justify-center
            min-h-[50vh]
        ">

            <!-- Ambient Glow -->
            <div class="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]
            "></div>

            <!-- Laptop -->
            <img
                src="/trace.png"
                alt="TRACE dashboard"
                class="
                    relative
                    z-10
                    w-[clamp(160vh,80vw,170vh)]
                    md:w-[clamp(160vh,80vw,170vh)]
                    h-auto
                    drop-shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                "
            />

        </div>

    </div>

</section>

    <section class="
    relative
    px-[2vw]
    pt-[clamp(10vh,12vw,18vh)]
    text-center
    overflow-hidden
">

    <p class="
        uppercase
                font-[350]
                tracking-[0.35em]
                text-zinc-500
                mb-[clamp(2vh,2vw,3vh)]
                text-[clamp(2vh,1vw,5vh)]
    ">
        OUR PILLARS
    </p>

    <h2 class="
        font-[200]
        leading-[1.2]
        tracking-[-0.04em]
        mb-[clamp(8vh,8vw,12vh)]
        text-[clamp(8vw,5vh,10vw)]
        md:text-[clamp(4vh,4vw,6vh)]
        md: mt-[clamp(2.5vw,5vh,4vw)]
    ">
        Designed with clarity.<br>
        Built with intention.
    </h2>

    <div class="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-y-[clamp(6vh,6vw,10vh)]
    ">
        ${[
    ['▱', 'Design-Led', 'Designed for usability with foresight, consistency, and attention to detail. '],
    ['⬡', 'Expertise-Driven', 'Shaped by people with practical experience and deep domain knowledge.'],
    ['→', 'Cross-Industry', 'Working across software, infrastructure, products, and brands.'],
    ['▣', 'Long-Term Thinking', 'Focused on creating evolving products with lasting value.'],
  ].map(([icon, title, copy]) => `
            <div class="
                px-[clamp(4vw,2vw,5vw)]
                md:border-r
                md:border-zinc-800
                md:[&:nth-child(2)]:border-r-0
                lg:[&:nth-child(2)]:border-r
                lg:last:border-r-0
            ">
                <div class="
                    text-zinc-300
                    font-[100]
                    mb-[clamp(3vh,3vw,5vh)]
                    text-[clamp(6vw,4vh,8vw)]
                    md:text-[clamp(8vh,4vw,14vh)]
                    leading-none
                ">
                    ${icon}
                </div>

                <h3 class="
                    mb-[clamp(2vh,1.5vw,3vh)]
                    font-[400]
                    tracking-[-0.02em]
                    text-[clamp(2.2vh,1.4vw,2.8vh)]
                    md:text-[clamp(3vh,1.5vw,5vh)]
                ">
                    ${title}
                </h3>

                <p class="
                    mx-auto
                    max-w-[26ch]
                    text-zinc-500
                    font-light
                    leading-[1.7]
                    text-[clamp(1.8vh,1vw,2.1vh)]
                    md:text-[clamp(2vh,1vw,3vh)]
                ">
                    ${copy}
                </p>
            </div>
        `).join('')}
    </div>
</section>

    <section class="
    relative
    overflow-hidden
    px-[6vw]
    py-[clamp(10vh,12vw,18vh)]
">

    <!-- Content -->
    <div class="relative z-10">

        <p class="
            uppercase
                font-[350]
                tracking-[0.35em]
                text-zinc-500
                mb-[clamp(2vh,2vw,3vh)]
                text-[clamp(2vh,1vw,5vh)]
        ">
            About us
        </p>

        <h2 class="
          font-[300]
          leading-[1.2]
          tracking-[-0.04em]
          mb-[clamp(4vh,2vw,12vh)]
          text-[clamp(8vw,5vh,10vw)]
          md:text-[clamp(4vh,4vw,6vh)]
          md: mt-[clamp(2.5vw,5vh,4vw)]
        ">
            Builders at heart
        </h2>

        <p class="
            max-w-[46ch]
            text-zinc-400
                font-[400]
                mb-[clamp(4vh,3vw,5vh)]
                text-[clamp(2vh,1.2vw,2.4vh)]
                md:text-[clamp(1.8vh,1vw,2vh)]
        ">
            First Light was founded to create modern products and tools that solve real-world problems through design, technology, and systems thinking.
        </p>

        <div class="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-y-[clamp(6vh,6vw,10vh)]
            gap-x-[clamp(5vw,4vw,8vw)]
            mt-[8vh]
        ">

            <div>
                <div class="
                    text-zinc-300
                    font-[100]
                    mb-[clamp(3vh,3vw,5vh)]
                    text-[clamp(6vw,4vh,8vw)]
                    md:text-[clamp(8vh,4vw,14vh)]
                    leading-none
                ">
                    ⇄
                </div>

                <h3 class="
                    mb-[clamp(2vh,1.5vw,3vh)]
                    font-[400]
                    tracking-[-0.02em]
                    text-[clamp(2.2vh,1.4vw,2.8vh)]
                    md:text-[clamp(3vh,1.5vw,5vh)]
                ">
                    In-field Experience
                </h3>

                <p class="
                    max-w-[35ch]
                    text-zinc-400
                    font-light
                    leading-[1.4]
                    text-[clamp(1.8vh,1vw,2.1vh)]
                    md:text-[clamp(1.8vh,0.9vw,3vh)]
                ">
                    Built from hands-on experience across products, systems,
                    operations, and real-world workflows.
                </p>
            </div>

            <div>
                <div class="
                    text-zinc-300
                    font-[100]
                    mb-[clamp(3vh,3vw,5vh)]
                    text-[clamp(6vw,4vh,8vw)]
                    md:text-[clamp(8vh,4vw,14vh)]
                    leading-none
                ">
                    ⬢
                </div>

                <h3 class="
                    mb-[clamp(2vh,1.5vw,3vh)]
                    font-[400]
                    tracking-[-0.02em]
                    text-[clamp(2.2vh,1.4vw,2.8vh)]
                    md:text-[clamp(3vh,1.5vw,5vh)]
                ">
                    New Domains
                </h3>

                <p class="
                     max-w-[35ch]
                    text-zinc-400
                    font-light
                    leading-[1.4]
                    text-[clamp(1.8vh,1vw,2.1vh)]
                    md:text-[clamp(1.8vh,0.9vw,3vh)]
                ">
                    We relish the opportunity to expand into new modals and domains, learning new things to solve problems from unique disciplines.
                </p>
            </div>

            <div>
                <div class="
                    text-zinc-300
                    font-[100]
                    mb-[clamp(3vh,3vw,5vh)]
                    text-[clamp(6vw,4vh,8vw)]
                    md:text-[clamp(8vh,4vw,14vh)]
                    leading-none
                ">
                    ✹
                </div>

                <h3 class="
                    mb-[clamp(2vh,1.5vw,3vh)]
                    font-[400]
                    tracking-[-0.02em]
                    text-[clamp(2.2vh,1.4vw,2.8vh)]
                    md:text-[clamp(3vh,1.5vw,5vh)]
                ">
                    Choose Innovation
                </h3>

                <p class="
                     max-w-[35ch]
                    text-zinc-400
                    font-light
                    leading-[1.4]
                    text-[clamp(1.8vh,1vw,2.1vh)]
                    md:text-[clamp(1.8vh,0.9vw,3vh)]
                ">
                    We thrive on unconventional, out-of-the-box thinking with a focus on novel solutions to longstanding problems.
                </p>
            </div>

        </div>
    </div>

    

</section>

<footer class="
    relative
    overflow-hidden
    px-[6vw]
    pt-[clamp(10vh,5vw,12vh)]
    pb-[clamp(6vh,3vw,8vh)]
">

    <!-- Main Footer Content -->
    <div class="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-y-[clamp(8vh,8vw,12vh)]
        gap-x-[clamp(8vw,10vw,16vw)]
        items-start
    ">

        <!-- Left -->
        <div>

            <img 
            src="/header.png"
            alt="First Light"
            class="h-[clamp(5vh,2.5vw,7vh)] w-auto"
        />

        </div>

        
    </div>

    <div class="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-y-[clamp(8vh,8vw,12vh)]
        gap-x-[clamp(8vw,10vw,16vw)]
        items-start
    ">

         <!-- Bottom -->
    <div class="
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        gap-[2vh]
    ">

        <p class="
                    text-zinc-400
                    font-light
                    leading-[1.4]
                    text-[clamp(1.8vh,1vw,2.1vh)]
                    md:text-[clamp(1.8vh,0.9vw,3vh)]
                    md: mt-[clamp(1.5vw,3vh,4vw)]
        ">
            © 2026 First Light Developers SA (Pty) Ltd. All rights reserved.
        </p>

    </div>

        <!-- Right -->
        <div class="md:text-right">

            <p class="
                uppercase
                font-[350]
                tracking-[0.35em]
                text-zinc-500
                text-[clamp(2vh,1vw,5vh)]
            ">
                Get In Touch
            </p>

            <a
                href="mailto:contact@firstlightdevelopers.com"
                class="
                    inline-block
                    text-white
                    font-light
                    tracking-[-0.02em]
                    transition-opacity
                    duration-300
                    hover:opacity-60
                    text-[clamp(2.4vh,1.6vw,3vh)]
                    md:text-[clamp(2vh,1.3vw,2.6vh)]
                "
            >
                contact@firstlightdevelopers.com
            </a>

        </div>

    </div>


   

    <!-- Ambient Glow -->
    <div class="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.03]
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]
    "></div>
    

</footer>

  </main>
`