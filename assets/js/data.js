/* ============================================================
   Gimme, centrale data
   Alle recepten, artikelen en het weekmenu op één plek.
   ============================================================ */

const RECIPES = [
  {
    id: 1, slug: 'morning-shot', title: 'The Morning Shot That Starts My Day Right',
    excerpt: 'Warm water, lemon and our Proper Debloated Syrup.',
    img: 'assets/img/morning-shot.jpg', time: '3 min', serves: 1,
    focuses: ['gut'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Warm water', qty: 250, unit: 'ml' },
      { name: 'Lemon juice (fresh)', qty: 15, unit: 'ml' },
      { name: 'Fresh ginger (grated)', qty: 5, unit: 'g' },
      { name: 'Honey or maple syrup', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 38, protein: 0.2, carbs: 10.1, fat: 0.1 },
    steps: [
      'Warm the water until comfortably hot, not boiling, boiling water kills the fresh, bright flavor of the lemon.',
      'Squeeze in the lemon juice and stir in the grated ginger.',
      'Add the honey, stir once more and drink it slowly, ideally before breakfast.',
    ],
  },
  {
    id: 2, slug: 'lime-mocktail', title: 'Fresh Lime Mocktail with Mint and Ginger',
    excerpt: 'A zingy, cooling mocktail, ready in five minutes.',
    img: 'assets/img/lime-mocktail.jpg', time: '5 min', serves: 2,
    focuses: ['gut'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Sparkling water', qty: 400, unit: 'ml' },
      { name: 'Lime juice (fresh)', qty: 40, unit: 'ml' },
      { name: 'Fresh mint leaves', qty: 8, unit: 'g' },
      { name: 'Fresh ginger (sliced)', qty: 10, unit: 'g' },
      { name: 'Ice cubes', qty: 150, unit: 'g' },
    ],
    nutrition: { calories: 12, protein: 0.3, carbs: 3.2, fat: 0.1 },
    steps: [
      'Lightly crush the mint leaves and ginger slices in the bottom of a jug to release their oils.',
      'Add the lime juice and ice cubes, then top up with sparkling water.',
      'Stir gently, taste, and add more lime if you like it sharper. Serve right away.',
    ],
  },
  {
    id: 3, slug: 'ginger-mint-tea', title: 'Ginger-Mint Tea for After Dinner',
    excerpt: 'A warm, simple tea we reach for most evenings.',
    img: 'assets/img/ginger-mint-tea.jpg', time: '6 min', serves: 2,
    focuses: ['gut', 'anti-inflammatory'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Water', qty: 500, unit: 'ml' },
      { name: 'Fresh ginger (sliced)', qty: 15, unit: 'g' },
      { name: 'Fresh mint leaves', qty: 10, unit: 'g' },
      { name: 'Honey (optional)', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 25, protein: 0.3, carbs: 6.2, fat: 0.1 },
    steps: [
      'Bring the water to a gentle simmer with the ginger slices and let it steep for 4 minutes.',
      'Take the pot off the heat, add the mint leaves and cover for 2 more minutes.',
      'Strain into cups and sweeten with a little honey if you like.',
    ],
  },
  {
    id: 4, slug: 'smoothie-bowl', title: 'Smoothie Bowl with a Ginger Boost',
    excerpt: 'Banana, oats and a proper hit of fresh ginger.',
    img: 'assets/img/smoothie-bowl.jpg', time: '10 min', serves: 2,
    focuses: ['gut'], tags: ['breakfast', 'vegan', 'high-fiber'],
    ingredients: [
      { name: 'Frozen banana', qty: 240, unit: 'g' },
      { name: 'Rolled oats', qty: 60, unit: 'g' },
      { name: 'Plant-based yogurt', qty: 200, unit: 'g' },
      { name: 'Fresh ginger (grated)', qty: 8, unit: 'g' },
      { name: 'Mixed berries (topping)', qty: 100, unit: 'g' },
    ],
    nutrition: { calories: 312, protein: 8.3, carbs: 60.1, fat: 6.1 },
    steps: [
      'Blend the frozen banana, oats, yogurt and grated ginger until completely smooth and thick.',
      'Divide between two bowls; the mixture should hold a spoon upright.',
      'Top with the berries and eat straight away, before it softens.',
    ],
  },
  {
    id: 5, slug: 'overnight-oats', title: 'Overnight Oats with Orange and Ginger',
    excerpt: "Prep it the night before, wake up to breakfast that's actually ready.",
    img: 'assets/img/overnight-oats.jpg', time: '10 min', serves: 2,
    focuses: ['gut'], tags: ['breakfast', 'vegan', 'high-fiber'],
    ingredients: [
      { name: 'Rolled oats', qty: 100, unit: 'g' },
      { name: 'Plant-based milk', qty: 250, unit: 'ml' },
      { name: 'Chia seeds', qty: 20, unit: 'g' },
      { name: 'Orange (segments)', qty: 130, unit: 'g' },
      { name: 'Fresh ginger (grated)', qty: 5, unit: 'g' },
      { name: 'Maple syrup', qty: 15, unit: 'ml' },
    ],
    nutrition: { calories: 345, protein: 12.1, carbs: 58, fat: 8.6 },
    steps: [
      'Stir the oats, milk, chia seeds, grated ginger and maple syrup together in two jars.',
      'Cover and refrigerate overnight, or for at least 6 hours.',
      'In the morning, top with the orange segments and a splash of extra milk if too thick.',
    ],
  },
  {
    id: 6, slug: 'kimchi-fried-rice', title: 'Gut-Friendly Kimchi Fried Rice',
    excerpt: 'Leftover rice, a spoonful of kimchi and a fried egg.',
    img: 'assets/img/kimchi-fried-rice.jpg', time: '20 min', serves: 2,
    focuses: ['gut'], tags: ['dinner', 'vegetarian'],
    ingredients: [
      { name: 'Cooked rice (day-old)', qty: 300, unit: 'g' },
      { name: 'Kimchi (chopped)', qty: 150, unit: 'g' },
      { name: 'Eggs', qty: 110, unit: 'g' },
      { name: 'Spring onions', qty: 30, unit: 'g' },
      { name: 'Sesame oil', qty: 15, unit: 'ml' },
      { name: 'Soy sauce', qty: 20, unit: 'ml' },
    ],
    nutrition: { calories: 362, protein: 13.1, carbs: 46.1, fat: 13.9 },
    steps: [
      'Heat the sesame oil in a wok or large pan and fry the kimchi for 2 minutes until fragrant.',
      'Add the rice and soy sauce, breaking up any clumps, and stir-fry for 5 minutes until hot and slightly crispy.',
      'Fry the eggs separately in a little oil until the edges are crisp and the yolks still runny.',
      'Serve the rice topped with a fried egg and plenty of sliced spring onion.',
    ],
  },
  {
    id: 7, slug: 'yogurt-bowl', title: 'Probiotic Yogurt Bowl with Fermented Berries',
    excerpt: 'Live yogurt cultures and a spoon of fermented berries.',
    img: 'assets/img/yogurt-bowl.jpg', time: '5 min', serves: 2,
    focuses: ['gut'], tags: ['breakfast', 'vegetarian', 'high-protein'],
    ingredients: [
      { name: 'Greek yogurt (live cultures)', qty: 300, unit: 'g' },
      { name: 'Fermented or stewed berries', qty: 120, unit: 'g' },
      { name: 'Granola', qty: 60, unit: 'g' },
      { name: 'Honey', qty: 15, unit: 'ml' },
    ],
    nutrition: { calories: 340, protein: 16.9, carbs: 37.9, fat: 13.7 },
    steps: [
      'Divide the yogurt between two bowls, swirling it with the back of a spoon.',
      'Spoon the berries over the top, letting a little juice run into the yogurt.',
      'Finish with the granola and a drizzle of honey.',
    ],
  },
  {
    id: 8, slug: 'avocado-toast', title: 'Sauerkraut and Avocado Toast',
    excerpt: 'Creamy avocado, tangy sauerkraut, one slice of good bread.',
    img: 'assets/img/avocado-toast.jpg', time: '8 min', serves: 2,
    focuses: ['gut'], tags: ['lunch', 'vegan', 'high-fiber'],
    ingredients: [
      { name: 'Sourdough bread', qty: 120, unit: 'g' },
      { name: 'Ripe avocado', qty: 200, unit: 'g' },
      { name: 'Sauerkraut (drained)', qty: 100, unit: 'g' },
      { name: 'Lemon juice', qty: 10, unit: 'ml' },
      { name: 'Chili flakes', qty: 2, unit: 'g' },
    ],
    nutrition: { calories: 338, protein: 8, carbs: 43.9, fat: 16.1 },
    steps: [
      'Toast the sourdough until deeply golden and sturdy enough to carry the toppings.',
      'Mash the avocado with the lemon juice and a pinch of salt, then spread thickly on the toast.',
      'Top with a generous tangle of sauerkraut and a pinch of chili flakes.',
    ],
  },
  {
    id: 9, slug: 'kefir-smoothie', title: 'Kefir Smoothie with Flax and Banana',
    excerpt: 'A tangy, filling smoothie built around kefir.',
    img: 'assets/img/kefir-smoothie.jpg', time: '5 min', serves: 2,
    focuses: ['gut'], tags: ['breakfast', 'vegetarian', 'high-protein'],
    ingredients: [
      { name: 'Kefir', qty: 400, unit: 'ml' },
      { name: 'Banana', qty: 120, unit: 'g' },
      { name: 'Ground flaxseed', qty: 20, unit: 'g' },
      { name: 'Honey (optional)', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 242, protein: 9.1, carbs: 29.8, fat: 11 },
    steps: [
      'Add the kefir, banana, flaxseed and honey to a blender.',
      'Blend for 30 seconds until completely smooth and slightly frothy.',
      'Pour into glasses and drink fresh; the flax thickens it as it sits.',
    ],
  },
  {
    id: 10, slug: 'bone-broth', title: 'Classic Slow-Simmered Beef Bone Broth',
    excerpt: 'The long, slow, worth-it version.',
    img: 'assets/img/bone-broth.jpg', time: '20 min (+12h simmer)', serves: 8,
    focuses: ['gut'], tags: ['dinner', 'meat', 'low-carb', 'high-protein'], meat: 'beef',
    ingredients: [
      { name: 'Beef bones (marrow/joint)', qty: 1500, unit: 'g' },
      { name: 'Water', qty: 3000, unit: 'ml' },
      { name: 'Apple cider vinegar', qty: 30, unit: 'ml' },
      { name: 'Carrots', qty: 200, unit: 'g' },
      { name: 'Onion', qty: 150, unit: 'g' },
      { name: 'Celery', qty: 100, unit: 'g' },
      { name: 'Bay leaves', qty: 1, unit: 'g' },
      { name: 'Salt', qty: 10, unit: 'g' },
    ],
    nutrition: { calories: 75, protein: 15, carbs: 0, fat: 1.9 },
    steps: [
      'Roast the bones at 200°C for 30 minutes until deeply browned; this is where the flavor comes from.',
      'Transfer to a large pot with the water and vinegar and leave for 30 minutes; the acid helps draw minerals from the bones.',
      'Add the vegetables and bay leaves, bring to a bare simmer and cook gently for 10–12 hours, skimming foam occasionally.',
      'Strain, season with salt, and chill. The fat cap on top keeps it fresh for a week in the fridge.',
    ],
  },
  {
    id: 11, slug: 'chicken-broth', title: 'Ginger-Turmeric Chicken Bone Broth',
    excerpt: 'A lighter, faster broth with warming spices.',
    img: 'assets/img/chicken-broth.jpg', time: '15 min (+4h simmer)', serves: 6,
    focuses: ['gut', 'anti-inflammatory'], tags: ['dinner', 'meat', 'low-carb', 'high-protein'], meat: 'chicken',
    ingredients: [
      { name: 'Chicken carcass or wings', qty: 1000, unit: 'g' },
      { name: 'Water', qty: 2500, unit: 'ml' },
      { name: 'Fresh ginger (sliced)', qty: 30, unit: 'g' },
      { name: 'Ground turmeric', qty: 5, unit: 'g' },
      { name: 'Garlic cloves', qty: 20, unit: 'g' },
      { name: 'Salt', qty: 8, unit: 'g' },
    ],
    nutrition: { calories: 75, protein: 14.6, carbs: 2.1, fat: 2.1 },
    steps: [
      'Cover the chicken with cold water, bring slowly to a simmer and skim off any foam.',
      'Add the ginger, turmeric and garlic and simmer gently for about 4 hours.',
      'Strain and season with salt. Sip it as-is, or use it as a base for soups and ramen.',
    ],
  },
  {
    id: 12, slug: 'bone-broth-ramen', title: 'Bone Broth Ramen with a Soft Egg',
    excerpt: 'Turn a batch of homemade broth into a proper bowl of ramen.',
    img: 'assets/img/ramen.jpg', time: '20 min', serves: 2,
    focuses: ['gut'], tags: ['dinner', 'meat', 'high-protein'], meat: 'chicken',
    ingredients: [
      { name: 'Chicken bone broth', qty: 700, unit: 'ml' },
      { name: 'Ramen noodles', qty: 180, unit: 'g' },
      { name: 'Eggs', qty: 110, unit: 'g' },
      { name: 'Spring onions', qty: 30, unit: 'g' },
      { name: 'Soy sauce', qty: 20, unit: 'ml' },
      { name: 'Sesame oil', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 320, protein: 24.5, carbs: 28.4, fat: 13.6 },
    steps: [
      'Soft-boil the eggs for 6.5 minutes, plunge into cold water and peel carefully.',
      'Bring the broth to a simmer with the soy sauce and sesame oil.',
      'Cook the noodles in the broth for 3 minutes until just tender.',
      'Divide between bowls, halve the eggs on top and scatter over the spring onions.',
    ],
  },
  {
    id: 13, slug: 'broth-latte', title: 'Ten-Minute Bone Broth Latte',
    excerpt: 'A savory, warming mug for the mid-afternoon slump.',
    img: 'assets/img/broth-latte.jpg', time: '10 min', serves: 1,
    focuses: ['gut'], tags: ['drink', 'meat', 'low-carb'], meat: 'beef',
    ingredients: [
      { name: 'Beef bone broth', qty: 300, unit: 'ml' },
      { name: 'Butter or ghee', qty: 10, unit: 'g' },
      { name: 'Fresh ginger (grated)', qty: 5, unit: 'g' },
      { name: 'Black pepper', qty: 1, unit: 'g' },
    ],
    nutrition: { calories: 152, protein: 12.2, carbs: 1.5, fat: 11 },
    steps: [
      'Heat the broth with the grated ginger until steaming but not boiling.',
      'Blend with the butter and a crack of black pepper for 20 seconds until frothy.',
      'Pour into a warm mug and sip slowly.',
    ],
  },
  {
    id: 14, slug: 'baked-salmon', title: 'Ginger-Lime Baked Salmon',
    excerpt: 'A quick weeknight fillet with a bright citrus glaze.',
    img: 'assets/img/salmon.jpg', time: '25 min', serves: 2,
    focuses: ['protein', 'anti-inflammatory'], tags: ['dinner', 'fish', 'low-carb', 'high-protein'],
    ingredients: [
      { name: 'Salmon fillets', qty: 300, unit: 'g' },
      { name: 'Lime juice and zest', qty: 25, unit: 'ml' },
      { name: 'Fresh ginger (grated)', qty: 15, unit: 'g' },
      { name: 'Honey', qty: 15, unit: 'ml' },
      { name: 'Soy sauce', qty: 20, unit: 'ml' },
      { name: 'Olive oil', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 394, protein: 31, carbs: 9.1, fat: 24.6 },
    steps: [
      'Heat the oven to 200°C and line a small baking tray with parchment.',
      'Whisk the lime, ginger, honey, soy sauce and olive oil into a glaze.',
      'Brush the salmon generously and bake for 12–14 minutes, until just flaky.',
      'Spoon over the pan juices and serve with lime wedges.',
    ],
  },
  {
    id: 15, slug: 'raspberry-leaf-tea', title: 'Warm Raspberry Leaf Tea for That Time of the Month',
    excerpt: 'A gentle herbal tea for period week.',
    img: 'assets/img/raspberry-tea.jpg', time: '6 min', serves: 1,
    focuses: ['hormone'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Dried raspberry leaf', qty: 5, unit: 'g' },
      { name: 'Water', qty: 300, unit: 'ml' },
      { name: 'Honey (optional)', qty: 10, unit: 'ml' },
    ],
    nutrition: { calories: 30, protein: 0, carbs: 8.2, fat: 0 },
    steps: [
      'Pour freshly boiled water over the raspberry leaf in a teapot or mug.',
      'Steep covered for 5 minutes, covering keeps the delicate aroma in.',
      'Strain and sweeten lightly with honey if you like.',
    ],
  },
  {
    id: 16, slug: 'golden-milk', title: 'Golden Milk with Turmeric and Ginger for Cramps',
    excerpt: 'A cozy, spiced warm milk we make on the couch.',
    img: 'assets/img/golden-milk.jpg', time: '8 min', serves: 2,
    focuses: ['hormone', 'anti-inflammatory'], tags: ['drink', 'vegetarian', 'low-carb'],
    ingredients: [
      { name: 'Milk of choice', qty: 400, unit: 'ml' },
      { name: 'Ground turmeric', qty: 5, unit: 'g' },
      { name: 'Fresh ginger (grated)', qty: 10, unit: 'g' },
      { name: 'Cinnamon', qty: 2, unit: 'g' },
      { name: 'Black pepper', qty: 1, unit: 'g' },
      { name: 'Honey', qty: 15, unit: 'ml' },
    ],
    nutrition: { calories: 138, protein: 7.2, carbs: 19.9, fat: 4.2 },
    steps: [
      'Warm the milk gently in a small pan with the turmeric, ginger, cinnamon and pepper.',
      'Whisk and simmer for 5 minutes, never let it boil over.',
      'Strain into mugs, stir in the honey and drink warm.',
    ],
  },
  {
    id: 17, slug: 'hot-cacao', title: 'Magnesium-Rich Hot Cacao for Period Week',
    excerpt: 'Real cacao, not hot chocolate mix.',
    img: 'assets/img/hot-cacao.jpg', time: '5 min', serves: 1,
    focuses: ['hormone'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Raw cacao powder', qty: 15, unit: 'g' },
      { name: 'Plant-based milk', qty: 250, unit: 'ml' },
      { name: 'Maple syrup', qty: 15, unit: 'ml' },
      { name: 'Vanilla extract', qty: 2, unit: 'ml' },
      { name: 'Sea salt', qty: 1, unit: 'g' },
    ],
    nutrition: { calories: 179, protein: 5.5, carbs: 34, fat: 5.9 },
    steps: [
      'Whisk the cacao with a splash of the milk into a smooth paste; no lumps.',
      'Add the rest of the milk, the maple syrup, vanilla and a pinch of salt.',
      'Heat gently until steaming, whisking once more, and pour into your favorite mug.',
    ],
  },
  {
    id: 18, slug: 'beet-orange-juice', title: 'Iron-Boosting Beet and Orange Juice',
    excerpt: 'A vivid, slightly earthy juice that feels restorative.',
    img: 'assets/img/beet-juice.jpg', time: '7 min', serves: 2,
    focuses: ['hormone'], tags: ['drink', 'vegan', 'low-carb'],
    ingredients: [
      { name: 'Cooked beetroot', qty: 200, unit: 'g' },
      { name: 'Oranges (peeled)', qty: 300, unit: 'g' },
      { name: 'Fresh ginger', qty: 10, unit: 'g' },
      { name: 'Cold water', qty: 100, unit: 'ml' },
    ],
    nutrition: { calories: 119, protein: 3.1, carbs: 28.9, fat: 0.4 },
    steps: [
      'Chop the beetroot and oranges roughly and add them to the blender with the ginger and water.',
      'Blend on high for a full minute until as smooth as possible.',
      'Strain through a fine sieve if you prefer it silky, or drink it thick for the extra fiber.',
    ],
  },
  {
    id: 19, slug: 'chickpea-power-bowl', title: 'High-Protein Chickpea Power Bowl',
    excerpt: 'Roasted chickpeas and a proper tahini drizzle.',
    img: 'assets/img/chickpea-bowl.jpg', time: '25 min', serves: 2,
    focuses: ['protein'], tags: ['lunch', 'vegan', 'high-protein', 'high-fiber'],
    ingredients: [
      { name: 'Chickpeas (cooked)', qty: 250, unit: 'g' },
      { name: 'Olive oil', qty: 30, unit: 'ml' },
      { name: 'Cumin', qty: 5, unit: 'g' },
      { name: 'Smoked paprika', qty: 2, unit: 'g' },
      { name: 'Tahini', qty: 45, unit: 'ml' },
      { name: 'Lemon juice', qty: 15, unit: 'ml' },
      { name: 'Cooked quinoa', qty: 160, unit: 'g' },
      { name: 'Cucumber, diced', qty: 75, unit: 'g' },
      { name: 'Cherry tomatoes, halved', qty: 75, unit: 'g' },
      { name: 'Salt', qty: 2, unit: 'g' },
    ],
    nutrition: { calories: 594, protein: 19.7, carbs: 60.2, fat: 32.7 },
    steps: [
      'Preheat the oven to 200°C. Toss chickpeas with olive oil, cumin, smoked paprika and a pinch of salt, then roast for 20 minutes until crisp.',
      'Whisk tahini with lemon juice and a splash of water until smooth and pourable; add water a little at a time.',
      'Divide the cooked quinoa between bowls, then top with roasted chickpeas, cucumber and cherry tomatoes.',
      'Drizzle generously with the tahini sauce and serve right away.',
    ],
  },
  {
    id: 20, slug: 'protein-pancakes', title: 'Greek Yogurt Protein Pancakes',
    excerpt: 'Fluffy pancakes with Greek yogurt folded into the batter.',
    img: 'assets/img/protein-pancakes.jpg', time: '15 min', serves: 2,
    focuses: ['protein'], tags: ['breakfast', 'vegetarian', 'high-protein'],
    ingredients: [
      { name: 'Greek yogurt', qty: 250, unit: 'g' },
      { name: 'Eggs', qty: 110, unit: 'g' },
      { name: 'Oat flour', qty: 100, unit: 'g' },
      { name: 'Baking powder', qty: 5, unit: 'g' },
      { name: 'Maple syrup', qty: 20, unit: 'ml' },
      { name: 'Mixed berries (topping)', qty: 100, unit: 'g' },
    ],
    nutrition: { calories: 454, protein: 26.3, carbs: 51.5, fat: 16.4 },
    steps: [
      'Whisk the yogurt and eggs until smooth, then fold in the oat flour and baking powder.',
      'Rest the batter for 5 minutes; this is what makes them fluffy.',
      'Cook ladles of batter in a buttered pan over medium heat, 2–3 minutes per side.',
      'Stack high, and top with berries and maple syrup.',
    ],
  },
  {
    id: 21, slug: 'lentil-quinoa-salad', title: 'Lentil and Quinoa Fiber Salad',
    excerpt: 'A hearty, make-ahead salad of two favorite staples.',
    img: 'assets/img/lentil-salad.jpg', time: '30 min', serves: 3,
    focuses: ['protein'], tags: ['lunch', 'vegan', 'high-fiber', 'high-protein'],
    ingredients: [
      { name: 'Cooked green lentils', qty: 250, unit: 'g' },
      { name: 'Cooked quinoa', qty: 200, unit: 'g' },
      { name: 'Cherry tomatoes', qty: 150, unit: 'g' },
      { name: 'Cucumber', qty: 100, unit: 'g' },
      { name: 'Fresh parsley', qty: 20, unit: 'g' },
      { name: 'Olive oil', qty: 30, unit: 'ml' },
      { name: 'Lemon juice', qty: 25, unit: 'ml' },
    ],
    nutrition: { calories: 283, protein: 11.4, carbs: 34.8, fat: 11.8 },
    steps: [
      'Let the lentils and quinoa cool to room temperature so the herbs stay fresh.',
      'Whisk the olive oil and lemon juice with a good pinch of salt into a dressing.',
      'Toss everything together with the tomatoes, cucumber and parsley.',
      'Taste, adjust the salt and lemon, and serve; it keeps well for two days.',
    ],
  },
  {
    id: 22, slug: 'chia-pudding', title: 'Chia Pudding with High-Fiber Berries',
    excerpt: "A five-minute, make-ahead pudding that doesn't taste like fiber.",
    img: 'assets/img/chia-pudding.jpg', time: '5 min', serves: 2,
    focuses: ['protein'], tags: ['breakfast', 'vegan', 'high-fiber'],
    ingredients: [
      { name: 'Chia seeds', qty: 50, unit: 'g' },
      { name: 'Plant-based milk', qty: 300, unit: 'ml' },
      { name: 'Maple syrup', qty: 20, unit: 'ml' },
      { name: 'Vanilla extract', qty: 3, unit: 'ml' },
      { name: 'Mixed berries', qty: 150, unit: 'g' },
    ],
    nutrition: { calories: 249, protein: 6.3, carbs: 35.4, fat: 10.2 },
    steps: [
      'Whisk the chia seeds, milk, maple syrup and vanilla together in a bowl or two jars.',
      'Rest for 10 minutes, whisk again to break up clumps, then refrigerate for at least 2 hours.',
      'Serve topped with the berries, straight from the fridge.',
    ],
  },
];

/* Weekmenu op de homepage, verwijst naar recepten hierboven */
const WEEK_MENU = [
  { day: 'Mon', recipeId: 5 },
  { day: 'Tue', recipeId: 6 },
  { day: 'Wed', recipeId: 19 },
  { day: 'Thu', recipeId: 16 },
  { day: 'Fri', recipeId: 12 },
  { day: 'Sat', recipeId: 20 },
  { day: 'Sun', recipeId: 14 },
];

/* Recepten per cyclusfase (cycle tracker) */
const PHASE_RECIPE_IDS = {
  menstrual: [16, 18, 17],
  follicular: [4, 7, 21],
  ovulation: [14, 19, 20],
  luteal: [15, 12, 22],
};

const FOCUS_LABELS = {
  gut: 'GUT HEALTH',
  hormone: 'HORMONE BALANCE',
  protein: 'HIGH PROTEIN',
  'anti-inflammatory': 'ANTI-INFLAMMATORY',
};

/* Journal- en educatie-artikelen */
const ARTICLES = [
  {
    slug: 'gut-microbiome', title: 'What Is the Gut Microbiome, and Why Does It Matter?',
    category: 'gut', readTime: '5 min read',
    excerpt: 'A plain-language intro to the trillions of bacteria living in your gut.',
    intro: 'Your gut is home to trillions of bacteria, yeasts and other microbes, together called the gut microbiome. That sounds abstract, but you notice it every day: in your digestion, your energy, even how often you catch a cold.',
    sections: [
      { h: 'What it actually is', p: ['Think of the microbiome as a small ecosystem in your large intestine. Different species of bacteria each have their own job: some break down fiber your body can\'t digest on its own, others produce vitamins or short-chain fatty acids that feed the lining of your gut.'] },
      { h: 'Why variety matters', p: ['Research consistently links a more diverse microbiome with better overall health. The simplest way to feed that diversity isn\'t a supplement, it\'s eating a wide variety of plant foods. Different bacteria eat different fibers, so thirty different plants a week beats thirty portions of the same one.'] },
      { h: 'What we do with this', p: ['We build recipes around fermented foods (kimchi, kefir, yogurt, sauerkraut) and plenty of fiber. Not because they\'re magic, but because they\'re the most practical, everyday way to give your gut something to work with.'] },
    ],
  },
  {
    slug: 'gut-brain-connection', title: 'Gut Health and Mood: The Gut-Brain Connection',
    category: 'gut', readTime: '4 min read',
    excerpt: 'How your digestive system and your mood are more linked than most people realize.',
    intro: 'Ever felt "butterflies" in your stomach when nervous? That\'s the gut-brain connection at work. Your gut and brain are in constant two-way conversation, mostly through the vagus nerve and chemical messengers.',
    sections: [
      { h: 'A two-way street', p: ['Stress can slow or speed up digestion, most people have experienced both. But the traffic runs the other way too: a large share of the body\'s serotonin is produced in the gut, and gut bacteria influence how that system behaves.'] },
      { h: 'What this means in practice', p: ['This doesn\'t mean food fixes your mood, and we won\'t pretend it does. It means that eating regularly, eating enough fiber, and not living on caffeine alone are small, concrete things that support both your gut and a steadier day.'] },
      { h: 'The honest caveat', p: ['The science here is young and evolving quickly. We share what we notice in our own routines and point to what research suggests, not medical advice, just informed curiosity.'] },
    ],
  },
  {
    slug: 'gut-myths', title: 'Common Myths About Gut Health',
    category: 'gut', readTime: '4 min read',
    excerpt: 'A few claims we hear often that are more marketing than fact.',
    intro: 'Gut health is having a moment, which means the claims around it range from sensible to wildly overblown. Here are three we hear all the time.',
    sections: [
      { h: '"You need a detox"', p: ['Your liver and kidneys detox you around the clock. No juice cleanse accelerates that. If you want to support your body after a heavy week, the boring answer works best: water, fiber, sleep.'] },
      { h: '"Everyone should cut gluten"', p: ['Unless you have celiac disease or a diagnosed sensitivity, there\'s little evidence that avoiding gluten improves gut health, and whole-grain gluten sources are actually great fiber.'] },
      { h: '"Probiotic pills beat food"', p: ['Most probiotic supplements contain a handful of strains in fixed amounts. Fermented foods deliver variety plus the fiber those bacteria eat. Supplements have their place, but food first is a good default.'] },
    ],
  },
  {
    slug: 'bloating-guide', title: "Bloating: What's Normal and What's Worth Checking",
    category: 'gut', readTime: '5 min read',
    excerpt: 'How to tell everyday bloating from something worth flagging.',
    intro: 'Almost everyone gets bloated sometimes. A belly that expands a bit through the day is usually just food, gas and physics, not a problem to solve.',
    sections: [
      { h: 'Usually normal', p: ['Bloating after a big meal, after beans or cruciferous vegetables, around your period, or when you eat quickly; these are common and harmless. Digestion literally takes up space, and hormones influence water retention across your cycle.'] },
      { h: 'Simple things that help', p: ['Eating slower, smaller portions of known trigger foods, a short walk after dinner, and peppermint or ginger tea. Boring, but genuinely effective for everyday bloating.'] },
      { h: 'Worth checking', p: ['Bloating that\'s severe, persistent for weeks, or comes with pain, unexplained weight loss or changes in bowel habits deserves a doctor\'s visit, not a diet change you found online. We write recipes, not diagnoses.'] },
    ],
  },
  {
    slug: 'fermented-foods-101', title: 'Fermented Foods 101: What They Do for Your Gut',
    category: 'gut', readTime: '4 min read',
    excerpt: "A beginner's guide to fermented foods and why we cook with them often.",
    intro: 'Kimchi, kefir, yogurt, sauerkraut, miso: fermented foods show up in our recipes constantly. Here\'s what fermentation actually does, and how to start if you\'re new to it.',
    sections: [
      { h: 'What fermentation does', p: ['Microbes pre-digest parts of the food, creating new flavors and, in many cases, live cultures that can add to the diversity of your gut. Fermentation also made food last longer for most of human history; the health angle is newer than the habit.'] },
      { h: 'Read the label', p: ['Not everything pickled is fermented. Look for "live cultures" or "unpasteurized" on yogurt, kefir and kraut. Shelf-stable jars in vinegar are tasty, but the live bacteria didn\'t survive the trip.'] },
      { h: 'Start small', p: ['A spoonful of sauerkraut on toast, kefir in a smoothie, a scoop of kimchi next to rice. You don\'t need much daily, consistency beats quantity.'] },
    ],
  },
  {
    slug: 'why-fiber-matters', title: 'Why Fiber Matters More Than You Think',
    category: 'gut', readTime: '4 min read',
    excerpt: "One of the most consistently useful things we eat.",
    intro: 'Fiber doesn\'t get much hype; no one sells it in a shiny bottle. Yet it\'s one of the most consistently supported parts of a healthy diet, and most of us eat about half of what we need.',
    sections: [
      { h: 'What it does', p: ['Fiber keeps digestion moving, feeds your gut bacteria, slows how fast sugar hits your bloodstream and keeps you full longer. It\'s the quiet infrastructure of a meal.'] },
      { h: 'How much, roughly', p: ['Guidelines land around 25–38 grams a day for adults. Most people hover near 15. Closing that gap isn\'t about supplements, it\'s beans, lentils, oats, whole grains, fruit and vegetables showing up more often.'] },
      { h: 'Go gradual', p: ['If your current intake is low, increase slowly over a few weeks and drink enough water. Your gut bacteria need time to adjust to the extra work.'] },
    ],
  },
  {
    slug: 'hormone-balance-explained', title: 'What Is Hormone Balance, Actually?',
    category: 'hormone', readTime: '4 min read',
    excerpt: 'Cutting through the buzzword to what it actually refers to.',
    intro: '"Hormone balance" is everywhere online, usually attached to something for sale. Here\'s what the term actually points to, minus the marketing.',
    sections: [
      { h: 'What people usually mean', p: ['Hormones are chemical messengers that regulate energy, appetite, sleep, mood, your cycle and much more. They\'re never perfectly "balanced"; they fluctuate by design, across the day and across your cycle. When people say balance, they usually mean: feeling steady instead of swung around.'] },
      { h: 'What genuinely influences them', p: ['Sleep, regular meals, enough total energy, protein, movement and stress management. Not glamorous, but these are the levers with real evidence behind them, far ahead of any powder or tea.'] },
      { h: 'Our approach', p: ['We don\'t promise food will "fix" your hormones. We make food that supports the basics well, and we\'re honest about the difference.'] },
    ],
  },
  {
    slug: 'cycle-and-hormones', title: 'Your Menstrual Cycle and Hormones, Simply Explained',
    category: 'hormone', readTime: '6 min read',
    excerpt: "A plain-language walkthrough of what's happening hormonally across a cycle.",
    intro: 'The average cycle is about 28 days, but anywhere from 21 to 35 is normal. Here\'s the simple version of what your hormones are doing along the way.',
    sections: [
      { h: 'Menstrual (day 1–5ish)', p: ['Your period: estrogen and progesterone are at their lowest. Energy often dips. Warm, iron-rich, comforting food tends to feel right here.'] },
      { h: 'Follicular (day 6–13)', p: ['Estrogen rises steadily as your body prepares an egg. Many people feel energy, focus and appetite for lighter, fresher meals climb with it.'] },
      { h: 'Ovulation (around day 14)', p: ['A short LH surge triggers ovulation. Energy often peaks, a good moment for protein-forward meals and bigger days.'] },
      { h: 'Luteal (day 15–28)', p: ['Progesterone rises, then falls if no pregnancy begins. Cravings, bloating and mood shifts often show up late in this phase. Steady blood sugar, fiber plus protein, helps many people here.'] },
    ],
  },
  {
    slug: 'estrogen-progesterone', title: 'Estrogen and Progesterone: What They Do',
    category: 'hormone', readTime: '4 min read',
    excerpt: 'Two hormones you hear about constantly, explained plainly.',
    intro: 'Estrogen and progesterone get mentioned everywhere in cycle content. A quick, plain intro to what each one actually does.',
    sections: [
      { h: 'Estrogen', p: ['Rises in the first half of your cycle. It builds the uterine lining, but also affects energy, mood, skin and even how your body uses carbohydrates. Many people feel their best when estrogen is climbing.'] },
      { h: 'Progesterone', p: ['Takes over after ovulation. It has a calming, slightly sedating effect, and it raises your body temperature a little. Its rise and fall in the luteal phase is behind many classic PMS experiences.'] },
      { h: 'The point', p: ['Neither is "good" or "bad"; the rhythm between them is the design. Understanding which half of the cycle you\'re in explains a lot about why the same week can feel so different.'] },
    ],
  },
  {
    slug: 'hormones-out-of-sync', title: 'Signs Your Hormones Might Be Out of Sync',
    category: 'hormone', readTime: '4 min read',
    excerpt: 'Common signals people describe when something feels off.',
    intro: 'Bodies whisper before they shout. These are signals people commonly describe when their cycle or energy feels off, with an important caveat at the end.',
    sections: [
      { h: 'Commonly reported signals', p: ['Cycles that suddenly change length, much heavier or more painful periods than usual, persistent fatigue that sleep doesn\'t fix, new skin changes, or PMS that disrupts your week rather than just annoying you.'] },
      { h: 'Track before you worry', p: ['One weird month is usually just one weird month. Patterns over three or more cycles are what matter, which is exactly why tracking is useful. It turns a vague feeling into something you can actually look at.'] },
      { h: 'The honest caveat', p: ['These signals overlap with many conditions and with normal life. If something persists, bring your tracked notes to a doctor, that conversation goes much better with data.'] },
    ],
  },
  {
    slug: 'understanding-your-period', title: 'Understanding Your Period: A No-Nonsense Guide',
    category: 'hormone', readTime: '5 min read',
    excerpt: 'The basics, explained clearly, without the euphemisms.',
    intro: 'A period is your body shedding the uterine lining it built but didn\'t need. Simple as that, and yet many of us never got a clear explanation of the practical basics.',
    sections: [
      { h: 'What\'s typical', p: ['Bleeding for 3–7 days, every 21–35 days, losing a few tablespoons of blood total (it looks like more). Some cramping on day one or two is common; being unable to function is common too, but not something you have to just accept.'] },
      { h: 'What helps most people', p: ['Heat on the lower belly, gentle movement, enough iron-rich food (especially if you bleed heavily), magnesium-rich foods, and honest rest when you need it.'] },
      { h: 'When to get help', p: ['Pain that stops your life, bleeding through protection hourly, or cycles far outside the typical range: all worth a doctor\'s visit. Severe symptoms are common, but they\'re not a tax you owe.'] },
    ],
  },
  {
    slug: 'hormone-friendly-plate', title: 'Building a Hormone-Friendly Plate',
    category: 'hormone', readTime: '4 min read',
    excerpt: 'A simple framework for meals that support steady hormones.',
    intro: 'No forbidden foods, no superfood shopping list, just a way to build a meal that keeps your energy steady, which is what most "hormone-friendly eating" advice boils down to.',
    sections: [
      { h: 'The framework', p: ['Every plate: a palm-or-two of protein, a fist of fiber-rich carbs, plenty of vegetables or fruit, and some fat. That combination slows digestion, steadies blood sugar, and keeps you full, the unglamorous foundation under every hormone trend.'] },
      { h: 'Adjust to your phase', p: ['Luteal week with cravings? Lean on the fiber and protein. Period week? Warm, iron-rich meals. Follicular energy? That\'s your window for the big salads and experiments. Our cycle tracker suggests recipes per phase for exactly this.'] },
      { h: 'What matters most', p: ['Eating enough, regularly. Chronic under-eating stresses the body more than any single food choice. The best hormone-friendly plate is the one you actually eat.'] },
    ],
  },
  {
    slug: 'protein-how-much', title: 'How Much Protein Do You Actually Need?',
    category: 'protein', readTime: '5 min read',
    excerpt: 'Cutting through conflicting advice with a genuinely simple starting point.',
    intro: 'Protein advice ranges from "you eat too much" to "everyone needs 200 grams." Here\'s a simple, defensible starting point.',
    sections: [
      { h: 'The baseline', p: ['Official minimums sit around 0.8 g per kg of body weight, enough to avoid deficiency, not necessarily to thrive. For active people, research commonly lands around 1.2–1.6 g per kg. For a 65 kg person, that\'s roughly 80–105 g a day.'] },
      { h: 'Spread it out', p: ['Your body uses protein better in portions across the day than in one giant dinner. Aim for a real protein source at each meal, 20–40 g each, and you\'re most of the way there without tracking anything.'] },
      { h: 'Why we care', p: ['Protein protects muscle, and muscle protects you: strength, metabolism, staying full. Especially when losing weight, keeping protein up is what makes the difference between losing fat and losing yourself.'] },
    ],
  },
  {
    slug: 'fiber-water-movement', title: 'Fiber, Water and Movement: The Basics',
    category: 'protein', readTime: '3 min read',
    excerpt: 'Three unglamorous habits we keep coming back to.',
    intro: 'Before any protocol, powder or plan, three basics decide how you feel day to day: fiber, water and movement. They\'re boring. They also work.',
    sections: [
      { h: 'Fiber', p: ['Feeds your gut, steadies your energy, keeps you full. Vegetables, fruit, legumes, oats, whole grains: variety counts more than any single source.'] },
      { h: 'Water', p: ['Mild dehydration feels like fatigue and hunger. A glass with every meal and one between meals covers most people. Thirst is a lagging indicator, don\'t wait for it.'] },
      { h: 'Movement', p: ['Not punishment workouts, daily walking, some strength, anything you\'ll still do next month. A 15-minute walk after dinner does more for digestion than most supplements.'] },
    ],
  },
  {
    slug: 'feeling-good-meaning', title: 'What Does "Feeling Good" Actually Mean?',
    category: 'lifestyle', readTime: '4 min read',
    excerpt: 'A jargon-free look at what it actually involves, day to day.',
    intro: '"Feeling good" is our whole reason for existing as a site, so it\'s worth saying what we mean by it. Spoiler: it\'s not a number on a scale.',
    sections: [
      { h: 'Energy you can rely on', p: ['Waking up with enough in the tank, no 3 p.m. cliff, no needing a nap after lunch. Steady energy is usually the first thing people notice when the basics fall into place.'] },
      { h: 'A body that feels like yours', p: ['Digestion that doesn\'t complain, a cycle that doesn\'t ambush you, strength for the things your day actually asks. Feeling good is mostly the absence of friction.'] },
      { h: 'Room for fun', p: ['If a way of eating doesn\'t leave room for birthdays, dinners out and lazy Sundays, it won\'t last, and it shouldn\'t. Feeling good includes your life, not just your labs.'] },
    ],
  },
  {
    slug: 'five-body-signals', title: '5 Signs Your Body Is Asking for Attention',
    category: 'lifestyle', readTime: '4 min read',
    excerpt: 'Small, easy-to-miss signals worth slowing down for.',
    intro: 'Bodies rarely go from fine to not-fine overnight. These five small signals are easy to dismiss, and worth noticing early.',
    sections: [
      { h: '1. Afternoon crashes', p: ['Needing sugar or caffeine to survive 3 p.m. usually points at breakfast and lunch: not enough protein, not enough food, or not enough sleep.'] },
      { h: '2. Constant bloating', p: ['Occasional is normal; daily is a pattern. Eating speed, portion size and stress are the first suspects.'] },
      { h: '3. Broken sleep', p: ['Waking at 3 a.m. often tracks with late meals, alcohol, stress or too little total food. Sleep is where recovery happens, guard it.'] },
      { h: '4. Cravings that feel loud', p: ['Intense cravings are usually undereating in disguise. Regular, sufficient meals quiet them down better than willpower does.'] },
      { h: '5. A cycle that shifts', p: ['Your period is a monthly report card. Changes worth noting: much shorter, much longer, much heavier, or suddenly absent. Track it, and you\'ll know your normal.'] },
    ],
  },
  {
    slug: 'sleep-and-digestion', title: 'Sleep and Digestion: How Are They Connected?',
    category: 'lifestyle', readTime: '4 min read',
    excerpt: "Why a bad night's sleep often shows up as a rough stomach.",
    intro: 'A rough night and a rough stomach often arrive together. That\'s not a coincidence, sleep and digestion influence each other in both directions.',
    sections: [
      { h: 'Sleep affects digestion', p: ['Short sleep changes hunger hormones (more ghrelin, less leptin), slows gut motility and makes you reach for quick energy. One bad night is fine; a pattern of them shows up in your gut.'] },
      { h: 'Digestion affects sleep', p: ['Heavy late meals, alcohol and reflux all fragment sleep. Your gut follows a circadian rhythm too; it expects work by day and rest by night.'] },
      { h: 'The practical fix', p: ['Finish dinner 2–3 hours before bed, keep late-night snacks light, and protect a regular bedtime. Small, boring, effective.'] },
    ],
  },
  {
    slug: 'stress-and-hormones', title: 'How Stress Affects Your Hormones',
    category: 'lifestyle', readTime: '4 min read',
    excerpt: 'The stress-hormone connection, without the fear-mongering.',
    intro: 'Stress is not the villain of every story, short bursts are normal and useful. Chronic stress, though, genuinely does push your hormones around.',
    sections: [
      { h: 'The mechanism, briefly', p: ['Ongoing stress keeps cortisol elevated. Your body prioritizes survival over reproduction and digestion, which is why chronic stress can show up as cycle changes, digestive trouble and stubborn fatigue.'] },
      { h: 'What actually helps', p: ['Not eliminating stress (impossible), but giving your body recovery signals: real meals, enough sleep, walking, breathing slowly, saying no occasionally. Recovery, not avoidance, is the skill.'] },
      { h: 'Where food fits', p: ['Under-eating is itself a stressor. One of the kindest things you can do for your cortisol levels is eat enough, regularly. That\'s a big part of why we cook the way we do.'] },
    ],
  },
  {
    slug: 'pms-vs-pmdd', title: "PMS vs. PMDD: What's the Difference?",
    category: 'lifestyle', readTime: '4 min read',
    excerpt: 'Two terms used almost interchangeably, and why that matters.',
    intro: 'Most people who menstruate know PMS. Far fewer have heard of PMDD, and the difference between them matters, especially for the people in the second group.',
    sections: [
      { h: 'PMS', p: ['Premenstrual syndrome: the familiar week of bloating, tender breasts, moodiness and cravings before your period. Uncomfortable, sometimes very, but you can still run your life.'] },
      { h: 'PMDD', p: ['Premenstrual dysphoric disorder: the same timing, but with severe mood symptoms (depression, anxiety, rage, hopelessness) that genuinely disrupt work, relationships and daily functioning. It affects roughly 1 in 20 people who menstruate.'] },
      { h: 'Why the distinction matters', p: ['PMDD is a recognized medical condition with real treatments. If your pre-period week regularly wrecks you emotionally, that\'s not "just PMS" to push through, tracking your cycle and bringing it to a doctor can genuinely change things.'] },
    ],
  },
];

/* Batch: gut-recepten 23–35 */
RECIPES.push(...[{"id": 23, "slug": "miso-soup", "title": "Miso Soup with Tofu and Wakame", "excerpt": "The five-minute soup we make on repeat.", "img": "assets/img/miso-soup.jpg", "time": "8 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegan"], "ingredients": [{"name": "Water", "qty": 500, "unit": "ml"}, {"name": "Miso paste", "qty": 30, "unit": "g"}, {"name": "Silken tofu, cubed", "qty": 150, "unit": "g"}, {"name": "Dried wakame", "qty": 5, "unit": "g"}, {"name": "Spring onions, sliced", "qty": 20, "unit": "g"}], "nutrition": {"calories": 81, "protein": 6.5, "carbs": 6.6, "fat": 3.2}, "steps": ["Soak the wakame in cold water for 5 minutes until softened, then drain.", "Warm the water until steaming but not boiling, boiling kills the delicate miso flavor.", "Whisk the miso paste into the water with a little of it first, then add the tofu and wakame.", "Warm through for 2 minutes and serve with the spring onions scattered over."]}, {"id": 24, "slug": "kefir-overnight-oats", "title": "Kefir Overnight Oats with Apple and Cinnamon", "excerpt": "A tangy twist on classic overnight oats.", "img": "assets/img/kefir-overnight-oats.jpg", "time": "10 min", "serves": 2, "focuses": ["gut"], "tags": ["breakfast", "vegetarian", "high-fiber"], "ingredients": [{"name": "Rolled oats", "qty": 100, "unit": "g"}, {"name": "Kefir", "qty": 300, "unit": "ml"}, {"name": "Apple, grated", "qty": 150, "unit": "g"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}, {"name": "Honey", "qty": 15, "unit": "ml"}, {"name": "Chopped walnuts", "qty": 30, "unit": "g"}], "nutrition": {"calories": 419, "protein": 16.2, "carbs": 59.1, "fat": 15}, "steps": ["Stir the oats, kefir, cinnamon and honey together in two jars.", "Fold in the grated apple, cover and refrigerate overnight.", "Top with the walnuts and an extra sprinkle of cinnamon in the morning."]}, {"id": 25, "slug": "sauerkraut-bean-salad", "title": "Sauerkraut and White Bean Salad", "excerpt": "A pantry salad that somehow tastes like effort.", "img": "assets/img/sauerkraut-bean-salad.jpg", "time": "10 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegan", "high-fiber"], "ingredients": [{"name": "White beans (cooked)", "qty": 240, "unit": "g"}, {"name": "Sauerkraut, drained", "qty": 120, "unit": "g"}, {"name": "Red onion, finely sliced", "qty": 50, "unit": "g"}, {"name": "Fresh parsley", "qty": 15, "unit": "g"}, {"name": "Olive oil", "qty": 25, "unit": "ml"}, {"name": "Apple cider vinegar", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 295, "protein": 11.5, "carbs": 32.8, "fat": 13.3}, "steps": ["Rinse the beans and let them drain well, dry beans carry the dressing better.", "Whisk the olive oil and vinegar with a pinch of salt and pepper.", "Toss the beans, sauerkraut, onion and parsley with the dressing and rest for 10 minutes before serving."]}, {"id": 26, "slug": "kimchi-pancakes", "title": "Crispy Kimchi Pancakes", "excerpt": "Golden, crispy-edged pancakes from one bowl.", "img": "assets/img/kimchi-pancakes.jpg", "time": "20 min", "serves": 2, "focuses": ["gut"], "tags": ["dinner", "vegetarian"], "ingredients": [{"name": "Kimchi, chopped", "qty": 200, "unit": "g"}, {"name": "Kimchi juice", "qty": 60, "unit": "ml"}, {"name": "All-purpose flour", "qty": 120, "unit": "g"}, {"name": "Water", "qty": 100, "unit": "ml"}, {"name": "Spring onions", "qty": 40, "unit": "g"}, {"name": "Vegetable oil", "qty": 30, "unit": "ml"}, {"name": "Soy sauce (dip)", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 384, "protein": 8.4, "carbs": 51.1, "fat": 16.3}, "steps": ["Mix the flour, water and kimchi juice into a thin batter, then fold in the kimchi and spring onions.", "Heat the oil in a large pan over medium-high heat and ladle in the batter, spreading it thin.", "Cook 3–4 minutes per side until deeply golden and crispy at the edges.", "Slice into wedges and serve with soy sauce for dipping."]}, {"id": 27, "slug": "tempeh-stir-fry", "title": "Ginger Tempeh Stir-Fry", "excerpt": "Fermented protein, crisp vegetables, one pan.", "img": "assets/img/tempeh-stir-fry.jpg", "time": "20 min", "serves": 2, "focuses": ["gut"], "tags": ["dinner", "vegan", "high-protein"], "ingredients": [{"name": "Tempeh, sliced", "qty": 250, "unit": "g"}, {"name": "Broccoli florets", "qty": 200, "unit": "g"}, {"name": "Bell pepper, sliced", "qty": 150, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 15, "unit": "g"}, {"name": "Garlic, minced", "qty": 10, "unit": "g"}, {"name": "Soy sauce", "qty": 30, "unit": "ml"}, {"name": "Sesame oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 385, "protein": 30.2, "carbs": 25.2, "fat": 22.1}, "steps": ["Steam or pan-fry the tempeh slices for 3 minutes per side until golden, then set aside.", "Stir-fry the broccoli and pepper in the sesame oil over high heat for 4 minutes.", "Add the ginger, garlic and soy sauce, return the tempeh and toss for 2 more minutes.", "Serve over rice or noodles, straight from the pan."]}, {"id": 28, "slug": "miso-aubergine", "title": "Miso-Glazed Aubergine", "excerpt": "Caramelized, savory-sweet aubergine halves.", "img": "assets/img/miso-aubergine.jpg", "time": "30 min", "serves": 2, "focuses": ["gut"], "tags": ["dinner", "vegan"], "ingredients": [{"name": "Aubergines, halved", "qty": 600, "unit": "g"}, {"name": "Miso paste", "qty": 40, "unit": "g"}, {"name": "Mirin", "qty": 30, "unit": "ml"}, {"name": "Sesame oil", "qty": 15, "unit": "ml"}, {"name": "Sesame seeds", "qty": 10, "unit": "g"}, {"name": "Spring onions", "qty": 20, "unit": "g"}], "nutrition": {"calories": 248, "protein": 6.4, "carbs": 31.9, "fat": 11.8}, "steps": ["Score the aubergine flesh in a diamond pattern, brush with sesame oil and roast at 200°C for 20 minutes.", "Whisk the miso and mirin into a glaze and spread it thickly over the aubergines.", "Grill for 5–8 minutes until bubbling and caramelized at the edges.", "Finish with sesame seeds and spring onions."]}, {"id": 29, "slug": "raita-bowl", "title": "Cucumber Raita Yogurt Bowl", "excerpt": "Cooling, crunchy and five minutes of work.", "img": "assets/img/raita-bowl.jpg", "time": "5 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegetarian", "low-carb"], "ingredients": [{"name": "Greek yogurt", "qty": 300, "unit": "g"}, {"name": "Cucumber, grated", "qty": 150, "unit": "g"}, {"name": "Garlic, grated", "qty": 5, "unit": "g"}, {"name": "Fresh mint, chopped", "qty": 10, "unit": "g"}, {"name": "Cumin", "qty": 2, "unit": "g"}, {"name": "Lemon juice", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 131, "protein": 16, "carbs": 10.2, "fat": 3.2}, "steps": ["Squeeze the grated cucumber firmly to remove excess water.", "Stir the yogurt with the garlic, cumin, lemon and a pinch of salt.", "Fold in the cucumber and mint, rest for 5 minutes and serve with warm flatbread."]}, {"id": 30, "slug": "pickled-grain-bowl", "title": "Pickled Veggie Grain Bowl", "excerpt": "A sharp, crunchy bowl built on quick pickles.", "img": "assets/img/pickled-grain-bowl.jpg", "time": "25 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegan", "high-fiber"], "ingredients": [{"name": "Cooked brown rice", "qty": 250, "unit": "g"}, {"name": "Red cabbage, shredded", "qty": 150, "unit": "g"}, {"name": "Carrots, julienned", "qty": 100, "unit": "g"}, {"name": "Apple cider vinegar", "qty": 45, "unit": "ml"}, {"name": "Sugar", "qty": 10, "unit": "g"}, {"name": "Edamame beans", "qty": 150, "unit": "g"}, {"name": "Sesame oil", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 364, "protein": 13.2, "carbs": 58.7, "fat": 10.3}, "steps": ["Pour the vinegar and sugar over the cabbage and carrots, scrunch and leave to pickle for 15 minutes.", "Divide the rice between bowls and top with the edamame.", "Pile the quick-pickled vegetables on top and drizzle with the pickling liquid and sesame oil."]}, {"id": 31, "slug": "pumpkin-gut-soup", "title": "Gut-Healing Pumpkin Soup", "excerpt": "Silky, gently spiced and kind to your stomach.", "img": "assets/img/pumpkin-gut-soup.jpg", "time": "35 min", "serves": 4, "focuses": ["gut"], "tags": ["dinner", "vegan"], "ingredients": [{"name": "Pumpkin, cubed", "qty": 800, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 20, "unit": "g"}, {"name": "Vegetable stock", "qty": 750, "unit": "ml"}, {"name": "Coconut milk", "qty": 200, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 229, "protein": 4.2, "carbs": 22.6, "fat": 16.2}, "steps": ["Soften the onion in olive oil for 5 minutes, then add the ginger and pumpkin.", "Pour in the stock, simmer for 20 minutes until the pumpkin collapses.", "Blend until completely silky, stir in the coconut milk and season to taste."]}, {"id": 32, "slug": "kombucha-spritzer", "title": "Kombucha Berry Spritzer", "excerpt": "A fermented fizz for slow afternoons.", "img": "assets/img/kombucha-spritzer.jpg", "time": "3 min", "serves": 1, "focuses": ["gut"], "tags": ["drink", "vegan", "low-carb"], "ingredients": [{"name": "Kombucha", "qty": 250, "unit": "ml"}, {"name": "Sparkling water", "qty": 100, "unit": "ml"}, {"name": "Frozen raspberries", "qty": 40, "unit": "g"}, {"name": "Fresh mint", "qty": 5, "unit": "g"}, {"name": "Ice cubes", "qty": 100, "unit": "g"}], "nutrition": {"calories": 85, "protein": 0.6, "carbs": 20.1, "fat": 0.3}, "steps": ["Add the raspberries and ice to a tall glass.", "Pour over the kombucha and top with sparkling water.", "Slap the mint between your palms to wake it up, and drop it in."]}, {"id": 33, "slug": "apple-ginger-porridge", "title": "Apple-Ginger Compote Porridge", "excerpt": "Warming oats with a quick stewed-apple topping.", "img": "assets/img/apple-ginger-porridge.jpg", "time": "15 min", "serves": 2, "focuses": ["gut"], "tags": ["breakfast", "vegan", "high-fiber"], "ingredients": [{"name": "Rolled oats", "qty": 100, "unit": "g"}, {"name": "Plant-based milk", "qty": 350, "unit": "ml"}, {"name": "Apples, diced", "qty": 250, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 8, "unit": "g"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}, {"name": "Maple syrup", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 362, "protein": 10.8, "carbs": 70.7, "fat": 6.5}, "steps": ["Simmer the diced apples with the ginger, cinnamon and half the maple syrup for 8 minutes until saucy.", "Meanwhile, cook the oats in the milk for 5 minutes, stirring, until creamy.", "Serve the porridge topped with a generous spoon of the warm apple compote."]}, {"id": 34, "slug": "fermented-salsa", "title": "Fermented-Style Salsa Fresca", "excerpt": "All the tang of fermented salsa, none of the waiting.", "img": "assets/img/fermented-salsa.jpg", "time": "10 min", "serves": 2, "focuses": ["gut"], "tags": ["snack", "vegan", "low-carb"], "ingredients": [{"name": "Tomatoes, diced", "qty": 250, "unit": "g"}, {"name": "Red onion, finely chopped", "qty": 60, "unit": "g"}, {"name": "Lime juice", "qty": 25, "unit": "ml"}, {"name": "Apple cider vinegar", "qty": 15, "unit": "ml"}, {"name": "Fresh coriander", "qty": 10, "unit": "g"}, {"name": "Jalapeño, minced", "qty": 10, "unit": "g"}], "nutrition": {"calories": 45, "protein": 1.8, "carbs": 10.7, "fat": 0.4}, "steps": ["Combine the tomatoes, onion, jalapeño and coriander in a bowl.", "Dress with the lime juice, vinegar and a good pinch of salt.", "Rest for at least 15 minutes; the acids do the flavor work for you."]}, {"id": 35, "slug": "miso-butter-beans", "title": "Miso Butter Beans on Toast", "excerpt": "Creamy, umami beans on crunchy sourdough.", "img": "assets/img/miso-butter-beans.jpg", "time": "15 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegan", "high-protein"], "ingredients": [{"name": "Butter beans (cooked)", "qty": 400, "unit": "g"}, {"name": "Miso paste", "qty": 20, "unit": "g"}, {"name": "Butter or olive oil", "qty": 15, "unit": "g"}, {"name": "Garlic, sliced", "qty": 10, "unit": "g"}, {"name": "Sourdough bread", "qty": 160, "unit": "g"}, {"name": "Chili flakes", "qty": 2, "unit": "g"}], "nutrition": {"calories": 588, "protein": 26.6, "carbs": 91.2, "fat": 11.6}, "steps": ["Soften the garlic in the butter for a minute without coloring.", "Add the beans with a splash of water and the miso, and simmer for 5 minutes, lightly crushing some beans.", "Pile onto thick toasted sourdough and finish with chili flakes."]}]);

/* Batch: gut 36–43, hormone 44–48 */
RECIPES.push(...[{"id": 36, "slug": "carrot-ginger-soup", "title": "Carrot-Ginger Soup", "excerpt": "Bright orange comfort in a bowl.", "img": "assets/img/carrot-ginger-soup.jpg", "time": "30 min", "serves": 4, "focuses": ["gut", "anti-inflammatory"], "tags": ["dinner", "vegan"], "ingredients": [{"name": "Carrots, chopped", "qty": 700, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 25, "unit": "g"}, {"name": "Vegetable stock", "qty": 750, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}, {"name": "Orange juice", "qty": 100, "unit": "ml"}], "nutrition": {"calories": 146, "protein": 2.8, "carbs": 26.2, "fat": 4.4}, "steps": ["Soften the onion in olive oil for 5 minutes, then add the carrots and ginger.", "Add the stock and simmer for 20 minutes until the carrots are completely tender.", "Blend smooth with the orange juice and season; the orange lifts the whole soup."]}, {"id": 37, "slug": "kefir-ranch-salad", "title": "Chopped Salad with Kefir Ranch", "excerpt": "A big crunchy salad with a tangy fermented dressing.", "img": "assets/img/kefir-ranch-salad.jpg", "time": "15 min", "serves": 2, "focuses": ["gut"], "tags": ["lunch", "vegetarian"], "ingredients": [{"name": "Romaine lettuce, chopped", "qty": 200, "unit": "g"}, {"name": "Cherry tomatoes, halved", "qty": 150, "unit": "g"}, {"name": "Cucumber, diced", "qty": 150, "unit": "g"}, {"name": "Kefir", "qty": 100, "unit": "ml"}, {"name": "Mayonnaise", "qty": 30, "unit": "g"}, {"name": "Fresh dill", "qty": 10, "unit": "g"}, {"name": "Garlic powder", "qty": 2, "unit": "g"}], "nutrition": {"calories": 171, "protein": 5.3, "carbs": 12.2, "fat": 12.4}, "steps": ["Whisk the kefir, mayonnaise, dill, garlic powder and a pinch of salt into a dressing.", "Chop everything roughly the same size; that is the whole secret of a chopped salad.", "Toss with the dressing right before serving so it stays crunchy."]}, {"id": 38, "slug": "banana-kefir-pancakes", "title": "Banana-Kefir Pancakes", "excerpt": "Fluffy weekend pancakes with a fermented lift.", "img": "assets/img/banana-kefir-pancakes.jpg", "time": "20 min", "serves": 2, "focuses": ["gut"], "tags": ["breakfast", "vegetarian"], "ingredients": [{"name": "Kefir", "qty": 250, "unit": "ml"}, {"name": "Ripe banana", "qty": 150, "unit": "g"}, {"name": "Eggs", "qty": 110, "unit": "g"}, {"name": "All-purpose flour", "qty": 150, "unit": "g"}, {"name": "Baking soda", "qty": 4, "unit": "g"}, {"name": "Butter (for frying)", "qty": 20, "unit": "g"}], "nutrition": {"calories": 549, "protein": 19.8, "carbs": 81.1, "fat": 16.4}, "steps": ["Mash the banana and whisk it with the kefir and eggs.", "Fold in the flour and baking soda; the batter should be thick and lumpy, not smooth.", "Cook small ladles in butter over medium heat, 2–3 minutes per side, until golden and puffed."]}, {"id": 39, "slug": "sauerkraut-hash", "title": "Sauerkraut Potato Hash", "excerpt": "A crispy pan breakfast with a tangy edge.", "img": "assets/img/sauerkraut-hash.jpg", "time": "25 min", "serves": 2, "focuses": ["gut"], "tags": ["breakfast", "vegan"], "ingredients": [{"name": "Potatoes, diced", "qty": 500, "unit": "g"}, {"name": "Sauerkraut, drained", "qty": 150, "unit": "g"}, {"name": "Onion, chopped", "qty": 100, "unit": "g"}, {"name": "Smoked paprika", "qty": 3, "unit": "g"}, {"name": "Olive oil", "qty": 30, "unit": "ml"}, {"name": "Fresh parsley", "qty": 10, "unit": "g"}], "nutrition": {"calories": 366, "protein": 6.6, "carbs": 51.5, "fat": 15.5}, "steps": ["Fry the potatoes in olive oil over medium heat for 15 minutes, turning only occasionally for a proper crust.", "Add the onion and paprika and cook for 5 more minutes.", "Fold in the sauerkraut, warm through for 2 minutes and scatter with parsley."]}, {"id": 40, "slug": "jerusalem-artichoke-soup", "title": "Jerusalem Artichoke Soup", "excerpt": "Prebiotic fiber in its creamiest form.", "img": "assets/img/jerusalem-artichoke-soup.jpg", "time": "35 min", "serves": 4, "focuses": ["gut"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Jerusalem artichokes, chopped", "qty": 600, "unit": "g"}, {"name": "Potato, chopped", "qty": 200, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Vegetable stock", "qty": 800, "unit": "ml"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Nutmeg", "qty": 1, "unit": "g"}], "nutrition": {"calories": 218, "protein": 5, "carbs": 39.8, "fat": 5.3}, "steps": ["Soften the onion in olive oil, add the artichokes and potato and cook for 5 minutes.", "Cover with the stock and simmer for 20–25 minutes until everything is soft.", "Blend silky-smooth with a grating of nutmeg and season generously."]}, {"id": 41, "slug": "miso-noodle-soup", "title": "Miso Noodle Soup with Greens", "excerpt": "A full dinner in one bowl of broth.", "img": "assets/img/miso-noodle-soup.jpg", "time": "15 min", "serves": 2, "focuses": ["gut"], "tags": ["dinner", "vegan"], "ingredients": [{"name": "Miso paste", "qty": 40, "unit": "g"}, {"name": "Water", "qty": 700, "unit": "ml"}, {"name": "Noodles", "qty": 160, "unit": "g"}, {"name": "Pak choi, quartered", "qty": 200, "unit": "g"}, {"name": "Mushrooms, sliced", "qty": 150, "unit": "g"}, {"name": "Spring onions", "qty": 30, "unit": "g"}, {"name": "Sesame oil", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 230, "protein": 10, "carbs": 31.3, "fat": 8.3}, "steps": ["Simmer the mushrooms in the water for 5 minutes.", "Add the noodles and pak choi and cook for 3–4 minutes until just tender.", "Take off the heat, whisk in the miso and sesame oil, and serve topped with spring onions."]}, {"id": 42, "slug": "turmeric-kraut-bowl", "title": "Turmeric Sauerkraut Bowl", "excerpt": "Golden, fermented and very quick.", "img": "assets/img/turmeric-kraut-bowl.jpg", "time": "10 min", "serves": 2, "focuses": ["gut", "anti-inflammatory"], "tags": ["lunch", "vegan", "high-fiber"], "ingredients": [{"name": "Cooked quinoa", "qty": 250, "unit": "g"}, {"name": "Sauerkraut", "qty": 150, "unit": "g"}, {"name": "Avocado, sliced", "qty": 150, "unit": "g"}, {"name": "Chickpeas (cooked)", "qty": 200, "unit": "g"}, {"name": "Ground turmeric", "qty": 3, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Lemon juice", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 543, "protein": 16.9, "carbs": 64.7, "fat": 26.4}, "steps": ["Toss the chickpeas with the turmeric, half the olive oil and a pinch of salt, and warm them in a dry pan for 3 minutes.", "Whisk the rest of the oil with the lemon juice into a quick dressing.", "Build the bowls: quinoa, chickpeas, sauerkraut and avocado, with the dressing over everything."]}, {"id": 43, "slug": "green-gut-smoothie", "title": "Green Gut Smoothie", "excerpt": "Spinach, kefir and a little courage.", "img": "assets/img/green-gut-smoothie.jpg", "time": "5 min", "serves": 1, "focuses": ["gut"], "tags": ["breakfast", "vegetarian", "low-carb"], "ingredients": [{"name": "Kefir", "qty": 250, "unit": "ml"}, {"name": "Fresh spinach", "qty": 40, "unit": "g"}, {"name": "Banana", "qty": 100, "unit": "g"}, {"name": "Fresh ginger", "qty": 8, "unit": "g"}, {"name": "Ground flaxseed", "qty": 10, "unit": "g"}], "nutrition": {"calories": 261, "protein": 12.7, "carbs": 40, "fat": 7.2}, "steps": ["Add everything to the blender, spinach first so it weighs itself down.", "Blend for 45 seconds until completely smooth and bright green.", "Drink fresh; it separates if you let it sit."]}, {"id": 44, "slug": "lentil-spinach-dal", "title": "Warm Lentil and Spinach Dal", "excerpt": "Steadying, iron-rich comfort for week one.", "img": "assets/img/lentil-spinach-dal.jpg", "time": "30 min", "serves": 3, "focuses": ["hormone"], "tags": ["dinner", "vegan", "high-fiber", "high-protein"], "ingredients": [{"name": "Red lentils", "qty": 250, "unit": "g"}, {"name": "Fresh spinach", "qty": 150, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Ground cumin", "qty": 4, "unit": "g"}, {"name": "Ground turmeric", "qty": 3, "unit": "g"}, {"name": "Coconut milk", "qty": 200, "unit": "ml"}, {"name": "Vegetable stock", "qty": 500, "unit": "ml"}], "nutrition": {"calories": 304, "protein": 12.1, "carbs": 31.1, "fat": 17}, "steps": ["Soften the onion and garlic, then add the cumin and turmeric for 30 seconds.", "Add the lentils and stock and simmer for 15–18 minutes until the lentils collapse.", "Stir in the coconut milk and spinach and cook for 2 more minutes. Season well."]}, {"id": 45, "slug": "magnesium-trail-mix", "title": "Magnesium Trail Mix", "excerpt": "The jar we keep by the couch during period week.", "img": "assets/img/magnesium-trail-mix.jpg", "time": "5 min", "serves": 6, "focuses": ["hormone"], "tags": ["snack", "vegan", "low-carb"], "ingredients": [{"name": "Pumpkin seeds", "qty": 100, "unit": "g"}, {"name": "Almonds", "qty": 100, "unit": "g"}, {"name": "Dark chocolate chips (70%+)", "qty": 60, "unit": "g"}, {"name": "Dried tart cherries", "qty": 60, "unit": "g"}, {"name": "Cashews", "qty": 80, "unit": "g"}], "nutrition": {"calories": 258, "protein": 7, "carbs": 20.6, "fat": 17.4}, "steps": ["Mix everything together in a large jar.", "Portion a small handful per serving; it is easy to eat the whole jar.", "Keeps for weeks in a sealed container."]}, {"id": 46, "slug": "salmon-sweet-potato-traybake", "title": "Salmon and Sweet Potato Tray Bake", "excerpt": "Omega-3 and slow carbs on one tray.", "img": "assets/img/salmon-sweet-potato-traybake.jpg", "time": "35 min", "serves": 2, "focuses": ["hormone", "protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Salmon fillets", "qty": 300, "unit": "g"}, {"name": "Sweet potato, cubed", "qty": 400, "unit": "g"}, {"name": "Broccoli florets", "qty": 200, "unit": "g"}, {"name": "Olive oil", "qty": 25, "unit": "ml"}, {"name": "Paprika", "qty": 3, "unit": "g"}, {"name": "Lemon", "qty": 120, "unit": "g"}], "nutrition": {"calories": 650, "protein": 36.8, "carbs": 53.4, "fat": 32.9}, "steps": ["Toss the sweet potato with half the oil and the paprika and roast at 200°C for 15 minutes.", "Add the broccoli and salmon to the tray, drizzle with the rest of the oil.", "Roast for 12–14 more minutes until the salmon just flakes. Serve with lemon."]}, {"id": 47, "slug": "beef-broccoli", "title": "Iron-Boost Beef and Broccoli", "excerpt": "For the week your body asks for iron.", "img": "assets/img/beef-broccoli.jpg", "time": "20 min", "serves": 2, "focuses": ["hormone"], "tags": ["dinner", "high-protein", "low-carb"], "ingredients": [{"name": "Beef strips", "qty": 300, "unit": "g"}, {"name": "Broccoli florets", "qty": 300, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 10, "unit": "g"}, {"name": "Soy sauce", "qty": 30, "unit": "ml"}, {"name": "Sesame oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 515, "protein": 45, "carbs": 14.6, "fat": 33.8}, "steps": ["Sear the beef strips in a hot, dry pan for 2 minutes and set aside.", "Stir-fry the broccoli with a splash of water for 4 minutes until bright and just tender.", "Return the beef with the garlic, ginger, soy and sesame oil, toss for 1 minute and serve."]}, {"id": 48, "slug": "seed-crackers-avocado", "title": "Seed Crackers with Avocado", "excerpt": "Crunchy, seedy and endlessly snackable.", "img": "assets/img/seed-crackers-avocado.jpg", "time": "10 min", "serves": 2, "focuses": ["hormone"], "tags": ["snack", "vegan", "high-fiber"], "ingredients": [{"name": "Seed crackers (store-bought)", "qty": 80, "unit": "g"}, {"name": "Ripe avocado", "qty": 200, "unit": "g"}, {"name": "Lime juice", "qty": 10, "unit": "ml"}, {"name": "Pumpkin seeds", "qty": 20, "unit": "g"}, {"name": "Chili flakes", "qty": 1, "unit": "g"}], "nutrition": {"calories": 346, "protein": 7.8, "carbs": 26.5, "fat": 25.5}, "steps": ["Mash the avocado with the lime juice and a pinch of salt.", "Spread thickly over the seed crackers.", "Finish with pumpkin seeds and chili flakes for crunch and warmth."]}]);

/* Batch: hormone 49–61 */
RECIPES.push(...[{"id": 49, "slug": "chickpea-spinach-curry", "title": "Chickpea and Spinach Curry", "excerpt": "A pantry curry that steadies everything.", "img": "assets/img/chickpea-spinach-curry.jpg", "time": "25 min", "serves": 3, "focuses": ["hormone"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Chickpeas (cooked)", "qty": 400, "unit": "g"}, {"name": "Fresh spinach", "qty": 150, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Curry powder", "qty": 8, "unit": "g"}, {"name": "Coconut milk", "qty": 300, "unit": "ml"}, {"name": "Canned tomatoes", "qty": 400, "unit": "g"}], "nutrition": {"calories": 520, "protein": 18.2, "carbs": 56.3, "fat": 28.4}, "steps": ["Soften the onion and garlic, bloom the curry powder for 30 seconds.", "Add the tomatoes and simmer for 10 minutes until slightly thickened.", "Stir in the chickpeas and coconut milk, simmer 5 minutes, then fold in the spinach."]}, {"id": 50, "slug": "quinoa-date-porridge", "title": "Warm Quinoa Porridge with Dates", "excerpt": "A gentle, slow-release start to the day.", "img": "assets/img/quinoa-date-porridge.jpg", "time": "20 min", "serves": 2, "focuses": ["hormone"], "tags": ["breakfast", "vegan", "high-fiber"], "ingredients": [{"name": "Quinoa, rinsed", "qty": 150, "unit": "g"}, {"name": "Plant-based milk", "qty": 400, "unit": "ml"}, {"name": "Medjool dates, chopped", "qty": 60, "unit": "g"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}, {"name": "Tahini", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 502, "protein": 14.9, "carbs": 87.1, "fat": 13}, "steps": ["Simmer the quinoa in the milk for 15 minutes, stirring, until soft and porridge-like.", "Stir in the dates and cinnamon and cook for 2 more minutes.", "Serve with the tahini drizzled over; it turns into something almost dessert-like."]}, {"id": 51, "slug": "chicken-veggie-meatballs", "title": "Chicken and Vegetable Meatballs", "excerpt": "Hidden vegetables, honest protein.", "img": "assets/img/chicken-veggie-meatballs.jpg", "time": "30 min", "serves": 3, "focuses": ["hormone", "protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Chicken mince", "qty": 450, "unit": "g"}, {"name": "Zucchini, grated", "qty": 150, "unit": "g"}, {"name": "Carrot, grated", "qty": 100, "unit": "g"}, {"name": "Egg", "qty": 55, "unit": "g"}, {"name": "Breadcrumbs", "qty": 40, "unit": "g"}, {"name": "Garlic, minced", "qty": 10, "unit": "g"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 367, "protein": 30.7, "carbs": 15.8, "fat": 19.9}, "steps": ["Squeeze the grated zucchini firmly dry, this keeps the meatballs light, not wet.", "Mix everything gently and roll into 12–15 balls.", "Brown in olive oil for 8–10 minutes, turning, until cooked through to 75°C inside."]}, {"id": 52, "slug": "baked-oats-banana", "title": "Baked Oats with Banana and Walnuts", "excerpt": "Breakfast that smells like cake.", "img": "assets/img/baked-oats-banana.jpg", "time": "30 min", "serves": 2, "focuses": ["hormone"], "tags": ["breakfast", "vegetarian", "high-fiber"], "ingredients": [{"name": "Rolled oats", "qty": 150, "unit": "g"}, {"name": "Ripe bananas", "qty": 220, "unit": "g"}, {"name": "Eggs", "qty": 110, "unit": "g"}, {"name": "Milk of choice", "qty": 150, "unit": "ml"}, {"name": "Walnuts, chopped", "qty": 40, "unit": "g"}, {"name": "Baking powder", "qty": 4, "unit": "g"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}], "nutrition": {"calories": 640, "protein": 25, "carbs": 84.6, "fat": 25.8}, "steps": ["Mash the bananas and whisk with the eggs and milk.", "Fold in the oats, baking powder, cinnamon and half the walnuts.", "Bake in a small dish at 180°C for 20–22 minutes until set and golden. Top with the rest of the walnuts."]}, {"id": 53, "slug": "beet-goatcheese-salad", "title": "Roasted Beet and Goat Cheese Salad", "excerpt": "Earthy, creamy and cycle-week friendly.", "img": "assets/img/beet-goatcheese-salad.jpg", "time": "40 min", "serves": 2, "focuses": ["hormone"], "tags": ["lunch", "vegetarian"], "ingredients": [{"name": "Beetroots, quartered", "qty": 400, "unit": "g"}, {"name": "Goat cheese, crumbled", "qty": 100, "unit": "g"}, {"name": "Mixed salad greens", "qty": 100, "unit": "g"}, {"name": "Walnuts", "qty": 40, "unit": "g"}, {"name": "Olive oil", "qty": 30, "unit": "ml"}, {"name": "Balsamic vinegar", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 550, "protein": 18.3, "carbs": 27.5, "fat": 43.6}, "steps": ["Roast the beets in foil at 200°C for 30–35 minutes until tender.", "Whisk the oil and balsamic with a pinch of salt.", "Toss the greens with the dressing, top with warm beets, goat cheese and walnuts."]}, {"id": 54, "slug": "edamame-rice-bowl", "title": "Edamame and Brown Rice Bowl", "excerpt": "Simple, green and quietly filling.", "img": "assets/img/edamame-rice-bowl.jpg", "time": "20 min", "serves": 2, "focuses": ["hormone"], "tags": ["lunch", "vegan", "high-protein", "high-fiber"], "ingredients": [{"name": "Cooked brown rice", "qty": 300, "unit": "g"}, {"name": "Edamame beans (shelled)", "qty": 200, "unit": "g"}, {"name": "Avocado, sliced", "qty": 150, "unit": "g"}, {"name": "Spring onions", "qty": 30, "unit": "g"}, {"name": "Soy sauce", "qty": 25, "unit": "ml"}, {"name": "Sesame seeds", "qty": 10, "unit": "g"}, {"name": "Sesame oil", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 512, "protein": 18.6, "carbs": 58.9, "fat": 25.3}, "steps": ["Warm the rice and divide between two bowls.", "Blanch the edamame in boiling water for 2 minutes and drain.", "Top the rice with edamame and avocado, and dress with soy, sesame oil, spring onions and sesame seeds."]}, {"id": 55, "slug": "poached-pears-yogurt", "title": "Ginger-Poached Pears with Yogurt", "excerpt": "A soft, spiced dessert-breakfast hybrid.", "img": "assets/img/poached-pears-yogurt.jpg", "time": "25 min", "serves": 2, "focuses": ["hormone"], "tags": ["breakfast", "vegetarian"], "ingredients": [{"name": "Pears, peeled and halved", "qty": 300, "unit": "g"}, {"name": "Water", "qty": 300, "unit": "ml"}, {"name": "Fresh ginger, sliced", "qty": 15, "unit": "g"}, {"name": "Honey", "qty": 20, "unit": "ml"}, {"name": "Greek yogurt", "qty": 200, "unit": "g"}, {"name": "Chopped pistachios", "qty": 20, "unit": "g"}], "nutrition": {"calories": 251, "protein": 12.8, "carbs": 38.5, "fat": 6.7}, "steps": ["Simmer the pears with the ginger, honey and water for 15 minutes until tender.", "Let them cool slightly in the syrup so they soak up more flavor.", "Serve two halves per bowl over the yogurt, with pistachios and a spoon of the syrup."]}, {"id": 56, "slug": "red-lentil-tomato-soup", "title": "Red Lentil Tomato Soup", "excerpt": "Cheap, fast and genuinely satisfying.", "img": "assets/img/red-lentil-tomato-soup.jpg", "time": "25 min", "serves": 4, "focuses": ["hormone"], "tags": ["dinner", "vegan", "high-fiber", "high-protein"], "ingredients": [{"name": "Red lentils", "qty": 250, "unit": "g"}, {"name": "Canned tomatoes", "qty": 800, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Ground cumin", "qty": 4, "unit": "g"}, {"name": "Vegetable stock", "qty": 500, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 171, "protein": 8.6, "carbs": 26.6, "fat": 4.7}, "steps": ["Soften the onion and garlic in olive oil, add the cumin for 30 seconds.", "Add the tomatoes, lentils and stock and simmer for 15–18 minutes.", "Blend partially, leave some texture, and season boldly."]}, {"id": 57, "slug": "cinnamon-hot-milk", "title": "Cinnamon Spiced Hot Milk", "excerpt": "The before-bed mug of period week.", "img": "assets/img/cinnamon-hot-milk.jpg", "time": "6 min", "serves": 1, "focuses": ["hormone"], "tags": ["drink", "vegetarian", "low-carb"], "ingredients": [{"name": "Milk of choice", "qty": 250, "unit": "ml"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}, {"name": "Nutmeg", "qty": 1, "unit": "g"}, {"name": "Honey", "qty": 10, "unit": "ml"}, {"name": "Vanilla extract", "qty": 2, "unit": "ml"}], "nutrition": {"calories": 145, "protein": 2.9, "carbs": 27.6, "fat": 4}, "steps": ["Warm the milk gently with the cinnamon and nutmeg, never boil it.", "Whisk in the honey and vanilla.", "Pour into a warm mug and drink it slowly, ideally somewhere soft."]}, {"id": 58, "slug": "choc-avocado-mousse", "title": "Dark Chocolate Avocado Mousse", "excerpt": "Magnesium disguised as dessert.", "img": "assets/img/choc-avocado-mousse.jpg", "time": "10 min", "serves": 2, "focuses": ["hormone"], "tags": ["snack", "vegetarian", "low-carb"], "ingredients": [{"name": "Ripe avocados", "qty": 300, "unit": "g"}, {"name": "Raw cacao powder", "qty": 40, "unit": "g"}, {"name": "Maple syrup", "qty": 50, "unit": "ml"}, {"name": "Plant-based milk", "qty": 40, "unit": "ml"}, {"name": "Vanilla extract", "qty": 3, "unit": "ml"}, {"name": "Sea salt", "qty": 1, "unit": "g"}], "nutrition": {"calories": 364, "protein": 7.3, "carbs": 43.7, "fat": 25.7}, "steps": ["Blend everything until completely smooth, scraping down twice.", "Taste and adjust the maple syrup, avocados vary in richness.", "Chill for at least 30 minutes; it firms up beautifully."]}, {"id": 59, "slug": "broccoli-white-bean-soup", "title": "Broccoli and White Bean Soup", "excerpt": "Green, creamy and weeknight-fast.", "img": "assets/img/broccoli-white-bean-soup.jpg", "time": "25 min", "serves": 4, "focuses": ["hormone"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Broccoli, chopped", "qty": 500, "unit": "g"}, {"name": "White beans (cooked)", "qty": 400, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 10, "unit": "g"}, {"name": "Vegetable stock", "qty": 750, "unit": "ml"}, {"name": "Lemon juice", "qty": 20, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 235, "protein": 13.4, "carbs": 37, "fat": 5}, "steps": ["Soften the onion and garlic, add the broccoli and stock and simmer for 12 minutes.", "Add the beans and cook for 3 more minutes.", "Blend smooth with the lemon juice; the beans make it creamy without any cream."]}, {"id": 60, "slug": "sardine-toast", "title": "Sardine Toast with Lemon", "excerpt": "Small fish, big nutrition, no apologies.", "img": "assets/img/sardine-toast.jpg", "time": "8 min", "serves": 1, "focuses": ["hormone", "protein"], "tags": ["lunch", "high-protein"], "ingredients": [{"name": "Sardines (canned, drained)", "qty": 120, "unit": "g"}, {"name": "Sourdough bread", "qty": 90, "unit": "g"}, {"name": "Lemon juice", "qty": 10, "unit": "ml"}, {"name": "Red onion, thinly sliced", "qty": 20, "unit": "g"}, {"name": "Fresh parsley", "qty": 5, "unit": "g"}, {"name": "Olive oil", "qty": 5, "unit": "ml"}], "nutrition": {"calories": 567, "protein": 39, "carbs": 50.8, "fat": 21}, "steps": ["Toast the sourdough until deeply golden.", "Mash the sardines lightly with the lemon juice and olive oil.", "Pile onto the toast with the onion and parsley. Better than it has any right to be."]}, {"id": 61, "slug": "beef-root-stew", "title": "Slow-Cooked Beef and Root Vegetable Stew", "excerpt": "Weekend stew for the week you need it most.", "img": "assets/img/beef-root-stew.jpg", "time": "30 min (+3h simmer)", "serves": 6, "focuses": ["hormone"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Beef chuck, cubed", "qty": 800, "unit": "g"}, {"name": "Carrots, chopped", "qty": 300, "unit": "g"}, {"name": "Parsnips, chopped", "qty": 250, "unit": "g"}, {"name": "Onion, chopped", "qty": 200, "unit": "g"}, {"name": "Beef stock", "qty": 750, "unit": "ml"}, {"name": "Tomato paste", "qty": 30, "unit": "g"}, {"name": "Bay leaves", "qty": 1, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 439, "protein": 36.6, "carbs": 17.6, "fat": 26.4}, "steps": ["Brown the beef in batches in olive oil, color is flavor here.", "Add the onion and tomato paste, then the stock, scraping the pan clean.", "Add the vegetables and bay leaves and simmer gently for 2.5–3 hours until the beef falls apart."]}]);

/* Batch: protein 62–74 */
RECIPES.push(...[{"id": 62, "slug": "egg-white-scramble", "title": "Veggie Egg Scramble", "excerpt": "A ten-minute, protein-first breakfast.", "img": "assets/img/egg-white-scramble.jpg", "time": "10 min", "serves": 1, "focuses": ["protein"], "tags": ["breakfast", "vegetarian", "low-carb", "high-protein"], "ingredients": [{"name": "Eggs", "qty": 165, "unit": "g"}, {"name": "Cherry tomatoes, halved", "qty": 80, "unit": "g"}, {"name": "Fresh spinach", "qty": 50, "unit": "g"}, {"name": "Feta, crumbled", "qty": 30, "unit": "g"}, {"name": "Olive oil", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 449, "protein": 27.8, "carbs": 7.9, "fat": 34.8}, "steps": ["Soften the tomatoes in the olive oil for 2 minutes.", "Add the spinach, let it wilt, then pour in the beaten eggs.", "Scramble gently over low heat until just set, and finish with the feta."]}, {"id": 63, "slug": "cottage-cheese-bowl", "title": "Cottage Cheese Bowl with Berries", "excerpt": "The no-cook breakfast that keeps you full till lunch.", "img": "assets/img/cottage-cheese-bowl.jpg", "time": "5 min", "serves": 1, "focuses": ["protein"], "tags": ["breakfast", "vegetarian", "high-protein", "low-carb"], "ingredients": [{"name": "Cottage cheese", "qty": 250, "unit": "g"}, {"name": "Mixed berries", "qty": 150, "unit": "g"}, {"name": "Chopped almonds", "qty": 25, "unit": "g"}, {"name": "Honey", "qty": 10, "unit": "ml"}, {"name": "Cinnamon", "qty": 1, "unit": "g"}], "nutrition": {"calories": 506, "protein": 33.9, "carbs": 42.3, "fat": 23.8}, "steps": ["Spoon the cottage cheese into a bowl.", "Top with the berries and almonds.", "Finish with the honey and a dusting of cinnamon. Done before the kettle boils."]}, {"id": 64, "slug": "tuna-bean-salad", "title": "Tuna and White Bean Salad", "excerpt": "A pantry lunch with real staying power.", "img": "assets/img/tuna-bean-salad.jpg", "time": "10 min", "serves": 2, "focuses": ["protein"], "tags": ["lunch", "high-protein", "high-fiber"], "ingredients": [{"name": "Tuna (canned, drained)", "qty": 200, "unit": "g"}, {"name": "White beans (cooked)", "qty": 240, "unit": "g"}, {"name": "Red onion, finely sliced", "qty": 40, "unit": "g"}, {"name": "Cherry tomatoes, halved", "qty": 100, "unit": "g"}, {"name": "Olive oil", "qty": 25, "unit": "ml"}, {"name": "Lemon juice", "qty": 20, "unit": "ml"}, {"name": "Fresh parsley", "qty": 10, "unit": "g"}], "nutrition": {"calories": 404, "protein": 37.4, "carbs": 31.4, "fat": 14.3}, "steps": ["Flake the tuna into large chunks, not mush.", "Whisk the olive oil and lemon juice with salt and pepper.", "Toss everything together gently and rest for 5 minutes before eating."]}, {"id": 65, "slug": "chicken-satay", "title": "Chicken Satay Skewers with Peanut Sauce", "excerpt": "Charred chicken, creamy peanut dip.", "img": "assets/img/chicken-satay.jpg", "time": "30 min", "serves": 3, "focuses": ["protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Chicken thighs, cubed", "qty": 500, "unit": "g"}, {"name": "Soy sauce", "qty": 30, "unit": "ml"}, {"name": "Lime juice", "qty": 20, "unit": "ml"}, {"name": "Peanut butter", "qty": 80, "unit": "g"}, {"name": "Coconut milk", "qty": 100, "unit": "ml"}, {"name": "Honey", "qty": 10, "unit": "ml"}, {"name": "Garlic, grated", "qty": 10, "unit": "g"}], "nutrition": {"calories": 604, "protein": 51.8, "carbs": 12.2, "fat": 39.6}, "steps": ["Marinate the chicken in half the soy, the lime juice and garlic for 15 minutes.", "Thread onto skewers and grill or pan-fry for 10–12 minutes, turning, until cooked through.", "Whisk the peanut butter, coconut milk, remaining soy and honey into a dipping sauce."]}, {"id": 66, "slug": "baked-cod-lentils", "title": "Baked Cod with Herby Lentils", "excerpt": "Light, lean and quietly elegant.", "img": "assets/img/baked-cod-lentils.jpg", "time": "25 min", "serves": 2, "focuses": ["protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Cod fillets", "qty": 320, "unit": "g"}, {"name": "Cooked green lentils", "qty": 250, "unit": "g"}, {"name": "Cherry tomatoes", "qty": 150, "unit": "g"}, {"name": "Fresh parsley", "qty": 15, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Lemon", "qty": 120, "unit": "g"}], "nutrition": {"calories": 435, "protein": 49.6, "carbs": 34, "fat": 12.3}, "steps": ["Warm the lentils with half the olive oil, the tomatoes and most of the parsley.", "Season the cod and bake at 200°C for 10–12 minutes until it just flakes.", "Serve the cod over the lentils with lemon and the last of the parsley."]}, {"id": 67, "slug": "tofu-scramble", "title": "Tofu Scramble with Spinach", "excerpt": "The vegan answer to scrambled eggs.", "img": "assets/img/tofu-scramble.jpg", "time": "12 min", "serves": 2, "focuses": ["protein"], "tags": ["breakfast", "vegan", "high-protein", "low-carb"], "ingredients": [{"name": "Firm tofu", "qty": 350, "unit": "g"}, {"name": "Fresh spinach", "qty": 80, "unit": "g"}, {"name": "Nutritional yeast", "qty": 15, "unit": "g"}, {"name": "Ground turmeric", "qty": 2, "unit": "g"}, {"name": "Garlic powder", "qty": 2, "unit": "g"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}, {"name": "Soy sauce", "qty": 10, "unit": "ml"}], "nutrition": {"calories": 359, "protein": 31.4, "carbs": 10.5, "fat": 22.1}, "steps": ["Crumble the tofu into rough chunks with your hands.", "Fry in olive oil for 4 minutes until lightly golden.", "Add the spices, soy and spinach, cook 2 more minutes and serve hot."]}, {"id": 68, "slug": "stuffed-peppers", "title": "Beef and Quinoa Stuffed Peppers", "excerpt": "A full meal in an edible bowl.", "img": "assets/img/stuffed-peppers.jpg", "time": "45 min", "serves": 4, "focuses": ["protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Bell peppers, halved and seeded", "qty": 600, "unit": "g"}, {"name": "Beef mince", "qty": 400, "unit": "g"}, {"name": "Cooked quinoa", "qty": 200, "unit": "g"}, {"name": "Onion, chopped", "qty": 100, "unit": "g"}, {"name": "Canned tomatoes", "qty": 400, "unit": "g"}, {"name": "Smoked paprika", "qty": 3, "unit": "g"}, {"name": "Grated cheese", "qty": 60, "unit": "g"}], "nutrition": {"calories": 451, "protein": 34.7, "carbs": 26.3, "fat": 23.6}, "steps": ["Soften the onion, brown the mince and stir in the quinoa, tomatoes and paprika. Simmer 5 minutes.", "Fill the pepper halves generously and place in a baking dish with a splash of water.", "Bake covered at 190°C for 25 minutes, then uncover, add the cheese and bake 10 more."]}, {"id": 69, "slug": "skyr-bowl", "title": "Skyr Bowl with Almonds and Apple", "excerpt": "Icelandic simplicity, serious protein.", "img": "assets/img/skyr-bowl.jpg", "time": "5 min", "serves": 1, "focuses": ["protein"], "tags": ["breakfast", "vegetarian", "high-protein"], "ingredients": [{"name": "Skyr", "qty": 250, "unit": "g"}, {"name": "Apple, sliced", "qty": 120, "unit": "g"}, {"name": "Chopped almonds", "qty": 25, "unit": "g"}, {"name": "Honey", "qty": 10, "unit": "ml"}, {"name": "Cinnamon", "qty": 1, "unit": "g"}], "nutrition": {"calories": 398, "protein": 33.3, "carbs": 41.1, "fat": 13.3}, "steps": ["Spoon the skyr into a bowl.", "Fan the apple over the top and scatter with the almonds.", "Drizzle with honey and finish with cinnamon."]}, {"id": 70, "slug": "egg-muffins", "title": "Veggie Egg Muffins", "excerpt": "Grab-and-go protein for the whole week.", "img": "assets/img/egg-muffins.jpg", "time": "25 min", "serves": 3, "focuses": ["protein"], "tags": ["breakfast", "vegetarian", "low-carb", "high-protein"], "ingredients": [{"name": "Eggs", "qty": 330, "unit": "g"}, {"name": "Bell pepper, diced", "qty": 150, "unit": "g"}, {"name": "Fresh spinach", "qty": 60, "unit": "g"}, {"name": "Feta, crumbled", "qty": 60, "unit": "g"}, {"name": "Spring onions", "qty": 30, "unit": "g"}], "nutrition": {"calories": 247, "protein": 18.3, "carbs": 6.7, "fat": 16.5}, "steps": ["Whisk the eggs with a pinch of salt and pepper.", "Divide the vegetables and feta between 6 greased muffin cups and pour over the eggs.", "Bake at 180°C for 18–20 minutes until just set. They keep 3 days in the fridge."]}, {"id": 71, "slug": "shrimp-avocado-salad", "title": "Shrimp and Avocado Salad", "excerpt": "Cold, crisp and done in ten minutes.", "img": "assets/img/shrimp-avocado-salad.jpg", "time": "10 min", "serves": 2, "focuses": ["protein"], "tags": ["lunch", "high-protein", "low-carb"], "ingredients": [{"name": "Cooked shrimp", "qty": 250, "unit": "g"}, {"name": "Avocado, cubed", "qty": 200, "unit": "g"}, {"name": "Cucumber, diced", "qty": 150, "unit": "g"}, {"name": "Lime juice", "qty": 25, "unit": "ml"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Fresh coriander", "qty": 10, "unit": "g"}, {"name": "Chili flakes", "qty": 1, "unit": "g"}], "nutrition": {"calories": 390, "protein": 32.8, "carbs": 13.6, "fat": 25.6}, "steps": ["Whisk the lime juice and olive oil with a pinch of salt.", "Toss the shrimp, avocado and cucumber gently in the dressing.", "Finish with coriander and a whisper of chili flakes."]}, {"id": 72, "slug": "pb-protein-smoothie", "title": "Peanut Butter Protein Smoothie", "excerpt": "Tastes like a milkshake, works like a meal.", "img": "assets/img/pb-protein-smoothie.jpg", "time": "5 min", "serves": 1, "focuses": ["protein"], "tags": ["drink", "vegetarian", "high-protein"], "ingredients": [{"name": "Milk of choice", "qty": 300, "unit": "ml"}, {"name": "Peanut butter", "qty": 32, "unit": "g"}, {"name": "Banana", "qty": 120, "unit": "g"}, {"name": "Greek yogurt", "qty": 100, "unit": "g"}, {"name": "Cocoa powder", "qty": 8, "unit": "g"}, {"name": "Ice cubes", "qty": 100, "unit": "g"}], "nutrition": {"calories": 506, "protein": 23.9, "carbs": 63.2, "fat": 24}, "steps": ["Add everything to the blender, liquids first.", "Blend for 45 seconds until completely smooth and frothy.", "Pour into a tall glass and drink immediately."]}, {"id": 73, "slug": "chicken-chickpea-stew", "title": "Chicken and Chickpea Stew", "excerpt": "Double protein, one pot, zero stress.", "img": "assets/img/chicken-chickpea-stew.jpg", "time": "35 min", "serves": 4, "focuses": ["protein"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Chicken thighs, cubed", "qty": 500, "unit": "g"}, {"name": "Chickpeas (cooked)", "qty": 400, "unit": "g"}, {"name": "Canned tomatoes", "qty": 400, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Smoked paprika", "qty": 4, "unit": "g"}, {"name": "Chicken stock", "qty": 250, "unit": "ml"}], "nutrition": {"calories": 470, "protein": 43.4, "carbs": 36.7, "fat": 16.6}, "steps": ["Brown the chicken in olive oil and set aside.", "Soften the onion and garlic, add the paprika and tomatoes and simmer 10 minutes.", "Return the chicken with the chickpeas and stock and simmer 15 more minutes."]}, {"id": 74, "slug": "smoked-salmon-toast", "title": "Smoked Salmon and Egg Toast", "excerpt": "The brunch classic, protein-forward.", "img": "assets/img/smoked-salmon-toast.jpg", "time": "12 min", "serves": 1, "focuses": ["protein"], "tags": ["breakfast", "high-protein"], "ingredients": [{"name": "Smoked salmon", "qty": 80, "unit": "g"}, {"name": "Eggs", "qty": 110, "unit": "g"}, {"name": "Rye bread", "qty": 70, "unit": "g"}, {"name": "Cream cheese", "qty": 20, "unit": "g"}, {"name": "Fresh dill", "qty": 3, "unit": "g"}, {"name": "Lemon juice", "qty": 5, "unit": "ml"}], "nutrition": {"calories": 516, "protein": 36.3, "carbs": 36.3, "fat": 24.7}, "steps": ["Soft-boil or scramble the eggs to your liking.", "Spread the rye toast with cream cheese and a squeeze of lemon.", "Layer the salmon and eggs on top and finish with dill."]}]);

/* Batch: protein 75–78, anti-inflammatory 79–87 */
RECIPES.push(...[{"id": 75, "slug": "tempeh-buddha-bowl", "title": "Tempeh Buddha Bowl", "excerpt": "Fermented, colorful and deeply filling.", "img": "assets/img/tempeh-buddha-bowl.jpg", "time": "30 min", "serves": 2, "focuses": ["protein", "gut"], "tags": ["lunch", "vegan", "high-protein", "high-fiber"], "ingredients": [{"name": "Tempeh, cubed", "qty": 250, "unit": "g"}, {"name": "Cooked quinoa", "qty": 250, "unit": "g"}, {"name": "Kale, massaged", "qty": 100, "unit": "g"}, {"name": "Roasted chickpeas", "qty": 150, "unit": "g"}, {"name": "Tahini", "qty": 30, "unit": "ml"}, {"name": "Lemon juice", "qty": 20, "unit": "ml"}, {"name": "Soy sauce", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 634, "protein": 42.7, "carbs": 65.4, "fat": 26.7}, "steps": ["Pan-fry the tempeh with the soy sauce for 5 minutes until caramelized.", "Whisk the tahini with the lemon juice and a splash of water into a dressing.", "Build the bowls: quinoa, kale, tempeh and chickpeas, with the dressing over everything."]}, {"id": 76, "slug": "lentil-bolognese", "title": "Lentil Bolognese", "excerpt": "A plant-based ragu with real depth.", "img": "assets/img/lentil-bolognese.jpg", "time": "40 min", "serves": 4, "focuses": ["protein"], "tags": ["dinner", "vegan", "high-protein", "high-fiber"], "ingredients": [{"name": "Green or brown lentils", "qty": 300, "unit": "g"}, {"name": "Canned tomatoes", "qty": 800, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Carrot, finely diced", "qty": 150, "unit": "g"}, {"name": "Celery, finely diced", "qty": 100, "unit": "g"}, {"name": "Tomato paste", "qty": 30, "unit": "g"}, {"name": "Soy sauce", "qty": 20, "unit": "ml"}, {"name": "Pasta (to serve)", "qty": 320, "unit": "g"}], "nutrition": {"calories": 271, "protein": 14.2, "carbs": 52.5, "fat": 1.8}, "steps": ["Soften the onion, carrot and celery for 8 minutes, this base is the whole flavor.", "Add the tomato paste, tomatoes, lentils, soy and 400 ml water. Simmer 30 minutes.", "Serve over pasta cooked al dente, with olive oil instead of cheese if keeping it vegan."]}, {"id": 77, "slug": "greek-chicken-salad", "title": "Greek Yogurt Chicken Salad", "excerpt": "Lighter than mayo, heavier on protein.", "img": "assets/img/greek-chicken-salad.jpg", "time": "15 min", "serves": 2, "focuses": ["protein"], "tags": ["lunch", "high-protein", "low-carb"], "ingredients": [{"name": "Cooked chicken, shredded", "qty": 300, "unit": "g"}, {"name": "Greek yogurt", "qty": 120, "unit": "g"}, {"name": "Celery, diced", "qty": 80, "unit": "g"}, {"name": "Red grapes, halved", "qty": 80, "unit": "g"}, {"name": "Dijon mustard", "qty": 10, "unit": "g"}, {"name": "Lemon juice", "qty": 10, "unit": "ml"}, {"name": "Chopped walnuts", "qty": 20, "unit": "g"}], "nutrition": {"calories": 395, "protein": 54.8, "carbs": 12.7, "fat": 13.4}, "steps": ["Whisk the yogurt, mustard and lemon juice with salt and pepper.", "Fold in the chicken, celery and grapes.", "Rest for 10 minutes if you can, then top with the walnuts."]}, {"id": 78, "slug": "black-bean-tacos", "title": "Black Bean Protein Tacos", "excerpt": "Tuesday-night tacos, plant-powered.", "img": "assets/img/black-bean-tacos.jpg", "time": "20 min", "serves": 3, "focuses": ["protein"], "tags": ["dinner", "vegan", "high-protein", "high-fiber"], "ingredients": [{"name": "Black beans (cooked)", "qty": 400, "unit": "g"}, {"name": "Corn tortillas", "qty": 270, "unit": "g"}, {"name": "Ground cumin", "qty": 4, "unit": "g"}, {"name": "Smoked paprika", "qty": 3, "unit": "g"}, {"name": "Red cabbage, shredded", "qty": 150, "unit": "g"}, {"name": "Avocado, sliced", "qty": 150, "unit": "g"}, {"name": "Lime juice", "qty": 25, "unit": "ml"}], "nutrition": {"calories": 477, "protein": 19, "carbs": 82, "fat": 11.1}, "steps": ["Warm the beans with the cumin, paprika and a splash of water, lightly crushing some.", "Char the tortillas directly over a flame or in a dry pan.", "Fill with the beans, cabbage and avocado, and finish with lime."]}, {"id": 79, "slug": "turmeric-overnight-oats", "title": "Golden Overnight Oats", "excerpt": "Turmeric for breakfast, gently done.", "img": "assets/img/turmeric-overnight-oats.jpg", "time": "10 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["breakfast", "vegan", "high-fiber"], "ingredients": [{"name": "Rolled oats", "qty": 100, "unit": "g"}, {"name": "Plant-based milk", "qty": 300, "unit": "ml"}, {"name": "Ground turmeric", "qty": 3, "unit": "g"}, {"name": "Cinnamon", "qty": 2, "unit": "g"}, {"name": "Black pepper", "qty": 1, "unit": "g"}, {"name": "Maple syrup", "qty": 20, "unit": "ml"}, {"name": "Chia seeds", "qty": 15, "unit": "g"}], "nutrition": {"calories": 326, "protein": 11.6, "carbs": 55, "fat": 8.3}, "steps": ["Whisk the turmeric, cinnamon and pepper into the milk first; no clumps.", "Stir in the oats, chia and maple syrup and refrigerate overnight.", "Serve cold or gently warmed, with extra milk if needed."]}, {"id": 80, "slug": "turmeric-buddha-bowl", "title": "Anti-Inflammatory Bowl with Golden Dressing", "excerpt": "Every color, one bowl, golden sauce.", "img": "assets/img/turmeric-buddha-bowl.jpg", "time": "30 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["lunch", "vegan", "high-fiber"], "ingredients": [{"name": "Cooked brown rice", "qty": 250, "unit": "g"}, {"name": "Roasted sweet potato", "qty": 300, "unit": "g"}, {"name": "Kale, massaged", "qty": 100, "unit": "g"}, {"name": "Chickpeas (cooked)", "qty": 200, "unit": "g"}, {"name": "Tahini", "qty": 30, "unit": "ml"}, {"name": "Ground turmeric", "qty": 3, "unit": "g"}, {"name": "Lemon juice", "qty": 25, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 635, "protein": 19.8, "carbs": 99.1, "fat": 20.2}, "steps": ["Whisk the tahini, turmeric, lemon juice and olive oil with warm water into a pourable dressing.", "Divide the rice between bowls and top with the sweet potato, kale and chickpeas.", "Pour the golden dressing generously over everything."]}, {"id": 81, "slug": "berry-green-tea-smoothie", "title": "Berry Green Tea Smoothie", "excerpt": "Antioxidants layered on antioxidants.", "img": "assets/img/berry-green-tea-smoothie.jpg", "time": "5 min", "serves": 1, "focuses": ["anti-inflammatory"], "tags": ["breakfast", "vegan", "low-carb"], "ingredients": [{"name": "Green tea, cooled", "qty": 200, "unit": "ml"}, {"name": "Mixed frozen berries", "qty": 200, "unit": "g"}, {"name": "Banana", "qty": 100, "unit": "g"}, {"name": "Fresh ginger", "qty": 5, "unit": "g"}, {"name": "Ground flaxseed", "qty": 10, "unit": "g"}], "nutrition": {"calories": 258, "protein": 4.4, "carbs": 53.2, "fat": 5.1}, "steps": ["Brew the green tea ahead and let it cool completely.", "Blend everything until smooth and vividly purple.", "Drink fresh; the berries oxidize fast."]}, {"id": 82, "slug": "baked-mackerel", "title": "Baked Mackerel with Lemon and Herbs", "excerpt": "The most underrated omega-3 source there is.", "img": "assets/img/baked-mackerel.jpg", "time": "20 min", "serves": 2, "focuses": ["anti-inflammatory", "protein"], "tags": ["dinner", "high-protein", "low-carb"], "ingredients": [{"name": "Mackerel fillets", "qty": 350, "unit": "g"}, {"name": "Lemon, sliced", "qty": 120, "unit": "g"}, {"name": "Garlic, sliced", "qty": 10, "unit": "g"}, {"name": "Fresh parsley", "qty": 15, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}], "nutrition": {"calories": 574, "protein": 34.5, "carbs": 7.7, "fat": 45.3}, "steps": ["Heat the oven to 200°C and line a tray with parchment.", "Lay the mackerel skin-side up with the lemon and garlic, drizzle with olive oil.", "Bake for 12–14 minutes until the skin crisps. Scatter with parsley."]}, {"id": 83, "slug": "walnut-beet-salad", "title": "Walnut and Roasted Beet Salad", "excerpt": "Earthy, crunchy and good for everything.", "img": "assets/img/walnut-beet-salad.jpg", "time": "40 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["lunch", "vegetarian"], "ingredients": [{"name": "Beetroots, quartered", "qty": 400, "unit": "g"}, {"name": "Walnuts, toasted", "qty": 50, "unit": "g"}, {"name": "Arugula", "qty": 80, "unit": "g"}, {"name": "Goat cheese, crumbled", "qty": 80, "unit": "g"}, {"name": "Olive oil", "qty": 25, "unit": "ml"}, {"name": "Balsamic vinegar", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 520, "protein": 16.6, "carbs": 27.2, "fat": 41.3}, "steps": ["Roast the beets at 200°C for 30–35 minutes until tender.", "Whisk the oil and balsamic into a dressing.", "Toss the arugula with the dressing and top with warm beets, walnuts and goat cheese."]}, {"id": 84, "slug": "turmeric-chicken-soup", "title": "Turmeric Chicken Soup", "excerpt": "Golden broth for under-the-weather days.", "img": "assets/img/turmeric-chicken-soup.jpg", "time": "35 min", "serves": 4, "focuses": ["anti-inflammatory"], "tags": ["dinner", "high-protein"], "ingredients": [{"name": "Chicken thighs, cubed", "qty": 400, "unit": "g"}, {"name": "Carrots, sliced", "qty": 200, "unit": "g"}, {"name": "Celery, sliced", "qty": 150, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Ground turmeric", "qty": 5, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 15, "unit": "g"}, {"name": "Chicken stock", "qty": 1000, "unit": "ml"}], "nutrition": {"calories": 270, "protein": 28.1, "carbs": 13, "fat": 11.5}, "steps": ["Soften the onion, carrots and celery for 5 minutes.", "Add the chicken, turmeric and ginger and cook for 3 more minutes.", "Pour in the stock and simmer for 25 minutes. Season generously."]}, {"id": 85, "slug": "green-soup", "title": "Anti-Inflammatory Green Soup", "excerpt": "Broccoli, spinach and a little healing.", "img": "assets/img/green-soup.jpg", "time": "25 min", "serves": 4, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "low-carb"], "ingredients": [{"name": "Broccoli, chopped", "qty": 400, "unit": "g"}, {"name": "Fresh spinach", "qty": 100, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 10, "unit": "g"}, {"name": "Vegetable stock", "qty": 750, "unit": "ml"}, {"name": "Fresh ginger, grated", "qty": 10, "unit": "g"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}, {"name": "Lemon juice", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 104, "protein": 4.7, "carbs": 14.5, "fat": 4.5}, "steps": ["Soften the onion, garlic and ginger in olive oil.", "Add the broccoli and stock, simmer 12 minutes, then add the spinach for 2 minutes.", "Blend bright green with the lemon juice and season."]}, {"id": 86, "slug": "blueberry-chia-toast", "title": "Blueberry Chia Jam Toast", "excerpt": "Homemade jam in ten minutes flat.", "img": "assets/img/blueberry-chia-toast.jpg", "time": "12 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["breakfast", "vegan", "high-fiber"], "ingredients": [{"name": "Blueberries", "qty": 250, "unit": "g"}, {"name": "Chia seeds", "qty": 20, "unit": "g"}, {"name": "Maple syrup", "qty": 15, "unit": "ml"}, {"name": "Sourdough bread", "qty": 160, "unit": "g"}, {"name": "Nut butter", "qty": 30, "unit": "g"}], "nutrition": {"calories": 460, "protein": 13.3, "carbs": 70.7, "fat": 14.3}, "steps": ["Simmer the blueberries with the maple syrup for 6 minutes until jammy.", "Stir in the chia seeds and rest for 5 minutes to thicken.", "Spread the toast with nut butter and spoon over the warm chia jam."]}, {"id": 87, "slug": "turmeric-rice-bowl", "title": "Golden Rice Bowl with Vegetables", "excerpt": "Yellow rice, happy body.", "img": "assets/img/turmeric-rice-bowl.jpg", "time": "30 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Brown rice", "qty": 200, "unit": "g"}, {"name": "Ground turmeric", "qty": 4, "unit": "g"}, {"name": "Cauliflower florets", "qty": 300, "unit": "g"}, {"name": "Chickpeas (cooked)", "qty": 200, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Lemon juice", "qty": 20, "unit": "ml"}, {"name": "Fresh coriander", "qty": 10, "unit": "g"}], "nutrition": {"calories": 424, "protein": 15.1, "carbs": 62.8, "fat": 14.3}, "steps": ["Cook the rice with the turmeric stirred into the water.", "Roast the cauliflower and chickpeas at 200°C for 20 minutes with olive oil and salt.", "Combine everything and finish with lemon and coriander."]}]);

/* Batch: anti-inflammatory 88–100 */
RECIPES.push(...[{"id": 88, "slug": "cherry-recovery-smoothie", "title": "Tart Cherry Recovery Smoothie", "excerpt": "The post-workout glass with actual research behind it.", "img": "assets/img/cherry-recovery-smoothie.jpg", "time": "5 min", "serves": 1, "focuses": ["anti-inflammatory"], "tags": ["drink", "vegan", "low-carb"], "ingredients": [{"name": "Tart cherry juice", "qty": 200, "unit": "ml"}, {"name": "Banana", "qty": 100, "unit": "g"}, {"name": "Plant-based yogurt", "qty": 100, "unit": "g"}, {"name": "Fresh ginger", "qty": 5, "unit": "g"}, {"name": "Ice cubes", "qty": 100, "unit": "g"}], "nutrition": {"calories": 303, "protein": 3, "carbs": 54.4, "fat": 8.5}, "steps": ["Add everything to the blender.", "Blend for 40 seconds until smooth and deep red.", "Drink within an hour of your workout, or just because."]}, {"id": 89, "slug": "broccoli-turmeric-stirfry", "title": "Broccoli Turmeric Stir-Fry", "excerpt": "A golden side that steals the show.", "img": "assets/img/broccoli-turmeric-stirfry.jpg", "time": "15 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "low-carb"], "ingredients": [{"name": "Broccoli florets", "qty": 400, "unit": "g"}, {"name": "Ground turmeric", "qty": 4, "unit": "g"}, {"name": "Garlic, sliced", "qty": 10, "unit": "g"}, {"name": "Sesame oil", "qty": 15, "unit": "ml"}, {"name": "Soy sauce", "qty": 20, "unit": "ml"}, {"name": "Sesame seeds", "qty": 8, "unit": "g"}], "nutrition": {"calories": 176, "protein": 7.7, "carbs": 18.2, "fat": 10.5}, "steps": ["Stir-fry the broccoli in sesame oil over high heat for 4 minutes.", "Add the garlic and turmeric and cook for 1 minute until fragrant.", "Add the soy and a splash of water, cover for 2 minutes, then top with sesame seeds."]}, {"id": 90, "slug": "matcha-overnight-oats", "title": "Matcha Overnight Oats", "excerpt": "Calm energy in a jar.", "img": "assets/img/matcha-overnight-oats.jpg", "time": "10 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["breakfast", "vegan", "high-fiber"], "ingredients": [{"name": "Rolled oats", "qty": 100, "unit": "g"}, {"name": "Plant-based milk", "qty": 300, "unit": "ml"}, {"name": "Matcha powder", "qty": 4, "unit": "g"}, {"name": "Maple syrup", "qty": 20, "unit": "ml"}, {"name": "Chia seeds", "qty": 15, "unit": "g"}, {"name": "Vanilla extract", "qty": 2, "unit": "ml"}], "nutrition": {"calories": 326, "protein": 11.9, "carbs": 54.3, "fat": 8.2}, "steps": ["Whisk the matcha into a small splash of warm milk until lump-free.", "Stir in the rest of the milk, the oats, chia, maple and vanilla.", "Refrigerate overnight and stir once more before serving."]}, {"id": 91, "slug": "garlic-white-bean-mash", "title": "Garlic White Bean Mash", "excerpt": "Warmer and kinder than mashed potato.", "img": "assets/img/garlic-white-bean-mash.jpg", "time": "15 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["lunch", "vegan", "high-fiber"], "ingredients": [{"name": "White beans (cooked)", "qty": 400, "unit": "g"}, {"name": "Garlic cloves, roasted or sautéed", "qty": 20, "unit": "g"}, {"name": "Olive oil", "qty": 30, "unit": "ml"}, {"name": "Lemon juice", "qty": 15, "unit": "ml"}, {"name": "Fresh rosemary", "qty": 3, "unit": "g"}, {"name": "Vegetable stock", "qty": 60, "unit": "ml"}], "nutrition": {"calories": 412, "protein": 18.3, "carbs": 48.3, "fat": 16.1}, "steps": ["Warm the beans with the stock for 5 minutes.", "Mash with the garlic, olive oil, lemon and rosemary until rustic, not puréed.", "Serve warm under roasted vegetables, fish or on toast."]}, {"id": 92, "slug": "baked-trout", "title": "Spiced Baked Trout", "excerpt": "Whole-ish flavor, minimal work.", "img": "assets/img/baked-trout.jpg", "time": "25 min", "serves": 2, "focuses": ["anti-inflammatory", "protein"], "tags": ["dinner", "high-protein", "low-carb"], "ingredients": [{"name": "Trout fillets", "qty": 350, "unit": "g"}, {"name": "Ground turmeric", "qty": 3, "unit": "g"}, {"name": "Smoked paprika", "qty": 2, "unit": "g"}, {"name": "Garlic powder", "qty": 2, "unit": "g"}, {"name": "Olive oil", "qty": 20, "unit": "ml"}, {"name": "Lemon", "qty": 120, "unit": "g"}], "nutrition": {"calories": 374, "protein": 36, "carbs": 7.3, "fat": 22.6}, "steps": ["Mix the spices with the olive oil into a rub.", "Coat the trout and rest for 10 minutes.", "Bake at 200°C for 12–14 minutes until just flaky, and serve with lemon."]}, {"id": 93, "slug": "roasted-turmeric-cauliflower", "title": "Roasted Turmeric Cauliflower", "excerpt": "Golden florets for bowls, salads and snacking.", "img": "assets/img/roasted-turmeric-cauliflower.jpg", "time": "30 min", "serves": 3, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "low-carb"], "ingredients": [{"name": "Cauliflower florets", "qty": 600, "unit": "g"}, {"name": "Ground turmeric", "qty": 5, "unit": "g"}, {"name": "Ground cumin", "qty": 3, "unit": "g"}, {"name": "Olive oil", "qty": 30, "unit": "ml"}, {"name": "Lemon juice", "qty": 15, "unit": "ml"}, {"name": "Fresh coriander", "qty": 10, "unit": "g"}], "nutrition": {"calories": 149, "protein": 4.3, "carbs": 12.1, "fat": 10.9}, "steps": ["Toss the cauliflower with the oil, turmeric, cumin and salt.", "Roast at 210°C for 20–25 minutes until the edges are deeply browned.", "Finish with lemon and coriander."]}, {"id": 94, "slug": "green-tea-pears", "title": "Green Tea Poached Pears", "excerpt": "A light, gently sweet ending.", "img": "assets/img/green-tea-pears.jpg", "time": "25 min", "serves": 2, "focuses": ["anti-inflammatory"], "tags": ["snack", "vegan", "low-carb"], "ingredients": [{"name": "Pears, peeled", "qty": 300, "unit": "g"}, {"name": "Green tea, brewed", "qty": 400, "unit": "ml"}, {"name": "Honey", "qty": 20, "unit": "ml"}, {"name": "Fresh ginger, sliced", "qty": 10, "unit": "g"}, {"name": "Cinnamon stick", "qty": 3, "unit": "g"}], "nutrition": {"calories": 126, "protein": 0.9, "carbs": 32.8, "fat": 0.3}, "steps": ["Simmer the tea, honey, ginger and cinnamon together for 3 minutes.", "Add the pears and poach gently for 15 minutes until tender.", "Cool in the liquid and serve with a little syrup spooned over."]}, {"id": 95, "slug": "beet-soup", "title": "Anti-Inflammatory Beet Soup", "excerpt": "Vivid, earthy and oddly cheering.", "img": "assets/img/beet-soup.jpg", "time": "35 min", "serves": 4, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Beetroots, chopped", "qty": 500, "unit": "g"}, {"name": "Potato, chopped", "qty": 200, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Apple, chopped", "qty": 150, "unit": "g"}, {"name": "Vegetable stock", "qty": 750, "unit": "ml"}, {"name": "Apple cider vinegar", "qty": 15, "unit": "ml"}, {"name": "Olive oil", "qty": 15, "unit": "ml"}], "nutrition": {"calories": 171, "protein": 4.1, "carbs": 31.8, "fat": 4.4}, "steps": ["Soften the onion in olive oil, then add the beets, potato and apple.", "Cover with the stock and simmer for 25 minutes until soft.", "Blend vivid pink with the vinegar and season well."]}, {"id": 96, "slug": "ginger-miso-tofu", "title": "Ginger-Miso Glazed Tofu", "excerpt": "Sticky, savory and weeknight-fast.", "img": "assets/img/ginger-miso-tofu.jpg", "time": "20 min", "serves": 2, "focuses": ["anti-inflammatory", "gut"], "tags": ["dinner", "vegan", "high-protein"], "ingredients": [{"name": "Firm tofu, cubed", "qty": 400, "unit": "g"}, {"name": "Miso paste", "qty": 30, "unit": "g"}, {"name": "Fresh ginger, grated", "qty": 15, "unit": "g"}, {"name": "Soy sauce", "qty": 20, "unit": "ml"}, {"name": "Maple syrup", "qty": 15, "unit": "ml"}, {"name": "Sesame oil", "qty": 15, "unit": "ml"}, {"name": "Spring onions", "qty": 20, "unit": "g"}], "nutrition": {"calories": 419, "protein": 32.8, "carbs": 17.7, "fat": 24.5}, "steps": ["Crisp the tofu cubes in the sesame oil for 6–8 minutes, turning.", "Whisk the miso, ginger, soy, maple and a splash of water into a glaze.", "Add the glaze and toss for 2 minutes until sticky. Top with spring onions."]}, {"id": 97, "slug": "kale-white-bean-stew", "title": "Kale and White Bean Stew", "excerpt": "A brothy, green, one-pot dinner.", "img": "assets/img/kale-white-bean-stew.jpg", "time": "30 min", "serves": 4, "focuses": ["anti-inflammatory"], "tags": ["dinner", "vegan", "high-fiber"], "ingredients": [{"name": "Kale, chopped", "qty": 250, "unit": "g"}, {"name": "White beans (cooked)", "qty": 400, "unit": "g"}, {"name": "Onion, chopped", "qty": 150, "unit": "g"}, {"name": "Garlic, minced", "qty": 15, "unit": "g"}, {"name": "Canned tomatoes", "qty": 400, "unit": "g"}, {"name": "Vegetable stock", "qty": 400, "unit": "ml"}, {"name": "Smoked paprika", "qty": 3, "unit": "g"}], "nutrition": {"calories": 206, "protein": 13.3, "carbs": 37.5, "fat": 1.5}, "steps": ["Soften the onion and garlic, bloom the paprika for 30 seconds.", "Add the tomatoes, beans and stock and simmer for 15 minutes.", "Stir in the kale for the last 5 minutes and season boldly."]}, {"id": 98, "slug": "papaya-lime-bowl", "title": "Papaya and Lime Breakfast Bowl", "excerpt": "Enzymes and sunshine for breakfast.", "img": "assets/img/papaya-lime-bowl.jpg", "time": "5 min", "serves": 1, "focuses": ["anti-inflammatory"], "tags": ["breakfast", "vegan", "low-carb"], "ingredients": [{"name": "Ripe papaya, cubed", "qty": 300, "unit": "g"}, {"name": "Lime juice", "qty": 15, "unit": "ml"}, {"name": "Coconut yogurt", "qty": 100, "unit": "g"}, {"name": "Pumpkin seeds", "qty": 15, "unit": "g"}, {"name": "Fresh mint", "qty": 3, "unit": "g"}], "nutrition": {"calories": 248, "protein": 3, "carbs": 42.3, "fat": 9}, "steps": ["Cube the papaya and squeeze over the lime.", "Serve over the coconut yogurt.", "Scatter with pumpkin seeds and mint."]}, {"id": 99, "slug": "spiced-turmeric-almonds", "title": "Spiced Turmeric Almonds", "excerpt": "The snack jar that never stays full.", "img": "assets/img/spiced-turmeric-almonds.jpg", "time": "15 min", "serves": 6, "focuses": ["anti-inflammatory"], "tags": ["snack", "vegan", "low-carb"], "ingredients": [{"name": "Almonds", "qty": 200, "unit": "g"}, {"name": "Ground turmeric", "qty": 4, "unit": "g"}, {"name": "Smoked paprika", "qty": 2, "unit": "g"}, {"name": "Garlic powder", "qty": 2, "unit": "g"}, {"name": "Olive oil", "qty": 10, "unit": "ml"}, {"name": "Sea salt", "qty": 3, "unit": "g"}], "nutrition": {"calories": 213, "protein": 7.2, "carbs": 8.3, "fat": 18.5}, "steps": ["Toss the almonds with the oil and all the spices.", "Roast at 170°C for 10–12 minutes, shaking once, until fragrant.", "Cool completely before jarring; they crisp up as they cool."]}, {"id": 100, "slug": "golden-vegetable-broth", "title": "Golden Vegetable Broth", "excerpt": "A plant-based answer to bone broth.", "img": "assets/img/golden-vegetable-broth.jpg", "time": "60 min", "serves": 6, "focuses": ["anti-inflammatory", "gut"], "tags": ["drink", "vegan", "low-carb"], "ingredients": [{"name": "Carrots, chopped", "qty": 300, "unit": "g"}, {"name": "Celery, chopped", "qty": 200, "unit": "g"}, {"name": "Onion, quartered", "qty": 300, "unit": "g"}, {"name": "Garlic head, halved", "qty": 40, "unit": "g"}, {"name": "Fresh ginger, sliced", "qty": 30, "unit": "g"}, {"name": "Ground turmeric", "qty": 5, "unit": "g"}, {"name": "Water", "qty": 2500, "unit": "ml"}, {"name": "Sea salt", "qty": 8, "unit": "g"}], "nutrition": {"calories": 66, "protein": 2, "carbs": 14.9, "fat": 0.5}, "steps": ["Roast the vegetables at 200°C for 25 minutes until browned at the edges.", "Simmer everything together gently for 45–60 minutes.", "Strain, season and sip warm, or use as a base for soups and grains."]}]);
