// Contextually matched images for each topic and option
const topics = [  
  ['What would you pick for a free Saturday?', [
    { label: 'Beach day', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Movie marathon', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },
    { label: 'Gaming night', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Road trip', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800' }
  ]],  
  ['Which snack would you choose first?', [
    { label: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' },
    { label: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd' },
    { label: 'Ice cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f' },
    { label: 'Fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877' }
  ]],  
  ['Which vibe matches you most?', [
    { label: 'Chill', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843' },
    { label: 'Adventurous', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60' },
    { label: 'Funny', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc' },
    { label: 'Competitive', image: 'https://images.unsplash.com/photo-1569517282132-25d22f28266e' }
  ]],  
  ['Pick a place for a friend hangout.', [
    { label: 'Cafe', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb' },
    { label: 'Park', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f' },
    { label: 'Mall', image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe' },
    { label: 'Home', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92' }
  ]],  
  ['What kind of trip sounds best?', [
    { label: 'Mountains', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
    { label: 'Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'City', image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82' },
    { label: 'Village', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef' }
  ]],  
  ['Which hobby would you try?', [
    { label: 'Photography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' },
    { label: 'Cooking', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d' },
    { label: 'Gaming', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Music', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' }
  ]],  
  ['Pick your ideal evening.', [
    { label: 'Sunset walk', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Party', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' },
    { label: 'Study session', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173' },
    { label: 'Late-night chat', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' }
  ]],  
  ['Which pet would you pick?', [
    { label: 'Dog', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1' },
    { label: 'Cat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' },
    { label: 'Bird', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797' },
    { label: 'Rabbit', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308' }
  ]],  
  ['Choose a superpower.', [
    { label: 'Teleportation', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5' },
    { label: 'Flying', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071' },
    { label: 'Time travel', image: 'https://images.unsplash.com/photo-1501139083538-0137583dde90' },
    { label: 'Invisibility', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23' }
  ]],  
  ['Which weather do you like?', [
    { label: 'Rainy', image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721' },
    { label: 'Sunny', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Cloudy', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda' },
    { label: 'Cold', image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22' }
  ]],  
  ['Pick a breakfast.', [
    { label: 'Dosa', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976' },
    { label: 'Idli', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc' },
    { label: 'Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
    { label: 'Pancakes', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445' }
  ]],  
  ['Which drink would you choose?', [
    { label: 'Tea', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3' },
    { label: 'Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
    { label: 'Juice', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423' },
    { label: 'Milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699' }
  ]],  
  ['Choose a movie mood.', [
    { label: 'Comedy', image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65' },
    { label: 'Action', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1' },
    { label: 'Romance', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7' },
    { label: 'Mystery', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5' }
  ]],  
  ['Which game style do you prefer?', [
    { label: 'Story', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420' },
    { label: 'Multiplayer', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e' },
    { label: 'Puzzle', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a' },
    { label: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' }
  ]],  
  ['Pick a music vibe.', [
    { label: 'Melody', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
    { label: 'Mass', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745' },
    { label: 'Lo-fi', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
    { label: 'Rock', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee' }
  ]],  
  ['Which color feels most like you?', [
    { label: 'Blue', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Black', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071' },
    { label: 'Green', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc' },
    { label: 'Purple', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853' }
  ]],  
  ['Choose a school/college memory.', [
    { label: 'Friends', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
    { label: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' },
    { label: 'Canteen', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5' },
    { label: 'Trips', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800' }
  ]],  
  ['Which gift would you like?', [
    { label: 'Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { label: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { label: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { label: 'Book', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61' }
  ]],  
  ['Pick a social media activity.', [
    { label: 'Posting', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113' },
    { label: 'Reels', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d' },
    { label: 'Chatting', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432' },
    { label: 'Watching', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37' }
  ]],  
  ['What would you do with ₹10,000?', [
    { label: 'Save it', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e' },
    { label: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
    { label: 'Buy gadgets', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
    { label: 'Treat friends', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205' }
  ]],  
  ['Choose a dream vehicle.', [
    { label: 'Car', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
    { label: 'Bike', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc' },
    { label: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf' },
    { label: 'Sports car', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a' }
  ]],  
  ['Which place would you explore?', [
    { label: 'Japan', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26' },
    { label: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
    { label: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
    { label: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9' }
  ]],  
  ['Pick a workout.', [
    { label: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' },
    { label: 'Running', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8' },
    { label: 'Cricket', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da' },
    { label: 'Badminton', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea' }
  ]],  
  ['Which food wins?', [
    { label: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8' },
    { label: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' },
    { label: 'Noodles', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
    { label: 'Fried rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b' }
  ]],  
  ['Choose a festival vibe.', [
    { label: 'Lights', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176' },
    { label: 'Food', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5' },
    { label: 'Music', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
    { label: 'Family', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300' }
  ]],  
  ['Pick a study style.', [
    { label: 'Morning', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { label: 'Night', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' },
    { label: 'With friends', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644' },
    { label: 'Last minute', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173' }
  ]],  
  ['Which app would you keep?', [
    { label: 'Chat', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432' },
    { label: 'Maps', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1' },
    { label: 'Music', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
    { label: 'Video', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37' }
  ]],  
  ['Choose a fictional world.', [
    { label: 'Anime', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f' },
    { label: 'Superheroes', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820' },
    { label: 'Fantasy', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23' },
    { label: 'Sci-fi', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' }
  ]],  
  ['Pick a weekend plan.', [
    { label: 'Sleep', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55' },
    { label: 'Explore', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
    { label: 'Play', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420' },
    { label: 'Learn', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655' }
  ]],  
  ['Which photo would you post?', [
    { label: 'Selfie', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
    { label: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
    { label: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
    { label: 'Friends', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' }
  ]],  
  ['Choose a fashion style.', [
    { label: 'Casual', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
    { label: 'Street', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
    { label: 'Formal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf' },
    { label: 'Sporty', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd' }
  ]],  
  ['Which place feels relaxing?', [
    { label: 'Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Forest', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b' },
    { label: 'Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92' },
    { label: 'Cafe', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb' }
  ]],  
  ['Pick a challenge.', [
    { label: 'Escape room', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5' },
    { label: 'Quiz', image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b' },
    { label: 'Treasure hunt', image: 'https://images.unsplash.com/photo-1501139083538-0137583dde90' },
    { label: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' }
  ]],  
  ['Which subject vibe do you prefer?', [
    { label: 'Tech', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
    { label: 'Business', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' },
    { label: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5' },
    { label: 'Science', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d' }
  ]],  
  ['Choose a phone feature.', [
    { label: 'Camera', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' },
    { label: 'Battery', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0' },
    { label: 'Gaming', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Display', image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147' }
  ]],  
  ['Which talent would you want?', [
    { label: 'Singing', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81' },
    { label: 'Dancing', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad' },
    { label: 'Coding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
    { label: 'Drawing', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' }
  ]],  
  ['Pick a late-night snack.', [
    { label: 'Noodles', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' },
    { label: 'Chips', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b' },
    { label: 'Chocolate', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b' },
    { label: 'Sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af' }
  ]],  
  ['Which friendship activity is fun?', [
    { label: 'Roasting', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc' },
    { label: 'Gaming', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
    { label: 'Talking', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' }
  ]],  
  ['Choose a dream room.', [
    { label: 'Gaming room', image: 'https://images.unsplash.com/photo-1612287233202-b51b36671dfc' },
    { label: 'Studio', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04' },
    { label: 'Library', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da' },
    { label: 'Chill room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92' }
  ]],  
  ['Which transport feels fun?', [
    { label: 'Train', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3' },
    { label: 'Bike', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc' },
    { label: 'Car', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
    { label: 'Flight', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05' }
  ]],  
  ['Pick a photo style.', [
    { label: 'Candid', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9' },
    { label: 'Portrait', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
    { label: 'Landscape', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05' },
    { label: 'Funny', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc' }
  ]],  
  ['Choose a competition.', [
    { label: 'Coding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
    { label: 'Gaming', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
    { label: 'Quiz', image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b' }
  ]],  
  ['Which celebration do you like?', [
    { label: 'Birthday', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176' },
    { label: 'College fest', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' },
    { label: 'Festival', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
    { label: 'Surprise party', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d' }
  ]],  
  ['Pick a daily habit.', [
    { label: 'Music', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
    { label: 'Exercise', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' },
    { label: 'Reading', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61' },
    { label: 'Scrolling', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113' }
  ]],  
  ['Which dessert?', [
    { label: 'Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
    { label: 'Ice cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f' },
    { label: 'Gulab jamun', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950' },
    { label: 'Brownie', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c' }
  ]],  
  ['Choose a night activity.', [
    { label: 'Movies', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },
    { label: 'Gaming', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Chatting', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
    { label: 'Walking', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }
  ]],  
  ['Which quality matters in a friend?', [
    { label: 'Honesty', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
    { label: 'Humor', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc' },
    { label: 'Support', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846' },
    { label: 'Loyalty', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' }
  ]],  
  ['Pick a team role.', [
    { label: 'Leader', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
    { label: 'Planner', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
    { label: 'Creative', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' },
    { label: 'Problem solver', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978' }
  ]],  
  ['Which photo theme?', [
    { label: 'Nature', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05' },
    { label: 'People', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
    { label: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
    { label: 'Architecture', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' }
  ]],  
  ['Choose a dream skill.', [
    { label: 'Public speaking', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2' },
    { label: 'Coding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
    { label: 'Editing', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d' },
    { label: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5' }
  ]],  
  ['Which hangout food?', [
    { label: 'BBQ', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1' },
    { label: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' },
    { label: 'Street food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
    { label: 'Cafe snacks', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb' }
  ]],  
  ['Pick a learning method.', [
    { label: 'Videos', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37' },
    { label: 'Practice', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
    { label: 'Books', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61' },
    { label: 'Projects', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' }
  ]],  
  ['Which adventure?', [
    { label: 'Trekking', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306' },
    { label: 'Camping', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4' },
    { label: 'Road trip', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800' },
    { label: 'Water sports', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' }
  ]],  
  ['Choose a playlist mood.', [
    { label: 'Happy', image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65' },
    { label: 'Calm', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843' },
    { label: 'Hype', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745' },
    { label: 'Emotional', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7' }
  ]],  
  ['Which friend message would you send?', [
    { label: 'Miss you', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
    { label: 'Come out', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18' },
    { label: 'Wanna play?', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
    { label: 'Guess what!', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70' }
  ]],  
  ['Pick a future workspace.', [
    { label: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
    { label: 'Home', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92' },
    { label: 'Cafe', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb' },
    { label: 'Co-working', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2' }
  ]],  
  ['Which photo would make you smile?', [
    { label: 'Childhood', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9' },
    { label: 'Friends', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
    { label: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828' },
    { label: 'Pet', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1' }
  ]],  
  ['Choose a mystery activity.', [
    { label: 'Detective game', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5' },
    { label: 'Escape room', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5' },
    { label: 'Puzzle', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a' },
    { label: 'Treasure map', image: 'https://images.unsplash.com/photo-1501139083538-0137583dde90' }
  ]],  
  ['Which final vibe?', [
    { label: 'Peaceful', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { label: 'Funny', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc' },
    { label: 'Epic', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23' },
    { label: 'Random', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659' }
  ]]  
];  

export const questions = topics.map(([text, optionList], i) => ({  
  id: i + 1,  
  text,  
  options: optionList.map(({ label, image }) => ({ 
    label, 
    image: `${image}?auto=format&fit=crop&w=700&q=80` 
  })),  
  correctIndex: (i * 7 + 1) % 4  
}));