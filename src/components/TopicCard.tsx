import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const TopicCard = ({ icon: Icon, title, description, onClick }: TopicCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="relative p-3 sm:p-4 md:p-6 lg:p-8 cursor-pointer group overflow-hidden h-full min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px] rounded-2xl hover:scale-[1.02] transition-transform duration-300"
      style={{ backgroundColor: 'rgba(88, 28, 135, 0.8)', border: 'none', boxShadow: 'none' }}
    >
      <div className="relative flex flex-col items-center text-center h-full justify-between space-y-3 sm:space-y-4">
        {/* Ícone simples e flat */}
        <div className="flex-shrink-0">
          <div className="p-2 sm:p-3 md:p-4 lg:p-5 rounded-2xl bg-white/10">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>

        {/* Título e Descrição */}
        <div className="flex-grow flex flex-col justify-center">
          <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white line-clamp-1">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mt-2">{description}</p>
        </div>
      </div>
    </Card>
  );
};
