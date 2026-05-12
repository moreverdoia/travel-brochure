let currentSound = null;
let currentId = null;

// 🔥 guardar audio actual
export const setCurrentSound = (sound, id) => {
  currentSound = sound;
  currentId = id;
};

// 🔥 obtener audio actual
export const getCurrentSound = () => currentSound;

// 🔥 obtener ID actual
export const getCurrentId = () => currentId;

// 🔥 detener audio actual
export const stopCurrentSound = async () => {
  try {
    if (currentSound) {
      await currentSound.pauseAsync();
    }
  } catch (e) {
    console.log("Stop sound error:", e);
  }
};