function UserProfile({
  name,
  email,
  bio,
  website,
  isPremium,
  followerCount,
}) {
 
  let premiumBadge = null;

  if (isPremium) {
    premiumBadge = <span className="badge">⭐ PREMIUM</span>;
  }

  
  const followersText =
    followerCount > 999 ? "999+" : followerCount;

  return (
    <div className="profile-card">
      <h2>
        {name} {premiumBadge}
      </h2>

      <p>Email: {email}</p>

    
      <p>Obserwujący: {followersText}</p>

      {bio && (
        <p className="bio">
          bio: {bio}
        </p>
      )}


      {website && (
        <p>
          website: <a href={website}>{website}</a>
        </p>
      )}
    </div>
  );
}

export default UserProfile;