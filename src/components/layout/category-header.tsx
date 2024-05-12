interface Category {
  title: string;
}

const CategroryHeader: React.FC<Category> = ({ title }) => {
  return (
    <div className="w-full sm:h-[246px] h-[102px] bg-black flex items-center justify-center">
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
