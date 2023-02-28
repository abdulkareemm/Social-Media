import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
const ProfileModal = ({ modalOpened, setModalOpen }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpen(false)}
      size="45%"
    >
      <form className="flex flex-col items-center bg-cardColor p-4 gap-4">
        <h3 className="text-xl font-bold mb-[3rem]">Your Info</h3>
        <div className="flex items-center justify-center w-full gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Works at"
          name="worksAt"
          className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
        />

        <div className="flex items-center justify-center w-full gap-4">
          <input
            type="text"
            placeholder="Lives in"
            name="livesIn"
            className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
          />
        </div>

        <input
          type="text"
          className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
          placeholder="Relationship status"
          name="relationship"
        />
        <div>
          Profile Image
          <input type="file" />
          Cover Image
          <input type="file" />
        </div>
        <button className="button infoButton" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
