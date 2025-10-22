import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic") || undefined;

  return (
    <div className="flex flex-col h-screen bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <header className="relative border-b border-border/50 glass-strong backdrop-blur-xl sticky top-0 z-10 animate-slide-in-up">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full glass hover:glass-strong transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-4">
            {/* Animated Avatar with Online Indicator */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 blur-xl animate-glow-pulse"></div>
              <div className="relative w-12 h-12 rounded-2xl glass-strong p-1.5">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                  <span className="text-white font-black text-lg">S</span>
                </div>
              </div>
              {/* Online Indicator with Pulse */}
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-secondary rounded-full border-2 border-background animate-glow-pulse"></div>
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Soph</h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                Online agora
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex-1 overflow-hidden">
        <ChatInterface selectedTopic={topic} />
      </main>
    </div>
  );
};

export default Chat;
