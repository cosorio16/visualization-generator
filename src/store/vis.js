import { create } from "zustand";

const useVis = create((set) => ({
  levels: [],
  currentSub: 0,
  setCurrentSub: (newSub) => set({ currentSub: newSub }),
  setLevelsData: (newLevels) => set({ levels: newLevels }),
  quantityCreate: 1,
  showLevels: true,
  showSubLevels: true,
  toggleShow: () => set((state) => ({ showLevels: !state.showLevels })),
  toggleSubShow: () =>
    set((state) => ({ showSubLevels: !state.showSubLevels })),
  addInput: () =>
    set((state) => ({
      quantityCreate: state.quantityCreate + 1,
    })),

  addLevels: (index, value) =>
    set((state) => {
      const inputData = [...state.levels];
      inputData[index] = value;
      return { levels: inputData };
    }),
  deleteLevel: (index) =>
    set((state) => {
      const inputData = [...state.levels];
      inputData.splice(index, 1);
      return { levels: inputData, quantityCreate: state.quantityCreate - 1 };
    }),
}));

export default useVis;
