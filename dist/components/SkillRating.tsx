import React from 'react';

interface SkillRatingProps {
  rating: number;
  maxRating?: number;
}

const SkillRating: React.FC<SkillRatingProps> = ({ rating, maxRating = 3 }) => {
  return (
    <div className="flex gap-1.5 mt-2">
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full transition-colors ${
            index < rating ? 'bg-sky-400' : 'bg-slate-600'
          }`}
        ></span>
      ))}
    </div>
  );
};

export default SkillRating;
