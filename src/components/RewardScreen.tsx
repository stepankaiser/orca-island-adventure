import React from "react";
import { Card } from "@/components/ui/card";

const RewardScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-[90%] max-w-[500px] p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">🎄 Surprise! 🎄</h2>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-center text-ocean-dark">
            Whale Watching Adventure
          </h3>
          
          <div className="space-y-2">
            <p className="text-lg text-center">Sunday</p>
            <p className="text-lg text-center font-bold">December 29, 2024</p>
            
            <div className="flex justify-center space-x-2 items-center">
              <span>•</span>
              <p>Arrive: 11:00 AM</p>
              <span>•</span>
            </div>
            
            <div className="text-center">
              <p>Starts: 11:30 AM</p>
              <p>Duration: 270 minutes</p>
              <p>Ends: 4:00 PM</p>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-center mb-2">Meeting Location</h4>
              <p className="text-center">Check-in & Departure Point</p>
              <p className="text-center font-medium">459 Admiral Way, Edmonds, WA</p>
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-center font-semibold">Purchase Confirmation</p>
              <p className="text-center text-lg font-mono">Code: 23FDC2</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RewardScreen;