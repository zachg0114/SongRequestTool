import Link from 'next/link';
import { User } from "@nextui-org/react";

export default function UserProfile({ userName, userAt, userAtLink, avatarSrc }) {
  return (
    <div className="pb-4"> 
      <User
        name={userName}
        description={(
          <Link href={userAtLink} size="sm" isexternal="true">
            {userAt}
          </Link>
        )}
        avatarProps={{
          src: avatarSrc
        }}
      />
    </div>
  );
}
