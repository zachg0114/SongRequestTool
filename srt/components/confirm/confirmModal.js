import React from "react";
import {Spinner, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from 'next/link';
import { useState } from 'react';
import useVideo from '../util/useVideo'
import sendSongToQueue from '../util/sendQueue';
import { useRouter } from 'next/navigation';
export default function ConfirmModal({ id }) {
    const {data, isLoading, error} = useVideo(id);
    const router = useRouter();
    const handleConfirm = async () => {
        const res = await sendSongToQueue(data);
        if(res.status != 200){
            alert("Error: " + res.statusText);
        }
        else{
            alert("Song added to queue!");
            router.push('/') 
        }
    }
  return (
<>
        <ModalContent>
          {(onClose) => (
            <section>
              <ModalHeader className="flex flex-col gap-1 pb-0">{data?.title}</ModalHeader>
              {isLoading && 
                <div className="flex justify-center items-center h-[250px]"> {/* Ensure the container is large enough to center the spinner vertically */}
                  <Spinner /> {/* Make sure the spinner is the only child to center it correctly */}
              </div>
              }
              {!isLoading && <>
              <ModalBody>
              <p>Duration: {data?.duration_formatted}</p>
              <div className="flex flex-col justify-center items-center">
                    <iframe
                        src={`https://youtube.com/embed/${data?.id}`}
                        alt={data?.title}
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
                <Button color="secondary" onPress={onClose} onClick={handleConfirm}>
                  Confirm Request
                </Button>
              </ModalFooter>
              </>
                }
            </section>
          )}
        </ModalContent>
    </>
  );
}
