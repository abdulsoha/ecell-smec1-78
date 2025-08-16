import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Users, Lightbulb, ChevronDown, ChevronUp, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpcomingEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);


  const toggleEvent = (index: number) => {
    setExpandedEvents(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [index] // Only allow one month to be expanded at a time
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      month: "AUGUST 2025",
      theme: "Ignite the Spark",
      icon: <Lightbulb className="w-6 h-6" />,
      activities: [
        "Week 1: Welcome Post – Introduce E-Cell SMEC, vision & mission.",
        "Week 2: Team Introduction – Highlight core team with cool bios.",
        "Week 3: Throwback Reels – Past event memories & testimonials.",
        "Week 4: Startup Saturday Series – Reels/Posts about trending startups."
      ]
    },
    {
      month: "SEPTEMBER 2025",
      theme: "Ideate & Inspire",
      icon: <Users className="w-6 h-6" />,
      activities: [
        "Week 1: Startup Idea Challenge Announcement – Tease & hype post.",
        "Week 2: Knowledge Nuggets – Bite-sized posts on startup terms (MVP, Pivot, etc.)",
        "Week 3: Behind the Scenes – Preparations, teamwork glimpses.",
        "Week 4: Guest Speaker Clip – Snippet from an inspiring entrepreneur."
      ]
    },
    {
      month: "OCTOBER 2025",
      theme: "Build It",
      icon: <Clock className="w-6 h-6" />,
      activities: [
        "Week 1: Mini-Workshop Promo – Design, marketing, or biz model canvas.",
        "Week 2: Student Startup Spotlight – Local or SMEC-based founders.",
        "Week 3: Founder Friday – Quotes + photo from famous founders.",
        "Week 4: Infographic Post – Process of validating a startup idea."
      ]
    },
    {
      month: "NOVEMBER 2025",
      theme: "Pitch & Present",
      icon: <Calendar className="w-6 h-6" />,
      activities: [
        "Week 1: Pitching Basics Carousel – How to make a killer pitch.",
        "Week 2: Myth-Busting Posts – Startup myths vs facts.",
        "Week 3: Pitch Deck Contest – Announce + call for entries.",
        "Week 4: Reel Recap of Pitch Week – Highlights + bloopers."
      ]
    },
    {
      month: "DECEMBER 2025",
      theme: "Startup Culture Month",
      icon: <Users className="w-6 h-6" />,
      activities: [
        "Week 1: Ecosystem Map – Local startup hubs & incubators.",
        "Week 2: Book/Podcast Recommendations – Entrepreneur must-reads/listens.",
        "Week 3: Collab Content – Partner with other college cells.",
        "Week 4: Fun Polls & Memes – Chill & engage with your audience."
      ]
    },
    {
      month: "JANUARY 2026",
      theme: "New Year, New Ventures",
      icon: <Lightbulb className="w-6 h-6" />,
      activities: [
        "Week 1: Goal Setting Challenge – Encourage followers to share biz goals.",
        "Week 2: Trend Posts – 2026 startup trends, AI, Web3, etc.",
        "Week 3: AMA Stories – Let audience ask you questions.",
        "Week 4: Vision Board Posts – What E-Cell SMEC aims for this year."
      ]
    },
    {
      month: "FEBRUARY 2026",
      theme: "Execution Month",
      icon: <Clock className="w-6 h-6" />,
      activities: [
        "Week 1: Startup Toolkit Post – Top free tools for student founders.",
        "Week 2: Event/Bootcamp Teaser – Promo for upcoming major event.",
        "Week 3: Innovation Series – Share futuristic ideas or tech.",
        "Week 4: Campus Founder Interviews – Mini reels or Q&A."
      ]
    },
    {
      month: "MARCH 2026",
      theme: "National Exposure",
      icon: <Calendar className="w-6 h-6" />,
      activities: [
        "Week 1: IIT/IIM E-Cell SMEC Collabs – Shoutouts, collab content.",
        "Week 2: Startup India Awareness – Policies, programs, schemes.",
        "Week 3: Blog Post/Article – \"How SMEC is growing entrepreneurs.\"",
        "Week 4: Documentary-style Reel – Journey so far (montage style)."
      ]
    },
    {
      month: "APRIL 2026",
      theme: "Wrap-up & Reflect",
      icon: <Users className="w-6 h-6" />,
      activities: [
        "Week 1: Year in Review – Milestones achieved, events conducted.",
        "Week 2: Giveaway or Quiz Contest – For engagement.",
        "Week 3: Team Gratitude Post – Highlight efforts of volunteers.",
        "Week 4: Save the Date/What's Next – Tease for next year or summer plans."
      ]
    }
  ];

  return (
    <section id="upcoming-events" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Our <span className="text-primary">Upcoming Events</span>
          </h2>
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Join us on an exciting journey through our content calendar, designed to inspire, educate, and empower the next generation of entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center min-w-0 flex-1">
                    <div className="text-primary mr-3 flex-shrink-0">
                      {event.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-foreground truncate">{event.month}</h3>
                      <p className="text-sm text-primary font-medium truncate">"{event.theme}"</p>
                    </div>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    {index === 0 ? (
                      <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
                        Ongoing
                      </span>
                    ) : (
                      <span className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium whitespace-nowrap">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleEvent(index)}
                  className="flex-1 flex items-center justify-center"
                >
                  View Details
                  {expandedEvents.includes(index) ? (
                    <ChevronUp className="ml-2 w-4 h-4" />
                  ) : (
                    <ChevronDown className="ml-2 w-4 h-4" />
                  )}
                </Button>
                {index === 0 && (
                  <Button
                    variant="hero-primary"
                    size="sm"
                    onClick={() => window.open('https://forms.gle/QTnqyF6hj3JE2fV27', '_blank')}
                    className="flex-1"
                  >
                    Register Now
                  </Button>
                )}
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedEvents.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-3">
                  {event.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;