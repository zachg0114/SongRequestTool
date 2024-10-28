// ConfirmModal.js
import React, { useEffect, useState } from "react";
import {
  Spinner,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import addNotification from "react-push-notification";
import sendSongToQueue from "../util/sendQueue";

export default function ConfirmModal({ id }) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideoInfo() {
      try {
        const response = await fetch(`/api/videoInfo?id=${id}`);
        if (!response.ok) throw new Error("Failed to fetch video info");
        const videoData = await response.json();
        console.log("Fetched video data:", videoData); // Debugging line
        setData(videoData);
      } catch (error) {
        console.error("Error fetching video info:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVideoInfo();
  }, [id]);

  const handleConfirm = async () => {
    if (!data || !data.videoDetails?.videoId) {
      console.error("Data is missing or invalid:", data);
      addNotification({
        title: "Error",
        message: "Invalid video data. Cannot add to queue.",
        theme: "red",
      });
      return;
    }
    
    const res = await sendSongToQueue(data.videoDetails);
    if (res.status !== 200) {
      addNotification({
        title: "Error",
        message: res.statusText,
        theme: "red",
      });
    } else {
      addNotification({
        title: "Success",
        message: `${data.videoDetails.title} has been added to the queue!`,
        theme: "black",
      });
    }
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <section>
            <ModalHeader className="flex flex-col gap-1 pb-0">
              {data?.videoDetails?.title}
            </ModalHeader>
            {isLoading ? (
              <div className="flex justify-center items-center h-[250px]">
                <Spinner />
              </div>
            ) : (
              <>
                <ModalBody>
                  <p>Duration: {data?.videoDetails?.lengthSeconds}</p>
                  <div className="flex flex-col justify-center items-center">
                    <iframe
                      src={data?.videoDetails?.embed?.iframeUrl}
                      alt={data?.videoDetails?.title}
                      width="400"
                      height="250"
                      className="md:w-[400px] md:h-[250px] w-[300px] h-[200px]"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="secondary"
                    onPress={onClose}
                    onClick={handleConfirm}
                  >
                    Confirm Request
                  </Button>
                </ModalFooter>
              </>
            )}
          </section>
        )}
      </ModalContent>
    </>
  );
}
