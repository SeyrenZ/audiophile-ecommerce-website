interface Category {
  title: string;
}

const CategroryHeader: React.FC<Category> = ({ title }) => {
  return (
    <div className="w-full sm:h-[336px] h-[192px] sm:pb-24 pb-7 bg-black flex items-end justify-center">
      <div
        className="sm:text-[40px] sm:leading-[44px] text-[28px] text-white font-bold tracking-[1.43px]"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        {title}
      </div>
    </div>
  );
};

export default CategroryHeader;
