interface SwitcherOneProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isDisabled?: boolean;
}

const SwitcherTwo = ({ enabled, setEnabled, isDisabled = false }: SwitcherOneProps) => {
  return (
    <div x-data="{ switcherToggle: false }">
      <label
        htmlFor="toggle2"
        className={`flex cursor-pointer select-none items-center ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div className="relative">
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only"
            checked={enabled}
            onChange={() => {
              if (!isDisabled) {
                setEnabled(!enabled);
              }
            }}
            disabled={isDisabled}
          />
          <div className="h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute -top-1 left-0 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${enabled && "!right-0 !translate-x-full !bg-primary dark:!bg-white"
              }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherTwo;
