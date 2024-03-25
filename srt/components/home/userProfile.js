import Link from 'next/link';
import { User } from "@nextui-org/react";

export default function UserProfile({ userName, userAt, userAtLink, avatarSrc }) {
  return (
    <div className="scale-150 pb-4"> {/* Use Tailwind's scale utility */}
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
