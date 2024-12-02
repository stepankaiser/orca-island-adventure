import Game from "@/components/Game";

const Index = () => {
  return (
    <div className="min-h-screen bg-ocean-light py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-navy">
          Help Orca reach the finish line!
        </h1>
        <p className="text-center mb-4 text-gray-600">
          Use arrow keys to guide the orca. Avoid the islands!
        </p>
        <Game />
      </div>
    </div>
  );
};

export default Index;