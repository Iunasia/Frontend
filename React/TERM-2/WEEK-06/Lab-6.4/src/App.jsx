import './App.css'

const SmartImage = ({ src }) => {

  return (
    <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
      {src ? (
        <img
          src={src}
          alt="Loaded content"
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-gray-500">No Image</p>
      )}
    </div>
  );
};