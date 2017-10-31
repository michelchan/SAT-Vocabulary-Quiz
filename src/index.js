/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "formally reject or disavow a formerly held belief": ["abjure", "intransigent", "duplicity", "fractious"]
    }, {
        "occurring by happy chance": ["fortuitous", "dirge", "corpulence", "covet"]
    }, {
        "physical beauty, especially of a woman": ["pulchritude", "relegate", "quandary", "truculent"]
    }, {
        "a composition that imitates or misrepresents a style": ["travesty", "tome", "swarthy", "requisition"]
    }, {
        "marked by skill in deception": ["wily", "none of the answers", "evince", "duplicity"]
    }, {
        "compulsory force or threat": ["duress", "dour", "divisive", "dirge"]
    }, {
        "marked by precise accordance with details": ["punctilious", "prurient", "preponderance", "potentate"]
    }, {
        "characterized by dignity and propriety": ["staid", "impetuous", "pert", "prurient"]
    }, {
        "not sensible about practical matters": ["quixotic", "none of the choices", "rescind", "rife"]
    }, {
        "liberality in bestowing gifts": ["largesse", "invective", "Dweedle", "none of the choices"]
    }, {
        "the sound of a bell rung slowly to announce a death": ["none of the choices", "irreverence", "obsequies", "sepulture"]
    }, {
        "habitual": ["inveterate", "invertebrates", "legerdemain", "munificent"]
    }, {
        "a soft wet area of low-lying land that sinks underfoot": ["morass", "none of the choices", "assiduous", "prurient"]
    }, {
        "any of various freshwater fish of the family Cyprinidae": ["carp", "Agnatha", "Cartilaginous", "blennioids"]
    }, {
        "play boisterously": ["none of the choices", "caucus", "commensurate", "eclectic"]
    }, {
        "the fraudulent appropriation of funds or property": ["none of the above", "enervate", "enfranchise", "despot"]
    }, {
        "a leader who seeks support by appealing to popular passions": ["demagogue", "gourmand", "interlocutor", "reprobate"]
    }, {
        "pertaining to beauty": ["aesthetic", "exemplary", "florid", "brazen"]
    }, {
        "surrender ": ["capitulate", "boisterous", "abhor", "fraught"]
    }, {
        "to delay, often unnecessarily": ["none of the above", "nonchalant", "brusque", "arid"]
    }, {
        "sympathy": ["compassion", "compromise", "condescending", "capacious"]
    }, {
        "clichéd ": ["none of the above", "haughty", "hedonist", "brazen"]
    }, {
        "to free from blame": ["vindicate", "condemn", "surreptitious", "impute"]
    }, {
        "fearless": ["intrepid", "fraught", "jubilation", "fortuitous"]
    }, {
        "uproar; noise": ["tumult", "sanctimonious", "preclude", "ossify"]
    }, {
        "turn to bone": ["ossify", "impoverished", "exonerates", "lukewarm"]
    }, {
        "right or privilege": ["prerogative", "savant", "maelstrom", "palatable"]
    }, {
        "famous": ["preeminent", "sardonic", "unalloyed", "amorphous"]
    }, {
        "cheerful": ["sanguine", "overt", "preeminent", "amorphous"]
    }, {
        "novice; beginner": ["tyro", "exorcism", "sanguine", "sardonic"]
    }, {
        "hypocritically holy": ["sanctimonious", "ossify", "jubilation", "fortuitous"]
    }, {
        "emphasize": ["underscore", "ossify", "jubilation", "tyro"]
    }, {
        "lack of government": ["anarchy", "oligarchy", "theocracy", "plutocracy"]
    }, {
        "procession of vehicles": ["cavalcade", "unctuous", "savant", "amorphous"]
    }, {
        "sharpness of mind": ["acumen", "foster", "incoherence", "indiscriminate"]
    }, {
        "encourage": ["foster", "inane", "lucid", "ornate"]
    }, {
        "selfish": ["egotistical", "epitome", "effacement", "nefarious"]
    }, {
        "dull; unoriginal": ["banal", "axiom", "bellicose", "abashed"]
    }, {
        "a horn filled with fruits": ["cornucopia", "convivial", "antipodes", "assuage"]
    }, {
        "average": ["mediocre", "levity", "docile", "equivocal"]
    }, {
        "undecided": ["ambivalent", "cryptic", "deft", "chicanery"]
    }, {
        "easily angered": ["irascible", "ineffable", "incorrigible", "implacable"]
    }, {
        "lack of energy": ["lassitude", "lament", "languid", "ephemeral"]
    }, {
        "firm and strong": ["robust", "skeptical", "mollified", "provocative"]
    }, {
        "thorough; eager": ["sedulous", "remiss", "rhetoric", "futile"]
    }, {
        "seeking revenge": ["vindictive", "vacillated", "judicious", "legitimate"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "long life": ["longevity", "antagonist", "abbreviate", "adulation"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "dishonor, disgrace": ["discredit", "resilent", "divergent", "integrity"]
    }, {
        "To lower in position, estimation, or the like; degrade.": ["abase", "abbess", "abbey", "abbot"]
    }, {
        "The lady superior of a nunnery. ": ["abbess", "abbey", "abbot", "abdicate"]
    }, {
        "The group of buildings which collectively form the dwelling-place of a society of monks or nuns.": ["abbey", "abbot", "abdicate", "abdomen"]
    }, {
        "The superior of a community of monks. ": ["abbot", "abdicate", "abdomen", "abdominal"]
    }, {
        "To give up (royal power or the like). ": ["abdicate", "abdomen", "abdominal", "abduction"]
    }, {
        "In mammals, the visceral cavity between the diaphragm and the pelvic floor; the belly. ": ["abdomen", "abdominal", "abduction", "abed"]
    }, {
        "Of, pertaining to, or situated on the abdomen. ": ["abdominal", "abduction", "abed", "aberration"]
    }, {
        "A carrying away of a person against his will, or illegally. ": ["abduction", "abed", "aberration", "abet"]
    }, {
        "In bed; on a bed. ": ["abed", "aberration", "abet", "abeyance"]
    }, {
        "Deviation from a right, customary, or prescribed course. ": ["aberration", "abet", "abeyance", "abhorrence"]
    }, {
        "To aid, promote, or encourage the commission of (an offense). ": ["abet", "abeyance", "abhorrence", "abhorrent"]
    }, {
        "A state of suspension or temporary inaction. ": ["abeyance", "abhorrence", "abhorrent", "abidance"]
    }, {
        "The act of detesting extremely. ": ["abhorrence", "abhorrent", "abidance", "abject"]
    }, {
        "Very repugnant; hateful. ": ["abhorrent", "abidance", "abject", "abjure"]
    }, {
        "An abiding. ": ["abidance", "abject", "abjure", "able-bodied"]
    }, {
        "Sunk to a low condition. ": ["abject", "abjure", "able-bodied", "ablution"]
    }, {
        "To recant, renounce, repudiate under oath. ": ["abjure", "able-bodied", "ablution", "abnegate"]
    }, {
        "Competent for physical service. ": ["able-bodied", "ablution", "abnegate", "abnormal"]
    }, {
        "A washing or cleansing, especially of the body. ": ["ablution", "abnegate", "abnormal", "abominable"]
    }, {
        "To renounce (a right or privilege). ": ["abnegate", "abnormal", "abominable", "abominate"]
    }, {
        "Not conformed to the ordinary rule or standard. ": ["abnormal", "abominable", "abominate", "abomination"]
    }, {
        "Very hateful. ": ["abominable", "abominate", "abomination", "aboriginal"]
    }, {
        "To hate violently. ": ["abominate", "abomination", "aboriginal", "aborigines"]
    }, {
        "A very detestable act or practice. ": ["abomination", "aboriginal", "aborigines", "aboveboard"]
    }, {
        "Primitive; unsophisticated. ": ["aboriginal", "aborigines", "aboveboard", "abrade"]
    }, {
        "The original of earliest known inhabitants of a country. ": ["aborigines", "aboveboard", "abrade", "abrasion"]
    }, {
        "Without concealment, fraud, or trickery. ": ["aboveboard", "abrade", "abrasion", "abridge"]
    }, {
        "To wear away the surface or some part of by friction. ": ["abrade", "abrasion", "abridge", "abridgment"]
    }, {
        "That which is rubbed off. ": ["abrasion", "abridge", "abridgment", "abrogate"]
    }, {
        "To make shorter in words, keeping the essential features, leaning out minor particles. ": ["abridge", "abridgment", "abrogate", "abrupt"]
    }, {
        "A condensed form as of a book or play. ": ["abridgment", "abrogate", "abrupt", "abscess"]
    }, {
        "To abolish, repeal. ": ["abrogate", "abrupt", "abscess", "abscission"]
    }, {
        "Beginning, ending, or changing suddenly or with a break. ": ["abrupt", "abscess", "abscission", "abscond"]
    }, {
        "A Collection of pus in a cavity formed within some tissue of the body. ": ["abscess", "abscission", "abscond", "absence"]
    }, {
        "The act of cutting off, as in a surgical operation. ": ["abscission", "abscond", "absence", "absent-minded"]
    }, {
        "To depart suddenly and secretly, as for the purpose of escaping arrest. ": ["abscond", "absence", "absent-minded", "absolution"]
    }, {
        "The fact of not being present or available. ": ["absence", "absent-minded", "absolution", "absolve"]
    }, {
        "Lacking in attention to immediate surroundings or business. ": ["absent-minded", "absolution", "absolve", "absorb"]
    }, {
        "Forgiveness, or passing over of offenses. ": ["absolution", "absolve", "absorb", "absorption"]
    }, {
        "To free from sin or its penalties. ": ["absolve", "absorb", "absorption", "abstain"]
    }, {
        "To drink in or suck up, as a sponge absorbs water. ": ["absorb", "absorption", "abstain", "abstemious"]
    }, {
        "The act or process of absorbing. ": ["absorption", "abstain", "abstemious", "abstinence"]
    }, {
        "To keep oneself back (from doing or using something). ": ["abstain", "abstemious", "abstinence", "abstruse"]
    }, {
        "Characterized by self denial or abstinence, as in the use of drink, food. ": ["abstemious", "abstinence", "abstruse", "absurd"]
    }, {
        "Self denial. ": ["abstinence", "abstruse", "absurd", "abundant"]
    }, {
        "Dealing with matters difficult to be understood. ": ["abstruse", "absurd", "abundant", "abusive"]
    }, {
        "Inconsistent with reason or common sense. ": ["absurd", "abundant", "abusive", "abut"]
    }, {
        "Plentiful. ": ["abundant", "abusive", "abut", "abyss"]
    }, {
        "Employing harsh words or ill treatment. ": ["abusive", "abut", "abyss", "academic"]
    }, {
        "To touch at the end or boundary line. ": ["abut", "abyss", "academic", "academician"]
    }, {
        "Bottomless gulf. ": ["abyss", "academic", "academician", "academy"]
    }, {
        "Of or pertaining to an academy, college, or university. ": ["academic", "academician", "academy", "accede"]
    }, {
        "A member of an academy of literature, art, or science. ": ["academician", "academy", "accede", "accelerate"]
    }, {
        "Any institution where the higher branches of learning are taught. ": ["academy", "accede", "accelerate", "accept"]
    }, {
        "To agree. ": ["accede", "accelerate", "accept", "access"]
    }, {
        "To move faster. ": ["accelerate", "accept", "access", "accessible"]
    }, {
        "To take when offered. ": ["accept", "access", "accessible", "accession"]
    }, {
        "A way of approach or entrance; passage. ": ["access", "accessible", "accession", "accessory"]
    }, {
        "Approachable. ": ["accessible", "accession", "accessory", "acclaim"]
    }, {
        "Induction or elevation, as to dignity, office, or government. ": ["accession", "accessory", "acclaim", "accommodate"]
    }, {
        "A person or thing that aids the principal agent. ": ["accessory", "acclaim", "accommodate", "accompaniment"]
    }, {
        "To utter with a shout. ": ["acclaim", "accommodate", "accompaniment", "accompanist"]
    }, {
        "To furnish something as a kindness or favor. ": ["accommodate", "accompaniment", "accompanist", "accompany"]
    }, {
        "A subordinate part or parts, enriching or supporting the leading part. ": ["accompaniment", "accompanist", "accompany", "accomplice"]
    }, {
        "One who or that which accompanies. ": ["accompanist", "accompany", "accomplice", "accomplish"]
    }, {
        "To go with, or be associated with, as a companion. ": ["accompany", "accomplice", "accomplish", "accordion"]
    }, {
        "An associate in wrong-doing. ": ["accomplice", "accomplish", "accordion", "accost"]
    }, {
        "To bring to pass.": ["accomplish", "accordion", "accost", "account"]
    }, {
        "A portable free-reed musical instrument. ": ["accordion", "accost", "account", "accouter"]
    }, {
        "To speak to. ": ["accost", "account", "accouter", "accredit"]
    }, {
        "A record or statement of receipts and expenditures, or of business transactions. ": ["account", "accouter", "accredit", "accumulate"]
    }, {
        "To dress. ": ["accouter", "accredit", "accumulate", "accuracy"]
    }, {
        "To give credit or authority to. ": ["accredit", "accumulate", "accuracy", "accurate"]
    }, {
        "To become greater in quantity or number. ": ["accumulate", "accuracy", "accurate", "accursed"]
    }, {
        "Exactness. ": ["accuracy", "accurate", "accursed", "accusation"]
    }, {
        "Conforming exactly to truth or to a standard. ": ["accurate", "accursed", "accusation", "accusatory"]
    }, {
        "Doomed to evil, misery, or misfortune. ": ["accursed", "accusation", "accusatory", "accuse"]
    }, {
        "A charge of crime, misdemeanor, or error. ": ["accusation", "accusatory", "accuse", "accustom"]
    }, {
        "Of, pertaining to, or involving an accusation. ": ["accusatory", "accuse", "accustom", "acerbity"]
    }, {
        "To charge with wrong doing, misconduct, or error. ": ["accuse", "accustom", "acerbity", "acetate"]
    }, {
        "To make familiar by use. ": ["accustom", "acerbity", "acetate", "acetic"]
    }, {
        "Sourness, with bitterness and astringency. ": ["acerbity", "acetate", "acetic", "ache"]
    }, {
        "A salt of acetic acid. ": ["acetate", "acetic", "ache", "Achillean"]
    }, {
        "Of, pertaining to, or of the nature of vinegar. ": ["acetic", "ache", "Achillean", "achromatic"]
    }, {
        "To be in pain or distress. ": ["ache", "Achillean", "achromatic", "acid"]
    }, {
        "Invulnerable. ": ["Achillean", "achromatic", "acid", "acidify"]
    }, {
        "Colorless, ": ["achromatic", "acid", "acidify", "acknowledge"]
    }, {
        "A sour substance. ": ["acid", "acidify", "acknowledge", "acknowledgment"]
    }, {
        "To change into acid. ": ["acidify", "acknowledge", "acknowledgment", "acme"]
    }, {
        "To recognize; to admit the genuineness or validity of. ": ["acknowledge", "acknowledgment", "acme", "acoustic"]
    }, {
        "Recognition. ": ["acknowledgment", "acme", "acoustic", "acquaint"]
    }, {
        "The highest point, or summit. ": ["acme", "acoustic", "acquaint", "acquiesce"]
    }, {
        "Pertaining to the act or sense of hearing. ": ["acoustic", "acquaint", "acquiesce", "acquiescence"]
    }, {
        "To make familiar or conversant. ": ["acquaint", "acquiesce", "acquiescence", "acquire"]
    }, {
        "To comply; submit. ": ["acquiesce", "acquiescence", "acquire", "acquisition"]
    }, {
        "Passive consent. ": ["acquiescence", "acquire", "acquisition", "acquit"]
    }, {
        "To get as one's own. ": ["acquire", "acquisition", "acquit", "acquittal"]
    }, {
        "Anything gained, or made one's own, usually by effort or labor. ": ["acquisition", "acquit", "acquittal", "acquittance"]
    }, {
        "To free or clear, as from accusation. ": ["acquit", "acquittal", "acquittance", "acreage"]
    }, {
        "A discharge from accusation by judicial action. ": ["acquittal", "acquittance", "acreage", "acrid"]
    }, {
        "Release or discharge from indebtedness, obligation, or responsibility. ": ["acquittance", "acreage", "acrid", "acrimonious"]
    }, {
        "Quantity or extent of land, especially of cultivated land. ": ["acreage", "acrid", "acrimonious", "acrimony"]
    }, {
        "Harshly pungent or bitter. ": ["acrid", "acrimonious", "acrimony", "actionable"]
    }, {
        "Full of bitterness. ": ["acrimonious", "acrimony", "actionable", "actuality"]
    }, {
        "Sharpness or bitterness of speech or temper. ": ["acrimony", "actionable", "actuality", "actuary"]
    }, {
        "Affording cause for instituting an action, as trespass, slanderous words. ": ["actionable", "actuality", "actuary", "actuate"]
    }, {
        "Any reality. ": ["actuality", "actuary", "actuate", "acumen"]
    }, {
        "An officer, as of an insurance company, who calculates and states the risks and premiums. ": ["actuary", "actuate", "acumen", "acute"]
    }, {
        "To move or incite to action. ": ["actuate", "acumen", "acute", "adamant"]
    }, {
        "Quickness of intellectual insight, or discernment; keenness of discrimination. ": ["acumen", "acute", "adamant", "addendum"]
    }, {
        "Having fine and penetrating discernment. ": ["acute", "adamant", "addendum", "addle"]
    }, {
        "Any substance of exceeding hardness or impenetrability. ": ["adamant", "addendum", "addle", "adduce"]
    }, {
        "Something added, or to be added. ": ["addendum", "addle", "adduce", "adhere"]
    }, {
        "To make inefficient or worthless; muddle. ": ["addle", "adduce", "adhere", "adherence"]
    }, {
        "To bring forward or name for consideration. ": ["adduce", "adhere", "adherence", "adherent"]
    }, {
        "To stick fast or together. ": ["adhere", "adherence", "adherent", "adhesion"]
    }, {
        "Attachment. ": ["adherence", "adherent", "adhesion", "adieu"]
    }, {
        "Clinging or sticking fast. ": ["adherent", "adhesion", "adieu", "adjacency"]
    }, {
        "The state of being attached or joined. ": ["adhesion", "adieu", "adjacency", "adjacent"]
    }, {
        "Good-by; farewell. ": ["adieu", "adjacency", "adjacent", "adjudge"]
    }, {
        "The state of being adjacent. ": ["adjacency", "adjacent", "adjudge", "adjunct"]
    }, {
        "That which is near or bordering upon. ": ["adjacent", "adjudge", "adjunct", "adjuration"]
    }, {
        "To award or bestow by formal decision. ": ["adjudge", "adjunct", "adjuration", "adjutant"]
    }, {
        "Something joined to or connected with another thing, but holding a subordinate place. ": ["adjunct", "adjuration", "adjutant", "administrator"]
    }, {
        "A vehement appeal. ": ["adjuration", "adjutant", "administrator", "admissible"]
    }, {
        "Auxiliary. ": ["adjutant", "administrator", "admissible", "admittance"]
    }, {
        "One who manages affairs of any kind. ": ["administrator", "admissible", "admittance", "admonish"]
    }, {
        "Having the right or privilege of entry. ": ["admissible", "admittance", "admonish", "admonition"]
    }, {
        "Entrance, or the right or permission to enter. ": ["admittance", "admonish", "admonition", "ado"]
    }, {
        "To warn of a fault. ": ["admonish", "admonition", "ado", "adoration"]
    }, {
        "Gentle reproof. ": ["admonition", "ado", "adoration", "adroit"]
    }, {
        "unnecessary activity or ceremony. ": ["ado", "adoration", "adroit", "adulterant"]
    }, {
        "Profound devotion. ": ["adoration", "adroit", "adulterant", "adulterate"]
    }, {
        "Having skill in the use of the bodily or mental powers. ": ["adroit", "adulterant", "adulterate", "adumbrate"]
    }, {
        "An adulterating substance. ": ["adulterant", "adulterate", "adumbrate", "advent"]
    }, {
        "To make impure by the admixture of other or baser ingredients. ": ["adulterate", "adumbrate", "advent", "adverse"]
    }, {
        "To represent beforehand in outline or by emblem. ": ["adumbrate", "advent", "adverse", "adversity"]
    }, {
        "The coming or arrival, as of any important change, event, state, or personage. ": ["advent", "adverse", "adversity", "advert"]
    }, {
        "Opposing or opposed. ": ["adverse", "adversity", "advert", "advertiser"]
    }, {
        "Misfortune. ": ["adversity", "advert", "advertiser", "advisory"]
    }, {
        "To refer incidentally. ": ["advert", "advertiser", "advisory", "advocacy"]
    }, {
        "One who advertises, especially in newspapers. ": ["advertiser", "advisory", "advocacy", "advocate"]
    }, {
        "Not mandatory. ": ["advisory", "advocacy", "advocate", "aerial"]
    }, {
        "The act of pleading a cause. ": ["advocacy", "advocate", "aerial", "aeronaut"]
    }, {
        "One who pleads the cause of another, as in a legal or ecclesiastical court. ": ["advocate", "aerial", "aeronaut", "aeronautics"]
    }, {
        "Of, pertaining to, or like the air. ": ["aerial", "aeronaut", "aeronautics", "aerostat"]
    }, {
        "One who navigates the air, a balloonist. ": ["aeronaut", "aeronautics", "aerostat", "aerostatics"]
    }, {
        "the art or practice of flying aircraft ": ["aeronautics", "aerostat", "aerostatics", "affable"]
    }, {
        "A balloon or other apparatus floating in or sustained by the air. ": ["aerostat", "aerostatics", "affable", "affect"]
    }, {
        "The branch of pneumatics that treats of the equilibrium, pressure, and mechanical properties. ": ["aerostatics", "affable", "affect", "affectation"]
    }, {
        "Easy to approach. ": ["affable", "affect", "affectation", "affiliate"]
    }, {
        "To act upon ": ["affect", "affectation", "affiliate", "affirmative"]
    }, {
        "A studied or ostentatious pretense or attempt. ": ["affectation", "affiliate", "affirmative", "affix"]
    }, {
        "Some auxiliary person or thing. ": ["affiliate", "affirmative", "affix", "affluence"]
    }, {
        "Answering yes; to a question at issue. ": ["affirmative", "affix", "affluence", "affront"]
    }, {
        "To fasten. ": ["affix", "affluence", "affront", "afire"]
    }, {
        "A profuse or abundant supply of riches. ": ["affluence", "affront", "afire", "afoot"]
    }, {
        "An open insult or indignity. ": ["affront", "afire", "afoot", "aforesaid"]
    }, {
        "On fire, literally or figuratively. ": ["afire", "afoot", "aforesaid", "afresh"]
    }, {
        "In progress. ": ["afoot", "aforesaid", "afresh", "afterthought"]
    }, {
        "Said in a preceding part or before. ": ["aforesaid", "afresh", "afterthought", "agglomerate"]
    }, {
        "Once more, after rest or interval. ": ["afresh", "afterthought", "agglomerate", "aggrandize"]
    }, {
        "A thought that comes later than its appropriate or expected time. ": ["afterthought", "agglomerate", "aggrandize", "aggravate"]
    }, {
        "To pile or heap together. ": ["agglomerate", "aggrandize", "aggravate", "aggravation"]
    }, {
        "To cause to appear greatly. ": ["aggrandize", "aggravate", "aggravation", "aggregate"]
    }, {
        "To make heavier, worse, or more burdensome. ": ["aggravate", "aggravation", "aggregate", "aggress"]
    }, {
        "The fact of being made heavier or more heinous, as a crime , offense, misfortune, etc. ": ["aggravation", "aggregate", "aggress", "aggression"]
    }, {
        "The entire number, sum, mass, or quantity of something. ": ["aggregate", "aggress", "aggression", "aggrieve"]
    }, {
        "To make the first attack. ": ["aggress", "aggression", "aggrieve", "aghast"]
    }, {
        "An unprovoked attack. ": ["aggression", "aggrieve", "aghast", "agile"]
    }, {
        "To give grief or sorrow to. ": ["aggrieve", "aghast", "agile", "agitate"]
    }, {
        "Struck with terror and amazement. ": ["aghast", "agile", "agitate", "agrarian"]
    }, {
        "Able to move or act quickly, physically, or mentally. ": ["agile", "agitate", "agrarian", "aide-de-camp"]
    }, {
        "To move or excite (the feelings or thoughts). ": ["agitate", "agrarian", "aide-de-camp", "ailment"]
    }, {
        "Pertaining to land, especially agricultural land. ": ["agrarian", "aide-de-camp", "ailment", "airy"]
    }, {
        "An officer who receives and transmits the orders of the general. ": ["aide-de-camp", "ailment", "airy", "akin"]
    }, {
        "Slight sickness. ": ["ailment", "airy", "akin", "alabaster"]
    }, {
        "Delicate, ethereal. ": ["airy", "akin", "alabaster", "alacrity"]
    }, {
        "Of similar nature or qualities. ": ["akin", "alabaster", "alacrity", "albeit"]
    }, {
        "A white or delicately tinted fine-grained gypsum. ": ["alabaster", "alacrity", "albeit", "albino"]
    }, {
        "Cheerful willingness. ": ["alacrity", "albeit", "albino", "album"]
    }, {
        "Even though. ": ["albeit", "albino", "album", "alchemy"]
    }, {
        "A person with milky white skin and hair, and eyes with bright red pupil and usually pink iris. ": ["albino", "album", "alchemy", "alcohol"]
    }, {
        "A book whose leaves are so made to form paper frames for holding photographs or the like. ": ["album", "alchemy", "alcohol", "alcoholism"]
    }, {
        "Chemistry of the middle ages, characterized by the pursuit of changing base metals to gold. ": ["alchemy", "alcohol", "alcoholism", "alcove"]
    }, {
        "A volatile, inflammable, colorless liquid of a penetrating odor and burning taste. ": ["alcohol", "alcoholism", "alcove", "alder"]
    }, {
        "A condition resulting from the inordinate or persistent use of alcoholic beverages. ": ["alcoholism", "alcove", "alder", "alderman"]
    }, {
        "A covered recess connected with or at the side of a larger room. ": ["alcove", "alder", "alderman", "aldermanship"]
    }, {
        "Any shrub or small tree of the genus Alumnus, of the oak family. ": ["alder", "alderman", "aldermanship", "alias"]
    }, {
        "A member of a municipal legislative body, who usually exercises also certain judicial functions.": ["alderman", "aldermanship", "alias", "alien"]
    }, {
        "The dignity, condition, office, or term of office of an alderman. ": ["aldermanship", "alias", "alien", "alienable"]
    }, {
        "An assumed name. ": ["alias", "alien", "alienable", "alienate"]
    }, {
        "One who owes allegiance to a foreign government. ": ["alien", "alienable", "alienate", "alienation"]
    }, {
        "Capable of being aliened or alienated, as lands. ": ["alienable", "alienate", "alienation", "aliment"]
    }, {
        "To cause to turn away. ": ["alienate", "alienation", "aliment", "alkali"]
    }, {
        "Estrangement. ": ["alienation", "aliment", "alkali", "allay"]
    }, {
        "That which nourishes. ": ["aliment", "alkali", "allay", "allege"]
    }, {
        "Anything that will neutralize an acid, as lime, magnesia, etc. ": ["alkali", "allay", "allege", "allegory"]
    }, {
        "To calm the violence or reduce the intensity of; mitigate. ": ["allay", "allege", "allegory", "alleviate"]
    }, {
        "To assert to be true, especially in a formal manner, as in court. ": ["allege", "allegory", "alleviate", "alley"]
    }, {
        "The setting forth of a subject under the guise of another subject of aptly suggestive likeness. ": ["allegory", "alleviate", "alley", "alliance"]
    }, {
        "To make less burdensome or less hard to bear. ": ["alleviate", "alley", "alliance", "allot"]
    }, {
        "A narrow street, garden path, walk, or the like. ": ["alley", "alliance", "allot", "allotment"]
    }, {
        "Any combination or union for some common purpose. ": ["alliance", "allot", "allotment", "allude"]
    }, {
        "To assign a definite thing or part to a certain person. ": ["allot", "allotment", "allude", "allusion"]
    }, {
        "Portion. ": ["allotment", "allude", "allusion", "alluvion"]
    }, {
        "To refer incidentally, or by suggestion. ": ["allude", "allusion", "alluvion", "ally"]
    }, {
        "An indirect and incidental reference to something without definite mention of it. ": ["allusion", "alluvion", "ally", "almanac"]
    }, {
        "Flood. ": ["alluvion", "ally", "almanac", "aloof"]
    }, {
        "A person or thing connected with another, usually in some relation of helpfulness. ": ["ally", "almanac", "aloof", "altar"]
    }, {
        "A series of tables giving the days of the week together with certain astronomical information. ": ["almanac", "aloof", "altar", "alter"]
    }, {
        "Not in sympathy with or desiring to associate with others. ": ["aloof", "altar", "alter", "alteration"]
    }, {
        "Any raised place or structure on which sacrifices may be offered or incense burned. ": ["altar", "alter", "alteration", "altercate"]
    }, {
        "To make change in. ": ["alter", "alteration", "altercate", "alternate"]
    }, {
        "Change or modification. ": ["alteration", "altercate", "alternate", "alternative"]
    }, {
        "To contend angrily or zealously in words. ": ["altercate", "alternate", "alternative", "altitude"]
    }, {
        "One chosen to act in place of another, in case of the absence or incapacity of that other. ": ["alternate", "alternative", "altitude", "alto"]
    }, {
        "Something that may or must exist, be taken or chosen, or done instead of something else. ": ["alternative", "altitude", "alto", "altruism"]
    }, {
        "Vertical distance or elevation above any point or base-level, as the sea. ": ["altitude", "alto", "altruism", "altruist"]
    }, {
        "The lowest or deepest female voice or part. ": ["alto", "altruism", "altruist", "amalgam"]
    }, {
        "Benevolence to others on subordination to self-interest. ": ["altruism", "altruist", "amalgam", "amalgamate"]
    }, {
        "One who advocates or practices altruism. ": ["altruist", "amalgam", "amalgamate", "amateur"]
    }, {
        "An alloy or union of mercury with another metal. ": ["amalgam", "amalgamate", "amateur", "amatory"]
    }, {
        "To mix or blend together in a homogeneous body. ": ["amalgamate", "amateur", "amatory", "ambidextrous"]
    }, {
        "Practicing an art or occupation for the love of it, but not as a profession. ": ["amateur", "amatory", "ambidextrous", "ambiguous"]
    }, {
        "Designed to excite love. ": ["amatory", "ambidextrous", "ambiguous", "ambitious"]
    }, {
        "Having the ability of using both hands with equal skill or ease. ": ["ambidextrous", "ambiguous", "ambitious", "ambrosial"]
    }, {
        "Having a double meaning. ": ["ambiguous", "ambitious", "ambrosial", "ambulance"]
    }, {
        "Eagerly desirous and aspiring. ": ["ambitious", "ambrosial", "ambulance", "ambulate"]
    }, {
        "Divinely sweet, fragrant, or delicious. ": ["ambrosial", "ambulance", "ambulate", "ambush"]
    }, {
        "A vehicle fitted for conveying the sick and wounded. ": ["ambulance", "ambulate", "ambush", "ameliorate"]
    }, {
        "To walk about ": ["ambulate", "ambush", "ameliorate", "amenable"]
    }, {
        "The act or state of lying concealed for the purpose of surprising or attacking the enemy. ": ["ambush", "ameliorate", "amenable", "Americanism"]
    }, {
        "To relieve, as from pain or hardship ": ["ameliorate", "amenable", "Americanism", "amicable"]
    }, {
        "Willing and ready to submit. ": ["amenable", "Americanism", "amicable", "amity"]
    }, {
        "A peculiar sense in which an English word or phrase is used in the United States. ": ["Americanism", "amicable", "amity", "amorous"]
    }, {
        "Done in a friendly spirit. ": ["amicable", "amity", "amorous", "amorphous"]
    }, {
        "Friendship. ": ["amity", "amorous", "amorphous", "amour"]
    }, {
        "Having a propensity for falling in love. ": ["amorous", "amorphous", "amour", "ampere"]
    }, {
        "Without determinate shape. ": ["amorphous", "amour", "ampere", "ampersand"]
    }, {
        "A love-affair, especially one of an illicit nature. ": ["amour", "ampere", "ampersand", "amphibious"]
    }, {
        "The practical unit of electric-current strength. ": ["ampere", "ampersand", "amphibious", "amphitheater"]
    }, {
        "The character &; and. ": ["ampersand", "amphibious", "amphitheater", "amplitude"]
    }, {
        "Living both on land and in water. ": ["amphibious", "amphitheater", "amplitude", "amply"]
    }, {
        "An edifice of elliptical shape, constructed about a central open space or arena. ": ["amphitheater", "amplitude", "amply", "amputate"]
    }, {
        "Largeness. ": ["amplitude", "amply", "amputate", "amusement"]
    }, {
        "Sufficiently. ": ["amply", "amputate", "amusement", "anachronism"]
    }, {
        "To remove by cutting, as a limb or some portion of the body. ": ["amputate", "amusement", "anachronism", "anagram"]
    }, {
        "Diversion. ": ["amusement", "anachronism", "anagram", "analogous"]
    }, {
        "Anything occurring or existing out of its proper time. ": ["anachronism", "anagram", "analogous", "analogy"]
    }, {
        "The letters of a word or phrase so transposed as to make a different word or phrase. ": ["anagram", "analogous", "analogy", "analyst"]
    }, {
        "Corresponding (to some other) in certain respects, as in form, proportion, relations. ": ["analogous", "analogy", "analyst", "analyze"]
    }, {
        "Reasoning in which from certain and known relations or resemblance others are formed. ": ["analogy", "analyst", "analyze", "anarchy"]
    }, {
        "One who analyzes or makes use of the analytical method. ": ["analyst", "analyze", "anarchy", "anathema"]
    }, {
        "To examine minutely or critically. ": ["analyze", "anarchy", "anathema", "anatomy"]
    }, {
        "Absence or utter disregard of government. ": ["anarchy", "anathema", "anatomy", "ancestry"]
    }, {
        "Anything forbidden, as by social usage. ": ["anathema", "anatomy", "ancestry", "anecdote"]
    }, {
        "That branch of morphology which treats of the structure of organisms. ": ["anatomy", "ancestry", "anecdote", "anemia"]
    }, {
        "One's ancestors collectively. ": ["ancestry", "anecdote", "anemia", "anemic"]
    }, {
        "A brief account of some interesting event or incident. ": ["anecdote", "anemia", "anemic", "anemometer"]
    }, {
        "Deficiency of blood or red corpuscles. ": ["anemia", "anemic", "anemometer", "anesthetic"]
    }, {
        "Affected with anemia. ": ["anemic", "anemometer", "anesthetic", "anew"]
    }, {
        "An instrument for measuring the force or velocity of wind. ": ["anemometer", "anesthetic", "anew", "angelic"]
    }, {
        "Pertaining to or producing loss of sensation. ": ["anesthetic", "anew", "angelic", "Anglophobia"]
    }, {
        "Once more. ": ["anew", "angelic", "Anglophobia", "Anglo-Saxon"]
    }, {
        "Saintly. ": ["angelic", "Anglophobia", "Anglo-Saxon", "angular"]
    }, {
        "Hatred or dread of England or of what is English. ": ["Anglophobia", "Anglo-Saxon", "angular", "anhydrous"]
    }, {
        "The entire English race wherever found, as in Europe, the United States, or India. ": ["Anglo-Saxon", "angular", "anhydrous", "animadversion"]
    }, {
        "Sharp-cornered. ": ["angular", "anhydrous", "animadversion", "animadvert"]
    }, {
        "Withered. ": ["anhydrous", "animadversion", "animadvert", "animalcule"]
    }, {
        "The utterance of criticism or censure. ": ["animadversion", "animadvert", "animalcule", "animate"]
    }, {
        "To pass criticism or censure. ": ["animadvert", "animalcule", "animate", "animosity"]
    }, {
        "An animal of microscopic smallness. ": ["animalcule", "animate", "animosity", "annalist"]
    }, {
        "To make alive. ": ["animate", "animosity", "annalist", "annals"]
    }, {
        "Hatred. ": ["animosity", "annalist", "annals", "annex"]
    }, {
        "Historian. ": ["annalist", "annals", "annex", "annihilate"]
    }, {
        "A record of events in their chronological order, year by year. ": ["annals", "annex", "annihilate", "annotate"]
    }, {
        "To add or affix at the end. ": ["annex", "annihilate", "annotate", "annual"]
    }, {
        "To destroy absolutely. ": ["annihilate", "annotate", "annual", "annuity"]
    }, {
        "To make explanatory or critical notes on or upon. ": ["annotate", "annual", "annuity", "annunciation"]
    }, {
        "Occurring every year. ": ["annual", "annuity", "annunciation", "anode"]
    }, {
        "An annual allowance, payment, or income. ": ["annuity", "annunciation", "anode", "anonymous"]
    }, {
        "Proclamation. ": ["annunciation", "anode", "anonymous", "antagonism"]
    }, {
        "The point where or path by which a voltaic current enters an electrolyte or the like. ": ["anode", "anonymous", "antagonism", "Antarctic"]
    }, {
        "Of unknown authorship. ": ["anonymous", "antagonism", "Antarctic", "ante"]
    }, {
        "Mutual opposition or resistance of counteracting forces, principles, or persons. ": ["antagonism", "Antarctic", "ante", "antecede"]
    }, {
        "Pertaining to the south pole or the regions near it. ": ["Antarctic", "ante", "antecede", "antecedent"]
    }, {
        "In the game of poker, to put up a stake before the cards are dealt. ": ["ante", "antecede", "antecedent", "antechamber"]
    }, {
        "To precede. ": ["antecede", "antecedent", "antechamber", "antedate"]
    }, {
        "One who or that which precedes or goes before, as in time, place, rank, order, or causality. ": ["antecedent", "antechamber", "antedate", "antediluvian"]
    }, {
        "A waiting room for those who seek audience. ": ["antechamber", "antedate", "antediluvian", "antemeridian"]
    }, {
        "To assign or affix a date to earlier than the actual one. ": ["antedate", "antediluvian", "antemeridian", "antemundane"]
    }, {
        "Of or pertaining to the times, things, events before the great flood in the days of Noah.": ["antediluvian", "antemeridian", "antemundane", "antenatal"]
    }, {
        "Before noon. ": ["antemeridian", "antemundane", "antenatal", "anterior"]
    }, {
        "Pertaining to time before the world's creation. ": ["antemundane", "antenatal", "anterior", "anteroom"]
    }, {
        "Occurring or existing before birth. ": ["antenatal", "anterior", "anteroom", "anthology"]
    }, {
        "Prior. ": ["anterior", "anteroom", "anthology", "anthracite"]
    }, {
        "A room situated before and opening into another, usually larger. ": ["anteroom", "anthology", "anthracite", "anthropology"]
    }, {
        "A collection of extracts from the writings of various authors. ": ["anthology", "anthracite", "anthropology", "anthropomorphous"]
    }, {
        "Hard coal. ": ["anthracite", "anthropology", "anthropomorphous", "antic"]
    }, {
        "The science of man in general. ": ["anthropology", "anthropomorphous", "antic", "Antichrist"]
    }, {
        "Having or resembling human form. ": ["anthropomorphous", "antic", "Antichrist", "anticlimax"]
    }, {
        "A grotesque, ludicrous, or fantastic action. ": ["antic", "Antichrist", "anticlimax", "anticyclone"]
    }, {
        "Any opponent or enemy of Christ, whether a person or a power. ": ["Antichrist", "anticlimax", "anticyclone", "antidote"]
    }, {
        "A gradual or sudden decrease in the importance or impressiveness of what is said. ": ["anticlimax", "anticyclone", "antidote", "antilogy"]
    }, {
        "An atmospheric condition of high central pressure, with currents flowing outward. ": ["anticyclone", "antidote", "antilogy", "antipathize"]
    }, {
        "Anything that will counteract or remove the effects of poison, disease, or the like. ": ["antidote", "antilogy", "antipathize", "antiphon"]
    }, {
        "Inconsistency or contradiction in terms or ideas. ": ["antilogy", "antipathize", "antiphon", "antiphony"]
    }, {
        "To show or feel a feeling of antagonism, aversion, or dislike. ": ["antipathize", "antiphon", "antiphony", "antipodes"]
    }, {
        "A response or alteration of responses, generally musical. ": ["antiphon", "antiphony", "antipodes", "antiquary"]
    }, {
        "An anthem or other composition sung responsively. ": ["antiphony", "antipodes", "antiquary", "antiquate"]
    }, {
        "A place or region on the opposite side of the earth. ": ["antipodes", "antiquary", "antiquate", "antique"]
    }, {
        "One who collects and examines old things, as coins, books, medals, weapons, etc. ": ["antiquary", "antiquate", "antique", "antiseptic"]
    }, {
        "To make old or out of date. ": ["antiquate", "antique", "antiseptic", "antislavery"]
    }, {
        "Pertaining to ancient times. ": ["antique", "antiseptic", "antislavery", "antispasmodic"]
    }, {
        "Anything that destroys or restrains the growth of putrefactive micro-organisms. ": ["antiseptic", "antislavery", "antispasmodic", "antistrophe"]
    }, {
        "Opposed to human slavery. ": ["antislavery", "antispasmodic", "antistrophe", "antitoxin"]
    }, {
        "Tending to prevent or relieve non-inflammatory spasmodic affections. ": ["antispasmodic", "antistrophe", "antitoxin", "antonym"]
    }, {
        "The inversion of terms in successive classes, as in \"the home of joy and the joy of home\". ": ["antistrophe", "antitoxin", "antonym", "anxious"]
    }, {
        "A substance which neutralizes the poisonous products of micro-organisms. ": ["antitoxin", "antonym", "anxious", "apathy"]
    }, {
        "A word directly opposed to another in meaning. ": ["antonym", "anxious", "apathy", "aperture"]
    }, {
        "Distressed in mind respecting some uncertain matter. ": ["anxious", "apathy", "aperture", "apex"]
    }, {
        "Insensibility to emotion or passionate feeling. ": ["apathy", "aperture", "apex", "aphorism"]
    }, {
        "Hole. ": ["aperture", "apex", "aphorism", "apiary"]
    }, {
        "The highest point, as of a mountain. ": ["apex", "aphorism", "apiary", "apogee"]
    }, {
        "Proverb. ": ["aphorism", "apiary", "apogee", "apology"]
    }, {
        "A place where bees are kept. ": ["apiary", "apogee", "apology", "apostasy"]
    }, {
        "The climax. ": ["apogee", "apology", "apostasy", "apostate"]
    }, {
        "A disclaimer of intentional error or offense. ": ["apology", "apostasy", "apostate", "apostle"]
    }, {
        "A total departure from one's faith or religion. ": ["apostasy", "apostate", "apostle", "apothecary"]
    }, {
        "False. ": ["apostate", "apostle", "apothecary", "apotheosis"]
    }, {
        "Any messenger commissioned by or as by divine authority. ": ["apostle", "apothecary", "apotheosis", "appall"]
    }, {
        "One who keeps drugs for sale and puts up prescriptions. ": ["apothecary", "apotheosis", "appall", "apparent"]
    }, {
        "Deification. ": ["apotheosis", "appall", "apparent", "apparition"]
    }, {
        "To fill with dismay or horror. ": ["appall", "apparent", "apparition", "appease"]
    }, {
        "Easily understood. ": ["apparent", "apparition", "appease", "appellate"]
    }, {
        "Ghost. ": ["apparition", "appease", "appellate", "appellation"]
    }, {
        "To soothe by quieting anger or indignation. ": ["appease", "appellate", "appellation", "append"]
    }, {
        "Capable of being appealed to. ": ["appellate", "appellation", "append", "appertain"]
    }, {
        "The name or title by which a particular person, class, or thing is called. ": ["appellation", "append", "appertain", "apposite"]
    }, {
        "To add or attach, as something accessory, subordinate, or supplementary. ": ["append", "appertain", "apposite", "apposition"]
    }, {
        "To belong, as by right, fitness, association, classification, possession, or natural relation. ": ["appertain", "apposite", "apposition", "appraise"]
    }, {
        "Appropriate. ": ["apposite", "apposition", "appraise", "appreciable"]
    }, {
        "The act of placing side by side, together, or in contact. ": ["apposition", "appraise", "appreciable", "apprehend"]
    }, {
        "To estimate the money value of. ": ["appraise", "appreciable", "apprehend", "apprehensible"]
    }, {
        "Capable of being discerned by the senses or intellect. ": ["appreciable", "apprehend", "apprehensible", "approbation"]
    }, {
        "To make a prisoner of (a person) in the name of the law. ": ["apprehend", "apprehensible", "approbation", "appropriate"]
    }, {
        "Capable of being conceived. ": ["apprehensible", "approbation", "appropriate", "aqueduct"]
    }, {
        "Sanction. ": ["approbation", "appropriate", "aqueduct", "aqueous"]
    }, {
        "Suitable for the purpose and circumstances. ": ["appropriate", "aqueduct", "aqueous", "arbiter"]
    }, {
        "A water-conduit, particularly one for supplying a community from a distance. ": ["aqueduct", "aqueous", "arbiter", "arbitrary"]
    }, {
        "Of, pertaining to, or containing water. ": ["aqueous", "arbiter", "arbitrary", "arbitrate"]
    }, {
        "One chosen or appointed, by mutual consent of parties in dispute, to decide matters. ": ["arbiter", "arbitrary", "arbitrate", "arbor"]
    }, {
        "Fixed or done capriciously. ": ["arbitrary", "arbitrate", "arbor", "arboreal"]
    }, {
        "To act or give judgment as umpire. ": ["arbitrate", "arbor", "arboreal", "arborescent"]
    }, {
        "A tree. ": ["arbor", "arboreal", "arborescent", "arboretum"]
    }, {
        "Of or pertaining to a tree or trees. ": ["arboreal", "arborescent", "arboretum", "arboriculture"]
    }, {
        "Having the nature of a tree. ": ["arborescent", "arboretum", "arboriculture", "arcade"]
    }, {
        "A botanical garden or place devoted to the cultivation of trees or shrubs. ": ["arboretum", "arboriculture", "arcade", "archaic"]
    }, {
        "The cultivation of trees or shrubs. ": ["arboriculture", "arcade", "archaic", "archaism"]
    }, {
        "A vaulted passageway or street; a roofed passageway having shops, etc., opening from it. ": ["arcade", "archaic", "archaism", "archangel"]
    }, {
        "Antiquated ": ["archaic", "archaism", "archangel", "archbishop"]
    }, {
        "Obsolescence. ": ["archaism", "archangel", "archbishop", "archdeacon"]
    }, {
        "An angel of high rank. ": ["archangel", "archbishop", "archdeacon", "archaeology"]
    }, {
        "The chief of the bishops of an ecclesiastical province in the Greek, Roman, and Anglican church.": ["archbishop", "archdeacon", "archaeology", "archetype"]
    }, {
        "A high official administrator of the affairs of a diocese. ": ["archdeacon", "archaeology", "archetype", "archipelago"]
    }, {
        "The branch of anthropology concerned with the systematic investigation of the relics of man. ": ["archaeology", "archetype", "archipelago", "ardent"]
    }, {
        "A prototype. ": ["archetype", "archipelago", "ardent", "ardor"]
    }, {
        "Any large body of water studded with islands, or the islands collectively themselves. ": ["archipelago", "ardent", "ardor", "arid"]
    }, {
        "Burning with passion. ": ["ardent", "ardor", "arid", "aristocracy"]
    }, {
        "Intensity of passion or affection. ": ["ardor", "arid", "aristocracy", "aristocrat"]
    }, {
        "Very dry. ": ["arid", "aristocracy", "aristocrat", "armada"]
    }, {
        "A hereditary nobility ": ["aristocracy", "aristocrat", "armada", "armful"]
    }, {
        "A hereditary noble or one nearly connected with nobility. ": ["aristocrat", "armada", "armful", "armory"]
    }, {
        "A fleet of war-vessels. ": ["armada", "armful", "armory", "aroma"]
    }, {
        "As much as can be held in the arm or arms. ": ["armful", "armory", "aroma", "arraign"]
    }, {
        "An arsenal. ": ["armory", "aroma", "arraign", "arrange"]
    }, {
        "An agreeable odor. ": ["aroma", "arraign", "arrange", "arrangement"]
    }, {
        "To call into court, as a person indicted for crime, and demand whether he pleads guilty or not.": ["arraign", "arrange", "arrangement", "arrant"]
    }, {
        "To put in definite or proper order. ": ["arrange", "arrangement", "arrant", "arrear"]
    }, {
        "The act of putting in proper order, or the state of being put in order. ": ["arrangement", "arrant", "arrear", "arrival"]
    }, {
        "Notoriously bad. ": ["arrant", "arrear", "arrival", "arrogant"]
    }, {
        "Something overdue and unpaid. ": ["arrear", "arrival", "arrogant", "arrogate"]
    }, {
        "A coming to stopping-place or destination. ": ["arrival", "arrogant", "arrogate", "Artesian well"]
    }, {
        "Unduly or excessively proud, as of wealth, station, learning, etc. ": ["arrogant", "arrogate", "Artesian well", "artful"]
    }, {
        "To take, demand, or claim, especially presumptuously or without reasons or grounds. ": ["arrogate", "Artesian well", "artful", "Arthurian"]
    }, {
        "A very deep bored well. water rises due to underground pressure ": ["Artesian well", "artful", "Arthurian", "artifice"]
    }, {
        "Characterized by craft or cunning. ": ["artful", "Arthurian", "artifice", "artless"]
    }, {
        "Pertaining to King Arthur, the real or legendary hero of British poetic story. ": ["Arthurian", "artifice", "artless", "ascendant"]
    }, {
        "Trickery. ": ["artifice", "artless", "ascendant", "ascension"]
    }, {
        "Ingenuous. ": ["artless", "ascendant", "ascension", "ascent"]
    }, {
        "Dominant. ": ["ascendant", "ascension", "ascent", "ascetic"]
    }, {
        "The act of rising. ": ["ascension", "ascent", "ascetic", "ascribe"]
    }, {
        "A rising, soaring, or climbing. ": ["ascent", "ascetic", "ascribe", "asexual"]
    }, {
        "Given to severe self-denial and practicing excessive abstinence and devotion. ": ["ascetic", "ascribe", "asexual", "ashen"]
    }, {
        "To assign as a quality or attribute. ": ["ascribe", "asexual", "ashen", "askance"]
    }, {
        "Having no distinct sexual organs. ": ["asexual", "ashen", "askance", "asperity"]
    }, {
        "Pale. ": ["ashen", "askance", "asperity", "aspirant"]
    }, {
        "With a side or indirect glance or meaning. ": ["askance", "asperity", "aspirant", "aspiration"]
    }, {
        "Harshness or roughness of temper. ": ["asperity", "aspirant", "aspiration", "aspire"]
    }, {
        "One who seeks earnestly, as for advancement, honors, place. ": ["aspirant", "aspiration", "aspire", "assailant"]
    }, {
        "An earnest wish for that which is above one's present reach. ": ["aspiration", "aspire", "assailant", "assassin"]
    }, {
        "To have an earnest desire, wish, or longing, as for something high and good, not yet attained. ": ["aspire", "assailant", "assassin", "assassinate"]
    }, {
        "One who attacks. ": ["assailant", "assassin", "assassinate", "assassination"]
    }, {
        "One who kills, or tries to kill, treacherously or secretly. ": ["assassin", "assassinate", "assassination", "assay"]
    }, {
        "To kill, as by surprise or secret assault, especially the killing of some eminent person. ": ["assassinate", "assassination", "assay", "assent"]
    }, {
        "Murderer, as by secret assault or treachery. ": ["assassination", "assay", "assent", "assess"]
    }, {
        "The chemical analysis or testing of an alloy ore. ": ["assay", "assent", "assess", "assessor"]
    }, {
        "To express agreement with a statement or matter of opinion. ": ["assent", "assess", "assessor", "assets"]
    }, {
        "To determine the amount of (a tax or other sum to be paid). ": ["assess", "assessor", "assets", "assiduous"]
    }, {
        "An officer whose duty it is to assess taxes. ": ["assessor", "assets", "assiduous", "assignee"]
    }, {
        "pl. Property in general, regarded as applicable to the payment of debts. ": ["assets", "assiduous", "assignee", "assimilate"]
    }, {
        "Diligent. ": ["assiduous", "assignee", "assimilate", "assonance"]
    }, {
        "One who is appointed to act for another in the management of certain property and interests. ": ["assignee", "assimilate", "assonance", "assonant"]
    }, {
        "To adapt. ": ["assimilate", "assonance", "assonant", "assonate"]
    }, {
        "Resemblance or correspondence in sound. ": ["assonance", "assonant", "assonate", "assuage"]
    }, {
        "Having resemblance of sound. ": ["assonant", "assonate", "assuage", "astringent"]
    }, {
        "To accord in sound, especially vowel sound. ": ["assonate", "assuage", "astringent", "astute"]
    }, {
        "To cause to be less harsh, violent, or severe, as excitement, appetite, pain, or disease. ": ["assuage", "astringent", "astute", "atheism"]
    }, {
        "Harsh in disposition or character. ": ["astringent", "astute", "atheism", "athirst"]
    }, {
        "Keen in discernment. ": ["astute", "atheism", "athirst", "athwart"]
    }, {
        "The denial of the existence of God. ": ["atheism", "athirst", "athwart", "atomizer"]
    }, {
        "Wanting water. ": ["athirst", "athwart", "atomizer", "atone"]
    }, {
        "From side to side. ": ["athwart", "atomizer", "atone", "atonement"]
    }, {
        "An apparatus for reducing a liquid to a fine spray, as for disinfection, inhalation, etc. ": ["atomizer", "atone", "atonement", "atrocious"]
    }, {
        "To make amends for. ": ["atone", "atonement", "atrocious", "atrocity"]
    }, {
        "Amends, reparation, or expiation made from wrong or injury. ": ["atonement", "atrocious", "atrocity", "attache"]
    }, {
        "Outrageously or wantonly wicked, criminal, vile, or cruel. ": ["atrocious", "atrocity", "attache", "attest"]
    }, {
        "Great cruelty or reckless wickedness. ": ["atrocity", "attache", "attest", "attorney-general"]
    }, {
        "A subordinate member of a diplomatic embassy. ": ["attache", "attest", "attorney-general", "auburn"]
    }, {
        "To certify as accurate, genuine, or true. ": ["attest", "attorney-general", "auburn", "audacious"]
    }, {
        "The chief law-officer of a government. ": ["attorney-general", "auburn", "audacious", "audible"]
    }, {
        "Reddish-brown, said usually of the hair. ": ["auburn", "audacious", "audible", "audition"]
    }, {
        "Fearless. ": ["audacious", "audible", "audition", "auditory"]
    }, {
        "Loud enough to be heard. ": ["audible", "audition", "auditory", "augment"]
    }, {
        "The act or sensation of hearing. ": ["audition", "auditory", "augment", "augur"]
    }, {
        "Of or pertaining to hearing or the organs or sense of hearing. ": ["auditory", "augment", "augur", "Augustinian"]
    }, {
        "To make bigger. ": ["augment", "augur", "Augustinian", "aura"]
    }, {
        "To predict. ": ["augur", "Augustinian", "aura", "aural"]
    }, {
        "Pertaining to St. Augustine, his doctrines, or the religious orders called after him. ": ["Augustinian", "aura", "aural", "auricle"]
    }, {
        "Pervasive psychic influence supposed to emanate from persons ": ["aura", "aural", "auricle", "auricular"]
    }, {
        "Of or pertaining to the ear. ": ["aural", "auricle", "auricular", "auriferous"]
    }, {
        "One of the two chambers of the heart which receives the blood from the veins. ": ["auricle", "auricular", "auriferous", "aurora"]
    }, {
        "Of or pertaining to the ear, its auricle, or the sense of hearing. ": ["auricular", "auriferous", "aurora", "auspice"]
    }, {
        "Containing gold. ": ["auriferous", "aurora", "auspice", "austere"]
    }, {
        "A luminous phenomenon in the upper regions of the atmosphere. ": ["aurora", "auspice", "austere", "autarchy"]
    }, {
        "favoring, protecting, or propitious influence or guidance. ": ["auspice", "austere", "autarchy", "authentic"]
    }, {
        "Severely simple; unadorned. ": ["austere", "autarchy", "authentic", "authenticity"]
    }, {
        "Unrestricted power. ": ["autarchy", "authentic", "authenticity", "autobiography"]
    }, {
        "Of undisputed origin. ": ["authentic", "authenticity", "autobiography", "autocracy"]
    }, {
        "The state or quality of being genuine, or of the origin and authorship claimed. ": ["authenticity", "autobiography", "autocracy", "autocrat"]
    }, {
        "The story of one's life written by himself. ": ["autobiography", "autocracy", "autocrat", "automaton"]
    }, {
        "Absolute government. ": ["autocracy", "autocrat", "automaton", "autonomous"]
    }, {
        "Any one who claims or wields unrestricted or undisputed authority or influence. ": ["autocrat", "automaton", "autonomous", "autonomy"]
    }, {
        "Any living being whose actions are or appear to be involuntary or mechanical. ": ["automaton", "autonomous", "autonomy", "autopsy"]
    }, {
        "Self-governing. ": ["autonomous", "autonomy", "autopsy", "autumnal"]
    }, {
        "Self-government. ": ["autonomy", "autopsy", "autumnal", "auxiliary"]
    }, {
        "The examination of a dead body by dissection to ascertain the cause of death. ": ["autopsy", "autumnal", "auxiliary", "avalanche"]
    }, {
        "Of or pertaining to autumn. ": ["autumnal", "auxiliary", "avalanche", "avarice"]
    }, {
        "One who or that which aids or helps, especially when regarded as subsidiary or accessory. ": ["auxiliary", "avalanche", "avarice", "aver"]
    }, {
        "The fall or sliding of a mass of snow or ice down a mountain-slope, often bearing with it rock.": ["avalanche", "avarice", "aver", "averse"]
    }, {
        "Passion for getting and keeping riches. ": ["avarice", "aver", "averse", "aversion"]
    }, {
        "To assert as a fact. ": ["aver", "averse", "aversion", "avert"]
    }, {
        "Reluctant. ": ["averse", "aversion", "avert", "aviary"]
    }, {
        "A mental condition of fixed opposition to or dislike of some particular thing. ": ["aversion", "avert", "aviary", "avidity"]
    }, {
        "To turn away or aside. ": ["avert", "aviary", "avidity", "avocation"]
    }, {
        "A spacious cage or enclosure in which live birds are kept. ": ["aviary", "avidity", "avocation", "avow"]
    }, {
        "Greediness. ": ["avidity", "avocation", "avow", "awaken"]
    }, {
        "Diversion. ": ["avocation", "avow", "awaken", "awry"]
    }, {
        "To declare openly. ": ["avow", "awaken", "awry", "aye"]
    }, {
        "To arouse, as emotion, interest, or the like. ": ["awaken", "awry", "aye", "azalea"]
    }, {
        "Out of the proper form, direction, or position. ": ["awry", "aye", "azalea", "azure"]
    }, {
        "An expression of assent. ": ["aye", "azalea", "azure", "Baconian"]
    }, {
        "A flowering shrub. ": ["azalea", "azure", "Baconian", "bacterium"]
    }, {
        "The color of the sky. ": ["azure", "Baconian", "bacterium", "badger"]
    }, {
        "Of or pertaining to Lord Bacon or his system of philosophy. ": ["Baconian", "bacterium", "badger", "baffle"]
    }, {
        "A microbe. ": ["bacterium", "badger", "baffle", "bailiff"]
    }, {
        "To pester. ": ["badger", "baffle", "bailiff", "baize"]
    }, {
        "To foil or frustrate. ": ["baffle", "bailiff", "baize", "bale"]
    }, {
        "An officer of court having custody of prisoners under arraignment. ": ["bailiff", "baize", "bale", "baleful"]
    }, {
        "A single-colored napped woolen fabric used for table-covers, curtains, etc. ": ["baize", "bale", "baleful", "ballad"]
    }, {
        "A large package prepared for transportation or storage. ": ["bale", "baleful", "ballad", "balsam"]
    }, {
        "Malignant. ": ["baleful", "ballad", "balsam", "banal"]
    }, {
        "Any popular narrative poem, often with epic subject and usually in lyric form. ": ["ballad", "balsam", "banal", "barcarole"]
    }, {
        "A medical preparation, aromatic and oily, used for healing. ": ["balsam", "banal", "barcarole", "barograph"]
    }, {
        "Commonplace. ": ["banal", "barcarole", "barograph", "barometer"]
    }, {
        "A boat-song of Venetian gondoliers. ": ["barcarole", "barograph", "barometer", "barring"]
    }, {
        "An instrument that registers graphically and continuously the atmospheric pressure. ": ["barograph", "barometer", "barring", "baritone"]
    }, {
        "An instrument for indicating the atmospheric pressure per unit of surface. ": ["barometer", "barring", "baritone", "bask"]
    }, {
        "Apart from. ": ["barring", "baritone", "bask", "bass"]
    }, {
        "Having a register higher than bass and lower than tenor. ": ["baritone", "bask", "bass", "baste"]
    }, {
        "To make warm by genial heat. ": ["bask", "bass", "baste", "baton"]
    }, {
        "Low in tone or compass. ": ["bass", "baste", "baton", "battalion"]
    }, {
        "To cover with melted fat, gravy, while cooking. ": ["baste", "baton", "battalion", "batten"]
    }, {
        "An official staff borne either as a weapon or as an emblem of authority or privilege. ": ["baton", "battalion", "batten", "batter"]
    }, {
        "A body of infantry composed of two or more companies, forming a part of a regiment. ": ["battalion", "batten", "batter", "bauble"]
    }, {
        "A narrow strip of wood. ": ["batten", "batter", "bauble", "bawl"]
    }, {
        "A thick liquid mixture of two or more materials beaten together, to be used in cookery. ": ["batter", "bauble", "bawl", "beatify"]
    }, {
        "A trinket. ": ["bauble", "bawl", "beatify", "beatitude"]
    }, {
        "To proclaim by outcry. ": ["bawl", "beatify", "beatitude", "beau"]
    }, {
        "To make supremely happy. ": ["beatify", "beatitude", "beau", "becalm"]
    }, {
        "Any state of great happiness. ": ["beatitude", "beau", "becalm", "beck"]
    }, {
        "An escort or lover. ": ["beau", "becalm", "beck", "bedaub"]
    }, {
        "To make quiet. ": ["becalm", "beck", "bedaub", "bedeck"]
    }, {
        "To give a signal to, by nod or gesture. ": ["beck", "bedaub", "bedeck", "bedlam"]
    }, {
        "To smear over, as with something oily or sticky. ": ["bedaub", "bedeck", "bedlam", "befog"]
    }, {
        "To cover with ornament. ": ["bedeck", "bedlam", "befog", "befriend"]
    }, {
        "Madhouse. ": ["bedlam", "befog", "befriend", "beget"]
    }, {
        "To confuse. ": ["befog", "befriend", "beget", "begrudge"]
    }, {
        "To be a friend to, especially when in need. ": ["befriend", "beget", "begrudge", "belate"]
    }, {
        "To produce by sexual generation. ": ["beget", "begrudge", "belate", "belay"]
    }, {
        "To envy one of the possession of. ": ["begrudge", "belate", "belay", "belie"]
    }, {
        "To delay past the proper hour. ": ["belate", "belay", "belie", "believe"]
    }, {
        "To make fast, as a rope, by winding round a cleat. ": ["belay", "belie", "believe", "belittle"]
    }, {
        "To misrepresent. ": ["belie", "believe", "belittle", "belle"]
    }, {
        "To accept as true on the testimony or authority of others. ": ["believe", "belittle", "belle", "bellicose"]
    }, {
        "To disparage. ": ["belittle", "belle", "bellicose", "belligerent"]
    }, {
        "A woman who is a center of attraction because of her beauty, accomplishments, etc. ": ["belle", "bellicose", "belligerent", "bemoan"]
    }, {
        "Warlike. ": ["bellicose", "belligerent", "bemoan", "benediction"]
    }, {
        "Manifesting a warlike spirit. ": ["belligerent", "bemoan", "benediction", "benefactor"]
    }, {
        "To lament ": ["bemoan", "benediction", "benefactor", "benefice"]
    }, {
        "a solemn invocation of the divine blessing. ": ["benediction", "benefactor", "benefice", "beneficent"]
    }, {
        "A doer of kindly and charitable acts. ": ["benefactor", "benefice", "beneficent", "beneficial"]
    }, {
        "A church office endowed with funds or property for the maintenance of divine service. ": ["benefice", "beneficent", "beneficial", "beneficiary"]
    }, {
        "Characterized by charity and kindness. ": ["beneficent", "beneficial", "beneficiary", "benefit"]
    }, {
        "Helpful. ": ["beneficial", "beneficiary", "benefit", "benevolence"]
    }, {
        "One who is lawfully entitled to the profits and proceeds of an estate or property. ": ["beneficiary", "benefit", "benevolence", "benevolent"]
    }, {
        "Helpful result. ": ["benefit", "benevolence", "benevolent", "benign"]
    }, {
        "Any act of kindness or well-doing. ": ["benevolence", "benevolent", "benign", "benignant"]
    }, {
        "Loving others and actively desirous of their well-being. ": ["benevolent", "benign", "benignant", "benignity"]
    }, {
        "Good and kind of heart. ": ["benign", "benignant", "benignity", "benison"]
    }, {
        "Benevolent in feeling, character, or aspect. ": ["benignant", "benignity", "benison", "bequeath"]
    }, {
        "Kindness of feeling, disposition, or manner. ": ["benignity", "benison", "bequeath", "bereave"]
    }, {
        "Blessing. ": ["benison", "bequeath", "bereave", "berth"]
    }, {
        "To give by will. ": ["bequeath", "bereave", "berth", "beseech"]
    }, {
        "To make desolate with loneliness and grief. ": ["bereave", "berth", "beseech", "beset"]
    }, {
        "A bunk or bed in a vessel, sleeping-car, etc. ": ["berth", "beseech", "beset", "besmear"]
    }, {
        "To implore. ": ["beseech", "beset", "besmear", "bestial"]
    }, {
        "To attack on all sides. ": ["beset", "besmear", "bestial", "bestrew"]
    }, {
        "To smear over, as with any oily or sticky substance. ": ["besmear", "bestial", "bestrew", "bestride"]
    }, {
        "Animal. ": ["bestial", "bestrew", "bestride", "bethink"]
    }, {
        "To sprinkle or cover with things strewn. ": ["bestrew", "bestride", "bethink", "betide"]
    }, {
        "To get or sit upon astride, as a horse. ": ["bestride", "bethink", "betide", "betimes"]
    }, {
        "To remind oneself. ": ["bethink", "betide", "betimes", "betroth"]
    }, {
        "To happen to or befall. ": ["betide", "betimes", "betroth", "betrothal"]
    }, {
        "In good season or time. ": ["betimes", "betroth", "betrothal", "bevel"]
    }, {
        "To engage to marry. ": ["betroth", "betrothal", "bevel", "bewilder"]
    }, {
        "Engagement to marry. ": ["betrothal", "bevel", "bewilder", "bibliomania"]
    }, {
        "Any inclination of two surfaces other than 90 degrees. ": ["bevel", "bewilder", "bibliomania", "bibliography"]
    }, {
        "To confuse the perceptions or judgment of. ": ["bewilder", "bibliomania", "bibliography", "bibliophile"]
    }, {
        "The passion for collecting books. ": ["bibliomania", "bibliography", "bibliophile", "bibulous"]
    }, {
        "A list of the words of an author, or the literature bearing on a particular subject. ": ["bibliography", "bibliophile", "bibulous", "bide"]
    }, {
        "One who loves books. ": ["bibliophile", "bibulous", "bide", "biennial"]
    }, {
        "Fond of drinking. ": ["bibulous", "bide", "biennial", "bier"]
    }, {
        "To await. ": ["bide", "biennial", "bier", "bigamist"]
    }, {
        "A plant that produces leaves and roots the first year and flowers and fruit the second. ": ["biennial", "bier", "bigamist", "bigamy"]
    }, {
        "A horizontal framework with two handles at each end for carrying a corpse to the grave. ": ["bier", "bigamist", "bigamy", "bight"]
    }, {
        "One who has two spouses at the same time. ": ["bigamist", "bigamy", "bight", "bilateral"]
    }, {
        "The crime of marrying any other person while having a legal spouse living. ": ["bigamy", "bight", "bilateral", "bilingual"]
    }, {
        "A slightly receding bay between headlands, formed by a long curve of a coast-line. ": ["bight", "bilateral", "bilingual", "biograph"]
    }, {
        "Two-sided. ": ["bilateral", "bilingual", "biograph", "biography"]
    }, {
        "Speaking two languages. ": ["bilingual", "biograph", "biography", "biology"]
    }, {
        "A bibliographical sketch or notice. ": ["biograph", "biography", "biology", "biped"]
    }, {
        "A written account of one's life, actions, and character. ": ["biography", "biology", "biped", "birthright"]
    }, {
        "The science of life or living organisms. ": ["biology", "biped", "birthright", "bitterness"]
    }, {
        "An animal having two feet. ": ["biped", "birthright", "bitterness", "blase"]
    }, {
        "A privilege or possession into which one is born. ": ["birthright", "bitterness", "blase", "blaspheme"]
    }, {
        "Acridity, as to the taste. ": ["bitterness", "blase", "blaspheme", "blatant"]
    }, {
        "Sated with pleasure. ": ["blase", "blaspheme", "blatant", "blaze"]
    }, {
        "To indulge in profane oaths. ": ["blaspheme", "blatant", "blaze", "blazon"]
    }, {
        "Noisily or offensively loud or clamorous. ": ["blatant", "blaze", "blazon", "bleak"]
    }, {
        "A vivid glowing flame. ": ["blaze", "blazon", "bleak", "blemish"]
    }, {
        "To make widely or generally known. ": ["blazon", "bleak", "blemish", "blithe"]
    }, {
        "Desolate. ": ["bleak", "blemish", "blithe", "blithesome"]
    }, {
        "A mark that mars beauty. ": ["blemish", "blithe", "blithesome", "blockade"]
    }, {
        "Joyous. ": ["blithe", "blithesome", "blockade", "boatswain"]
    }, {
        "Cheerful. ": ["blithesome", "blockade", "boatswain", "bodice"]
    }, {
        "The shutting up of a town, a frontier, or a line of coast by hostile forces. ": ["blockade", "boatswain", "bodice", "bodily"]
    }, {
        "A subordinate officer of a vessel, who has general charge of the rigging, anchors, etc. ": ["boatswain", "bodice", "bodily", "boisterous"]
    }, {
        "A women's ornamental corset-shaped laced waist. ": ["bodice", "bodily", "boisterous", "bole"]
    }, {
        "Corporeal. ": ["bodily", "boisterous", "bole", "bolero"]
    }, {
        "Unchecked merriment or animal spirits. ": ["boisterous", "bole", "bolero", "boll"]
    }, {
        "The trunk or body of a tree. ": ["bole", "bolero", "boll", "bolster"]
    }, {
        "A Spanish dance, illustrative of the passion of love, accompanied by caste nets and singing. ": ["bolero", "boll", "bolster", "bomb"]
    }, {
        "A round pod or seed-capsule, as a flax or cotton. ": ["boll", "bolster", "bomb", "bombard"]
    }, {
        "To support, as something wrong. ": ["bolster", "bomb", "bombard", "bombardier"]
    }, {
        "A hollow projectile containing an explosive material. ": ["bomb", "bombard", "bombardier", "bombast"]
    }, {
        "To assail with any missile or with abusive speech. ": ["bombard", "bombardier", "bombast", "boorish"]
    }, {
        "A person who has charge of mortars, bombs, and shells. ": ["bombardier", "bombast", "boorish", "bore"]
    }, {
        "Inflated or extravagant language, especially on unimportant subjects. ": ["bombast", "boorish", "bore", "borough"]
    }, {
        "Rude. ": ["boorish", "bore", "borough", "bosom"]
    }, {
        "To weary by tediousness or dullness. ": ["bore", "borough", "bosom", "botanical"]
    }, {
        "An incorporated village or town. ": ["borough", "bosom", "botanical", "botanize"]
    }, {
        "The breast or the upper front of the thorax of a human being, especially of a woman. ": ["bosom", "botanical", "botanize", "botany"]
    }, {
        "Connected with the study or cultivation of plants. ": ["botanical", "botanize", "botany", "bountiful"]
    }, {
        "To study plant-life. ": ["botanize", "botany", "bountiful", "Bowdlerize"]
    }, {
        "The science that treats of plants. ": ["botany", "bountiful", "Bowdlerize", "bowler"]
    }, {
        "Showing abundance. ": ["bountiful", "Bowdlerize", "bowler", "boycott"]
    }, {
        "To expurgate in editing (a literary composition) by omitting words or passages. ": ["Bowdlerize", "bowler", "boycott", "brae"]
    }, {
        "In cricket, the player who delivers the ball. ": ["bowler", "boycott", "brae", "braggart"]
    }, {
        "To place the products or merchandise of under a ban. ": ["boycott", "brae", "braggart", "brandish"]
    }, {
        "Hillside. ": ["brae", "braggart", "brandish", "bravado"]
    }, {
        "A vain boaster. ": ["braggart", "brandish", "bravado", "bravo"]
    }, {
        "To wave, shake, or flourish triumphantly or defiantly, as a sword or spear. ": ["brandish", "bravado", "bravo", "bray"]
    }, {
        "An aggressive display of boldness. ": ["bravado", "bravo", "bray", "braze"]
    }, {
        "Well done. ": ["bravo", "bray", "braze", "brazier"]
    }, {
        "A loud harsh sound, as the cry of an ass or the blast of a horn. ": ["bray", "braze", "brazier", "breach"]
    }, {
        "To make of or ornament with brass. ": ["braze", "brazier", "breach", "breaker"]
    }, {
        "An open pan or basin for holding live coals. ": ["brazier", "breach", "breaker", "breech"]
    }, {
        "The violation of official duty, lawful right, or a legal obligation. ": ["breach", "breaker", "breech", "brethren"]
    }, {
        "One who trains horses, dogs, etc. ": ["breaker", "breech", "brethren", "brevity"]
    }, {
        "The buttocks. ": ["breech", "brethren", "brevity", "bric-a-brac"]
    }, {
        "pl. Members of a brotherhood, gild, profession, association, or the like. ": ["brethren", "brevity", "bric-a-brac", "bridle"]
    }, {
        "Shortness of duration. ": ["brevity", "bric-a-brac", "bridle", "brigade"]
    }, {
        "Objects of curiosity or for decoration. ": ["bric-a-brac", "bridle", "brigade", "brigadier"]
    }, {
        "The head-harness of a horse consisting of a head-stall, a bit, and the reins. ": ["bridle", "brigade", "brigadier", "brigand"]
    }, {
        "A body of troops consisting of two or more regiments. ": ["brigade", "brigadier", "brigand", "brimstone"]
    }, {
        "General officer who commands a brigade, ranking between a colonel and a major-general. ": ["brigadier", "brigand", "brimstone", "brine"]
    }, {
        "One who lives by robbery and plunder. ": ["brigand", "brimstone", "brine", "bristle"]
    }, {
        "Sulfur. ": ["brimstone", "brine", "bristle", "Britannia"]
    }, {
        "Water saturated with salt. ": ["brine", "bristle", "Britannia", "Briticism"]
    }, {
        "One of the coarse, stiff hairs of swine: used in brush-making, etc. ": ["bristle", "Britannia", "Briticism", "brittle"]
    }, {
        "The United Kingdom of Great Britain. ": ["Britannia", "Briticism", "brittle", "broach"]
    }, {
        "A word, idiom, or phrase characteristic of Great Britain or the British. ": ["Briticism", "brittle", "broach", "broadcast"]
    }, {
        "Fragile. ": ["brittle", "broach", "broadcast", "brogan"]
    }, {
        "To mention, for the first time. ": ["broach", "broadcast", "brogan", "brogue"]
    }, {
        "Disseminated far and wide. ": ["broadcast", "brogan", "brogue", "brokerage"]
    }, {
        "A coarse, heavy shoe. ": ["brogan", "brogue", "brokerage", "bromine"]
    }, {
        "Any dialectic pronunciation of English, especially that of the Irish people. ": ["brogue", "brokerage", "bromine", "bronchitis"]
    }, {
        "The business of making sales and purchases for a commission; a broker. ": ["brokerage", "bromine", "bronchitis", "bronchus"]
    }, {
        "A dark reddish-brown, non-metallic liquid element with a suffocating odor. ": ["bromine", "bronchitis", "bronchus", "brooch"]
    }, {
        "Inflammation of the bronchial tubes. ": ["bronchitis", "bronchus", "brooch", "brotherhood"]
    }, {
        "Either of the two subdivisions of the trachea conveying air into the lungs. ": ["bronchus", "brooch", "brotherhood", "browbeat"]
    }, {
        "An article of jewelry fastened by a hinged pin and hook on the underside. ": ["brooch", "brotherhood", "browbeat", "brusque"]
    }, {
        "Spiritual or social fellowship or solidarity. ": ["brotherhood", "browbeat", "brusque", "buffoon"]
    }, {
        "To overwhelm, or attempt to do so, by stern, haughty, or rude address or manner. ": ["browbeat", "brusque", "buffoon", "buffoonery"]
    }, {
        "Somewhat rough or rude in manner or speech. ": ["brusque", "buffoon", "buffoonery", "bulbous"]
    }, {
        "A clown. ": ["buffoon", "buffoonery", "bulbous", "bullock"]
    }, {
        "Low drollery, coarse jokes, etc. ": ["buffoonery", "bulbous", "bullock", "bulrush"]
    }, {
        "Of, or pertaining to, or like a bulb. ": ["bulbous", "bullock", "bulrush", "bulwark"]
    }, {
        "An ox. ": ["bullock", "bulrush", "bulwark", "bumper"]
    }, {
        "Any one of various tall rush-like plants growing in damp ground or water. ": ["bulrush", "bulwark", "bumper", "bumptious"]
    }, {
        "Anything that gives security or defense. ": ["bulwark", "bumper", "bumptious", "bungle"]
    }, {
        "A cup or glass filled to the brim, especially one to be drunk as a toast or health. ": ["bumper", "bumptious", "bungle", "buoyancy"]
    }, {
        "Full of offensive and aggressive self-conceit. ": ["bumptious", "bungle", "buoyancy", "buoyant"]
    }, {
        "To execute clumsily. ": ["bungle", "buoyancy", "buoyant", "bureau"]
    }, {
        "Power or tendency to float on or in a liquid or gas. ": ["buoyancy", "buoyant", "bureau", "bureaucracy"]
    }, {
        "Having the power or tendency to float or keep afloat. ": ["buoyant", "bureau", "bureaucracy", "burgess"]
    }, {
        "A chest of drawers for clothing, etc. ": ["bureau", "bureaucracy", "burgess", "burgher"]
    }, {
        "Government by departments of men transacting particular branches of public business. ": ["bureaucracy", "burgess", "burgher", "burnish"]
    }, {
        "In colonial times, a member of the lower house of the legislature of Maryland or Virginia. ": ["burgess", "burgher", "burnish", "bursar"]
    }, {
        "An inhabitant, citizen or freeman of a borough burgh, or corporate town. ": ["burgher", "burnish", "bursar", "bustle"]
    }, {
        "To make brilliant or shining. ": ["burnish", "bursar", "bustle", "butt"]
    }, {
        "A treasurer. ": ["bursar", "bustle", "butt", "butte"]
    }, {
        "To hurry. ": ["bustle", "butt", "butte", "buttress"]
    }, {
        "To strike with or as with the head, or horns. ": ["butt", "butte", "buttress", "by-law"]
    }, {
        "A conspicuous hill, low mountain, or natural turret, generally isolated. ": ["butte", "buttress", "by-law", "cabal"]
    }, {
        "Any support or prop. ": ["buttress", "by-law", "cabal", "cabalism"]
    }, {
        "A rule or law adopted by an association, a corporation, or the like. ": ["by-law", "cabal", "cabalism", "cabinet"]
    }, {
        "A number of persons secretly united for effecting by intrigue some private purpose. ": ["cabal", "cabalism", "cabinet", "cacophony"]
    }, {
        "Superstitious devotion to one's religion. ": ["cabalism", "cabinet", "cacophony", "cadaverous"]
    }, {
        "The body of men constituting the official advisors of the executive head of a nation. ": ["cabinet", "cacophony", "cadaverous", "cadence"]
    }, {
        "A disagreeable, harsh, or discordant sound or combination of sounds or tones. ": ["cacophony", "cadaverous", "cadence", "cadenza"]
    }, {
        "Resembling a corpse. ": ["cadaverous", "cadence", "cadenza", "caitiff"]
    }, {
        "Rhythmical or measured flow or movement, as in poetry or the time and pace of marching troops. ": ["cadence", "cadenza", "caitiff", "cajole"]
    }, {
        "An embellishment or flourish, prepared or improvised, for a solo voice or instrument. ": ["cadenza", "caitiff", "cajole", "cajolery"]
    }, {
        "Cowardly. ": ["caitiff", "cajole", "cajolery", "calculable"]
    }, {
        "To impose on or dupe by flattering speech. ": ["cajole", "cajolery", "calculable", "calculus"]
    }, {
        "Delusive speech. ": ["cajolery", "calculable", "calculus", "callosity"]
    }, {
        "That may be estimated by reckoning. ": ["calculable", "calculus", "callosity", "callow"]
    }, {
        "A concretion formed in various parts of the body resembling a pebble in hardness. ": ["calculus", "callosity", "callow", "calorie"]
    }, {
        "The state of being hard and insensible. ": ["callosity", "callow", "calorie", "calumny"]
    }, {
        "Without experience of the world. ": ["callow", "calorie", "calumny", "Calvary"]
    }, {
        "Amount of heat needed to raise the temperature of 1 kilogram of water 1 degree centigrade. ": ["calorie", "calumny", "Calvary", "Calvinism"]
    }, {
        "Slander. ": ["calumny", "Calvary", "Calvinism", "Calvinize"]
    }, {
        "The place where Christ was crucified. ": ["Calvary", "Calvinism", "Calvinize", "came"]
    }, {
        "The system of doctrine taught by John Calvin. ": ["Calvinism", "Calvinize", "came", "cameo"]
    }, {
        "To teach or imbue with the doctrines of Calvinism. ": ["Calvinize", "came", "cameo", "campaign"]
    }, {
        "A leaden sash-bar or grooved strip for fastening panes in stained-glass windows. ": ["came", "cameo", "campaign", "Canaanite"]
    }, {
        "Any small engraved or carved work in relief. ": ["cameo", "campaign", "Canaanite", "canary"]
    }, {
        "A complete series of connected military operations. ": ["campaign", "Canaanite", "canary", "candid"]
    }, {
        "A member of one of the three tribes that dwelt in the land of Canaan, or western Palestine. ": ["Canaanite", "canary", "candid", "candor"]
    }, {
        "Of a bright but delicate yellow. ": ["canary", "candid", "candor", "canine"]
    }, {
        "Straightforward. ": ["candid", "candor", "canine", "canon"]
    }, {
        "The quality of frankness or outspokenness. ": ["candor", "canine", "canon", "cant"]
    }, {
        "Characteristic of a dog. ": ["canine", "canon", "cant", "cantata"]
    }, {
        "Any rule or law. ": ["canon", "cant", "cantata", "canto"]
    }, {
        "To talk in a singsong, preaching tone with affected solemnity. ": ["cant", "cantata", "canto", "cantonment"]
    }, {
        "A choral composition. ": ["cantata", "canto", "cantonment", "capacious"]
    }, {
        "One of the divisions of an extended poem. ": ["canto", "cantonment", "capacious", "capillary"]
    }, {
        "The part of the town or district in which the troops are quartered. ": ["cantonment", "capacious", "capillary", "capitulate"]
    }, {
        "Roomy. ": ["capacious", "capillary", "capitulate", "caprice"]
    }, {
        "A minute vessel having walls composed of a single layer of cells. ": ["capillary", "capitulate", "caprice", "caption"]
    }, {
        "To surrender or stipulate terms. ": ["capitulate", "caprice", "caption", "captious"]
    }, {
        "A whim. ": ["caprice", "caption", "captious", "captivate"]
    }, {
        "A heading, as of a chapter, section, document, etc. ": ["caption", "captious", "captivate", "carcass"]
    }, {
        "Hypercritical. ": ["captious", "captivate", "carcass", "cardiac"]
    }, {
        "To fascinate, as by excellence. eloquence, or beauty. ": ["captivate", "carcass", "cardiac", "cardinal"]
    }, {
        "The dead body of an animal. ": ["carcass", "cardiac", "cardinal", "caret"]
    }, {
        "Pertaining to the heart. ": ["cardiac", "cardinal", "caret", "caricature"]
    }, {
        "Of prime or special importance. ": ["cardinal", "caret", "caricature", "carnage"]
    }, {
        "A sign (^) placed below a line, indicating where omitted words, etc., should be inserted. ": ["caret", "caricature", "carnage", "carnal"]
    }, {
        "a picture or description in which natural characteristics are exaggerated or distorted. ": ["caricature", "carnage", "carnal", "carnivorous"]
    }, {
        "Massacre. ": ["carnage", "carnal", "carnivorous", "carouse"]
    }, {
        "Sensual. ": ["carnal", "carnivorous", "carouse", "carrion"]
    }, {
        "Eating or living on flesh. ": ["carnivorous", "carouse", "carrion", "cartilage"]
    }, {
        "To drink deeply and in boisterous or jovial manner. ": ["carouse", "carrion", "cartilage", "cartridge"]
    }, {
        "Dead and putrefying flesh. ": ["carrion", "cartilage", "cartridge", "caste"]
    }, {
        "An elastic animal tissue of firm consistence. ": ["cartilage", "cartridge", "caste", "castigate"]
    }, {
        "A charge for a firearm, or for blasting. ": ["cartridge", "caste", "castigate", "casual"]
    }, {
        "The division of society on artificial grounds. ": ["caste", "castigate", "casual", "casualty"]
    }, {
        "To punish. ": ["castigate", "casual", "casualty", "cataclysm"]
    }, {
        "Accidental, by chance. ": ["casual", "casualty", "cataclysm", "cataract"]
    }, {
        "A fatal or serious accident or disaster. ": ["casualty", "cataclysm", "cataract", "catastrophe"]
    }, {
        "Any overwhelming flood of water. ": ["cataclysm", "cataract", "catastrophe", "cathode"]
    }, {
        "Opacity of the lens of the eye resulting in complete or partial blindness. ": ["cataract", "catastrophe", "cathode", "Catholicism"]
    }, {
        "Any great and sudden misfortune or calamity. ": ["catastrophe", "cathode", "Catholicism", "catholicity"]
    }, {
        "The negative pole or electrode of a galvanic battery. ": ["cathode", "Catholicism", "catholicity", "cat-o-nine-tails"]
    }, {
        "The system, doctrine, and practice of the Roman Catholic Church. ": ["Catholicism", "catholicity", "cat-o-nine-tails", "caucus"]
    }, {
        "Universal prevalence or acceptance. ": ["catholicity", "cat-o-nine-tails", "caucus", "causal"]
    }, {
        "An instrument consisting of nine pieces of cord, formerly used for flogging in the army and navy. ": ["cat-o-nine-tails", "caucus", "causal", "caustic"]
    }, {
        "A private meeting of members of a political party to select candidates. ": ["caucus", "causal", "caustic", "cauterize"]
    }, {
        "Indicating or expressing a cause. ": ["causal", "caustic", "cauterize", "cede"]
    }, {
        "Sarcastic and severe. ": ["caustic", "cauterize", "cede", "censor"]
    }, {
        "To burn or sear as with a heated iron. ": ["cauterize", "cede", "censor", "censorious"]
    }, {
        "To pass title to. ": ["cede", "censor", "censorious", "census"]
    }, {
        "An official examiner of manuscripts empowered to prohibit their publication. ": ["censor", "censorious", "census", "centenary"]
    }, {
        "Judging severely or harshly. ": ["censorious", "census", "centenary", "centiliter"]
    }, {
        "An official numbering of the people of a country or district. ": ["census", "centenary", "centiliter", "centimeter"]
    }, {
        "Pertaining to a hundred years or a period of a hundred years. ": ["centenary", "centiliter", "centimeter", "centurion"]
    }, {
        "A hundredth of a liter. ": ["centiliter", "centimeter", "centurion", "cereal"]
    }, {
        "A length of one hundredth of a meter. ": ["centimeter", "centurion", "cereal", "ceremonial"]
    }, {
        "A captain of a company of one hundred infantry in the ancient Roman army. ": ["centurion", "cereal", "ceremonial", "ceremonious"]
    }, {
        "Pertaining to edible grain or farinaceous seeds. ": ["cereal", "ceremonial", "ceremonious", "cessation"]
    }, {
        "Characterized by outward form or ceremony. ": ["ceremonial", "ceremonious", "cessation", "cession"]
    }, {
        "Observant of ritual. ": ["ceremonious", "cessation", "cession", "chagrin"]
    }, {
        "Discontinuance, as of action or motion. ": ["cessation", "cession", "chagrin", "chameleon"]
    }, {
        "Surrender, as of possessions or rights. ": ["cession", "chagrin", "chameleon", "chancery"]
    }, {
        "Keen vexation, annoyance, or mortification, as at one's failures or errors. ": ["chagrin", "chameleon", "chancery", "chaos"]
    }, {
        "Changeable in appearance. ": ["chameleon", "chancery", "chaos", "characteristic"]
    }, {
        "A court of equity, as distinguished from a common-law court. ": ["chancery", "chaos", "characteristic", "characterize"]
    }, {
        "Any condition of which the elements or parts are in utter disorder and confusion. ": ["chaos", "characteristic", "characterize", "charlatan"]
    }, {
        "A distinctive feature. ": ["characteristic", "characterize", "charlatan", "chasm"]
    }, {
        "To describe by distinctive marks or peculiarities. ": ["characterize", "charlatan", "chasm", "chasten"]
    }, {
        "A quack. ": ["charlatan", "chasm", "chasten", "chastise"]
    }, {
        "A yawning hollow, as in the earth's surface. ": ["chasm", "chasten", "chastise", "chastity"]
    }, {
        "To purify by affliction. ": ["chasten", "chastise", "chastity", "chateau"]
    }, {
        "To subject to punitive measures. ": ["chastise", "chastity", "chateau", "chattel"]
    }, {
        "Sexual or moral purity. ": ["chastity", "chateau", "chattel", "check"]
    }, {
        "A castle or manor-house. ": ["chateau", "chattel", "check", "chiffon"]
    }, {
        "Any article of personal property. ": ["chattel", "check", "chiffon", "chivalry"]
    }, {
        "To hold back. ": ["check", "chiffon", "chivalry", "cholera"]
    }, {
        "A very thin gauze used for trimmings, evening dress, etc. ": ["chiffon", "chivalry", "cholera", "choleric"]
    }, {
        "The knightly system of feudal times with its code, usages and practices. ": ["chivalry", "cholera", "choleric", "choral"]
    }, {
        "An acute epidemic disease. ": ["cholera", "choleric", "choral", "Christ"]
    }, {
        "Easily provoked to anger. ": ["choleric", "choral", "Christ", "christen"]
    }, {
        "Pertaining to, intended for, or performed by a chorus or choir. ": ["choral", "Christ", "christen", "Christendom"]
    }, {
        "A title of Jesus ": ["Christ", "christen", "Christendom", "chromatic"]
    }, {
        "To name in baptism. ": ["christen", "Christendom", "chromatic", "chronology"]
    }, {
        "That part of the world where Christianity is generally professed. ": ["Christendom", "chromatic", "chronology", "chronometer"]
    }, {
        "Belonging, relating to, or abounding in color. ": ["chromatic", "chronology", "chronometer", "cipher"]
    }, {
        "The science that treats of computation of time or of investigation and arrangement of events. ": ["chronology", "chronometer", "cipher", "circulate"]
    }, {
        "A portable timekeeper of the highest attainable precision. ": ["chronometer", "cipher", "circulate", "circumference"]
    }, {
        "To calculate arithmetically. (also a noun meaning zero or nothing) ": ["cipher", "circulate", "circumference", "circumlocution"]
    }, {
        "To disseminate. ": ["circulate", "circumference", "circumlocution", "circumnavigate"]
    }, {
        "The boundary-line of a circle. ": ["circumference", "circumlocution", "circumnavigate", "circumscribe"]
    }, {
        "Indirect or roundabout expression. ": ["circumlocution", "circumnavigate", "circumscribe", "circumspect"]
    }, {
        "To sail quite around. ": ["circumnavigate", "circumscribe", "circumspect", "citadel"]
    }, {
        "To confine within bounds. ": ["circumscribe", "circumspect", "citadel", "cite"]
    }, {
        "Showing watchfulness, caution, or careful consideration. ": ["circumspect", "citadel", "cite", "claimant"]
    }, {
        "Any strong fortress. ": ["citadel", "cite", "claimant", "clairvoyance"]
    }, {
        "To refer to specifically. ": ["cite", "claimant", "clairvoyance", "clamorous"]
    }, {
        "One who makes a claim or demand, as of right. ": ["claimant", "clairvoyance", "clamorous", "clan"]
    }, {
        "Intuitive sagacity or perception. ": ["clairvoyance", "clamorous", "clan", "clandestine"]
    }, {
        "Urgent in complaint or demand. ": ["clamorous", "clan", "clandestine", "clangor"]
    }, {
        "A tribe. ": ["clan", "clandestine", "clangor", "clarify"]
    }, {
        "Surreptitious. ": ["clandestine", "clangor", "clarify", "clarion"]
    }, {
        "Clanking or a ringing, as of arms, chains, or bells; clamor. ": ["clangor", "clarify", "clarion", "classify"]
    }, {
        "To render intelligible. ": ["clarify", "clarion", "classify", "clearance"]
    }, {
        "A small shrill trumpet or bugle. ": ["clarion", "classify", "clearance", "clemency"]
    }, {
        "To arrange in a class or classes on the basis of observed resemblance’s and differences. ": ["classify", "clearance", "clemency", "clement"]
    }, {
        "A certificate from the proper authorities that a vessel has complied with the law and may sail. ": ["clearance", "clemency", "clement", "close-hauled"]
    }, {
        "Mercy. ": ["clemency", "clement", "close-hauled", "clothier"]
    }, {
        "Compassionate. ": ["clement", "close-hauled", "clothier", "clumsy"]
    }, {
        "Having the sails set for sailing as close to the wind as possible. ": ["close-hauled", "clothier", "clumsy", "coagulate"]
    }, {
        "One who makes or sells cloth or clothing. ": ["clothier", "clumsy", "coagulate", "coagulant"]
    }, {
        "Awkward of movement. ": ["clumsy", "coagulate", "coagulant", "coalescence"]
    }, {
        "To change into a clot or a jelly, as by heat, by chemical action, or by a ferment. ": ["coagulate", "coagulant", "coalescence", "coalition"]
    }, {
        "Producing coagulation. ": ["coagulant", "coalescence", "coalition", "coddle"]
    }, {
        "The act or process of coming together so as to form one body, combination, or product. ": ["coalescence", "coalition", "coddle", "codicil"]
    }, {
        "Combination in a body or mass. ": ["coalition", "coddle", "codicil", "coerce"]
    }, {
        "To treat as a baby or an invalid. ": ["coddle", "codicil", "coerce", "coercion"]
    }, {
        "A supplement adding to, revoking, or explaining in the body of a will. ": ["codicil", "coerce", "coercion", "coercive"]
    }, {
        "To force. ": ["coerce", "coercion", "coercive", "cogent"]
    }, {
        "Forcible constraint or restraint, moral or physical. ": ["coercion", "coercive", "cogent", "cognate"]
    }, {
        "Serving or tending to force. ": ["coercive", "cogent", "cognate", "cognizant"]
    }, {
        "Appealing strongly to the reason or conscience. ": ["cogent", "cognate", "cognizant", "cohere"]
    }, {
        "Akin. ": ["cognate", "cognizant", "cohere", "cohesion"]
    }, {
        "Taking notice. ": ["cognizant", "cohere", "cohesion", "cohesive"]
    }, {
        "To stick together. ": ["cohere", "cohesion", "cohesive", "coincide"]
    }, {
        "Consistency. ": ["cohesion", "cohesive", "coincide", "coincidence"]
    }, {
        "Having the property of consistency. ": ["cohesive", "coincide", "coincidence", "coincident"]
    }, {
        "To correspond. ": ["coincide", "coincidence", "coincident", "collaborate"]
    }, {
        "A circumstance so agreeing with another: often implying accident. ": ["coincidence", "coincident", "collaborate", "collapse"]
    }, {
        "Taking place at the same time. ": ["coincident", "collaborate", "collapse", "collapsible"]
    }, {
        "To labor or cooperate with another or others, especially in literary or scientific pursuits. ": ["collaborate", "collapse", "collapsible", "colleague"]
    }, {
        "To cause to shrink, fall in, or fail. ": ["collapse", "collapsible", "colleague", "collective"]
    }, {
        "That may or can collapse. ": ["collapsible", "colleague", "collective", "collector"]
    }, {
        "An associate in professional employment. ": ["colleague", "collective", "collector", "collegian"]
    }, {
        "Consisting of a number of persons or objects considered as gathered into a mass, or sum. ": ["collective", "collector", "collegian", "collide"]
    }, {
        "One who makes a collection, as of objects of art, books, or the like. ": ["collector", "collegian", "collide", "collier"]
    }, {
        "A college student. ": ["collegian", "collide", "collier", "collision"]
    }, {
        "To meet and strike violently. ": ["collide", "collier", "collision", "colloquial"]
    }, {
        "One who works in a coal-mine. ": ["collier", "collision", "colloquial", "colloquialism"]
    }, {
        "Violent contact. ": ["collision", "colloquial", "colloquialism", "colloquy"]
    }, {
        "Pertaining or peculiar to common speech as distinguished from literary. ": ["colloquial", "colloquialism", "colloquy", "collusion"]
    }, {
        "Form of speech used only or chiefly in conversation. ": ["colloquialism", "colloquy", "collusion", "colossus"]
    }, {
        "Conversation. ": ["colloquy", "collusion", "colossus", "comely"]
    }, {
        "A secret agreement for a wrongful purpose. ": ["collusion", "colossus", "comely", "comestible"]
    }, {
        "Any strikingly great person or object. ": ["colossus", "comely", "comestible", "comical"]
    }, {
        "Handsome. ": ["comely", "comestible", "comical", "commemorate"]
    }, {
        "Fit to be eaten. ": ["comestible", "comical", "commemorate", "commentary"]
    }, {
        "Funny. ": ["comical", "commemorate", "commentary", "commingle"]
    }, {
        "To serve as a remembrance of. ": ["commemorate", "commentary", "commingle", "commissariat"]
    }, {
        "A series of illustrative or explanatory notes on any important work. ": ["commentary", "commingle", "commissariat", "commission"]
    }, {
        "To blend. ": ["commingle", "commissariat", "commission", "commitment"]
    }, {
        "The department of an army charged with the provision of its food and water and daily needs. ": ["commissariat", "commission", "commitment", "committal"]
    }, {
        "To empower. ": ["commission", "commitment", "committal", "commodity"]
    }, {
        "The act or process of entrusting or consigning for safe-keeping. ": ["commitment", "committal", "commodity", "commotion"]
    }, {
        "The act, fact, or result of committing, or the state of being ": ["committal", "commodity", "commotion", "commute"]
    }, {
        "Something that is bought and sold. ": ["commodity", "commotion", "commute", "comparable"]
    }, {
        "A disturbance or violent agitation. ": ["commotion", "commute", "comparable", "comparative"]
    }, {
        "To put something, especially something less severe, in place of. ": ["commute", "comparable", "comparative", "comparison"]
    }, {
        "Fit to be compared. ": ["comparable", "comparative", "comparison", "compensate"]
    }, {
        "Relative. ": ["comparative", "comparison", "compensate", "competence"]
    }, {
        "Examination of two or more objects with reference to their likeness or unlikeness. ": ["comparison", "compensate", "competence", "competent"]
    }, {
        "To remunerate. ": ["compensate", "competence", "competent", "competitive"]
    }, {
        "Adequate qualification or capacity. ": ["competence", "competent", "competitive", "competitor"]
    }, {
        "Qualified. ": ["competent", "competitive", "competitor", "complacence"]
    }, {
        "characterized by rivalry. ": ["competitive", "competitor", "complacence", "complacent"]
    }, {
        "A rival. ": ["competitor", "complacence", "complacent", "complaisance"]
    }, {
        "Satisfaction with one's acts or surroundings. ": ["complacence", "complacent", "complaisance", "complaisant"]
    }, {
        "Pleased or satisfied with oneself. ": ["complacent", "complaisance", "complaisant", "complement"]
    }, {
        "Politeness. ": ["complaisance", "complaisant", "complement", "complex"]
    }, {
        "Agreeable. ": ["complaisant", "complement", "complex", "compliant"]
    }, {
        "To make complete. ": ["complement", "complex", "compliant", "complicate"]
    }, {
        "Complicated. ": ["complex", "compliant", "complicate", "complication"]
    }, {
        "Yielding. ": ["compliant", "complicate", "complication", "complicity"]
    }, {
        "To make complex, difficult, or hard to deal with. ": ["complicate", "complication", "complicity", "compliment"]
    }, {
        "An intermingling or combination of things or parts, especially in a perplexing manner. ": ["complication", "complicity", "compliment", "component"]
    }, {
        "Participation or partnership, as in wrong-doing or with a wrong-doer. ": ["complicity", "compliment", "component", "comport"]
    }, {
        "To address or gratify with expressions of delicate praise. ": ["compliment", "component", "comport", "composure"]
    }, {
        "A constituent element or part. ": ["component", "comport", "composure", "comprehensible"]
    }, {
        "To conduct or behave (oneself). ": ["comport", "composure", "comprehensible", "comprehension"]
    }, {
        "Calmness. ": ["composure", "comprehensible", "comprehension", "comprehensive"]
    }, {
        "Intelligible. ": ["comprehensible", "comprehension", "comprehensive", "compress"]
    }, {
        "Ability to know. ": ["comprehension", "comprehensive", "compress", "compressible"]
    }, {
        "Large in scope or content. ": ["comprehensive", "compress", "compressible", "compression"]
    }, {
        "To press together or into smaller space. ": ["compress", "compressible", "compression", "comprise"]
    }, {
        "Capable of being pressed into smaller compass. ": ["compressible", "compression", "comprise", "compulsion"]
    }, {
        "Constraint, as by force or authority. ": ["compression", "comprise", "compulsion", "compulsory"]
    }, {
        "To consist of. ": ["comprise", "compulsion", "compulsory", "compunction"]
    }, {
        "Coercion. ": ["compulsion", "compulsory", "compunction", "compute"]
    }, {
        "Forced. ": ["compulsory", "compunction", "compute", "concede"]
    }, {
        "Remorseful feeling. ": ["compunction", "compute", "concede", "conceit"]
    }, {
        "To ascertain by mathematical calculation. ": ["compute", "concede", "conceit", "conceive"]
    }, {
        "To surrender. ": ["concede", "conceit", "conceive", "concerto"]
    }, {
        "Self-flattering opinion. ": ["conceit", "conceive", "concerto", "concession"]
    }, {
        "To form an idea, mental image or thought of. ": ["conceive", "concerto", "concession", "conciliate"]
    }, {
        "A musical composition. ": ["concerto", "concession", "conciliate", "conciliatory"]
    }, {
        "Anything granted or yielded, or admitted in response to a demand, petition, or claim. ": ["concession", "conciliate", "conciliatory", "conclusive"]
    }, {
        "To obtain the friendship of. ": ["conciliate", "conciliatory", "conclusive", "concord"]
    }, {
        "Tending to reconcile. ": ["conciliatory", "conclusive", "concord", "concordance"]
    }, {
        "Sufficient to convince or decide. ": ["conclusive", "concord", "concordance", "concur"]
    }, {
        "Harmony. ": ["concord", "concordance", "concur", "concurrence"]
    }, {
        "Harmony. ": ["concordance", "concur", "concurrence", "concurrent"]
    }, {
        "To agree. ": ["concur", "concurrence", "concurrent", "concussion"]
    }, {
        "Agreement. ": ["concurrence", "concurrent", "concussion", "condensation"]
    }, {
        "Occurring or acting together. ": ["concurrent", "concussion", "condensation", "condense"]
    }, {
        "A violent shock to some organ by a fall or a sudden blow. ": ["concussion", "condensation", "condense", "condescend"]
    }, {
        "The act or process of making dense or denser. ": ["condensation", "condense", "condescend", "condolence"]
    }, {
        "To abridge. ": ["condense", "condescend", "condolence", "conduce"]
    }, {
        "To come down voluntarily to equal terms with inferiors. ": ["condescend", "condolence", "conduce", "conducive"]
    }, {
        "Expression of sympathy with a person in pain, sorrow, or misfortune. ": ["condolence", "conduce", "conducive", "conductible"]
    }, {
        "To bring about. ": ["conduce", "conducive", "conductible", "conduit"]
    }, {
        "Contributing to an end. ": ["conducive", "conductible", "conduit", "confectionery"]
    }, {
        "Capable of being conducted or transmitted. ": ["conductible", "conduit", "confectionery", "confederacy"]
    }, {
        "A means for conducting something, particularly a tube, pipe, or passageway for a fluid. ": ["conduit", "confectionery", "confederacy", "confederate"]
    }, {
        "The candy collectively that a confectioner makes or sells, as candy. ": ["confectionery", "confederacy", "confederate", "confer"]
    }, {
        "A number of states or persons in compact or league with each other, as for mutual aid. ": ["confederacy", "confederate", "confer", "conferee"]
    }, {
        "One who is united with others in a league, compact, or agreement. ": ["confederate", "confer", "conferee", "confessor"]
    }, {
        "To bestow. ": ["confer", "conferee", "confessor", "confidant"]
    }, {
        "A person with whom another confers. ": ["conferee", "confessor", "confidant", "confide"]
    }, {
        "A spiritual advisor. ": ["confessor", "confidant", "confide", "confidence"]
    }, {
        "One to whom secrets are entrusted. ": ["confidant", "confide", "confidence", "confident"]
    }, {
        "To reveal in trust or confidence. ": ["confide", "confidence", "confident", "confinement"]
    }, {
        "The state or feeling of trust in or reliance upon another. ": ["confidence", "confident", "confinement", "confiscate"]
    }, {
        "Assured. ": ["confident", "confinement", "confiscate", "conflagration"]
    }, {
        "Restriction within limits or boundaries. ": ["confinement", "confiscate", "conflagration", "confluence"]
    }, {
        "To appropriate (private property) as forfeited to the public use or treasury. ": ["confiscate", "conflagration", "confluence", "confluent"]
    }, {
        "A great fire, as of many buildings, a forest, or the like. ": ["conflagration", "confluence", "confluent", "conformance"]
    }, {
        "The place where streams meet. ": ["confluence", "confluent", "conformance", "conformable"]
    }, {
        "A stream that unites with another. ": ["confluent", "conformance", "conformable", "conformation"]
    }, {
        "The act or state or conforming. ": ["conformance", "conformable", "conformation", "conformity"]
    }, {
        "Harmonious. ": ["conformable", "conformation", "conformity", "confront"]
    }, {
        "General structure, form, or outline. ": ["conformation", "conformity", "confront", "congeal"]
    }, {
        "Correspondence in form, manner, or use. ": ["conformity", "confront", "congeal", "congenial"]
    }, {
        "To encounter, as difficulties or obstacles. ": ["confront", "congeal", "congenial", "congest"]
    }, {
        "To coagulate. ": ["congeal", "congenial", "congest", "congregate"]
    }, {
        "Having kindred character or tastes. ": ["congenial", "congest", "congregate", "coniferous"]
    }, {
        "To collect into a mass. ": ["congest", "congregate", "coniferous", "conjecture"]
    }, {
        "To bring together into a crowd. ": ["congregate", "coniferous", "conjecture", "conjoin"]
    }, {
        "Cone-bearing trees. ": ["coniferous", "conjecture", "conjoin", "conjugal"]
    }, {
        "A guess. ": ["conjecture", "conjoin", "conjugal", "conjugate"]
    }, {
        "To unite. ": ["conjoin", "conjugal", "conjugate", "conjugation"]
    }, {
        "Pertaining to marriage, marital rights, or married persons. ": ["conjugal", "conjugate", "conjugation", "conjunction"]
    }, {
        "Joined together in pairs. ": ["conjugate", "conjugation", "conjunction", "connive"]
    }, {
        "The state or condition of being joined together. ": ["conjugation", "conjunction", "connive", "connoisseur"]
    }, {
        "The state of being joined together, or the things so joined. ": ["conjunction", "connive", "connoisseur", "connote"]
    }, {
        "To be in collusion. ": ["connive", "connoisseur", "connote", "connubial"]
    }, {
        "A critical judge of art, especially one with thorough knowledge and sound judgment of art. ": ["connoisseur", "connote", "connubial", "conquer"]
    }, {
        "To mean; signify. ": ["connote", "connubial", "conquer", "consanguineous"]
    }, {
        "Pertaining to marriage or matrimony. ": ["connubial", "conquer", "consanguineous", "conscience"]
    }, {
        "To overcome by force. ": ["conquer", "consanguineous", "conscience", "conscientious"]
    }, {
        "Descended from the same parent or ancestor. ": ["consanguineous", "conscience", "conscientious", "conscious"]
    }, {
        "The faculty in man by which he distinguishes between right and wrong in character and conduct. ": ["conscience", "conscientious", "conscious", "conscript"]
    }, {
        "Governed by moral standard. ": ["conscientious", "conscious", "conscript", "consecrate"]
    }, {
        "Aware that one lives, feels, and thinks. ": ["conscious", "conscript", "consecrate", "consecutive"]
    }, {
        "To force into military service. ": ["conscript", "consecrate", "consecutive", "consensus"]
    }, {
        "To set apart as sacred. ": ["consecrate", "consecutive", "consensus", "conservatism"]
    }, {
        "Following in uninterrupted succession. ": ["consecutive", "consensus", "conservatism", "conservative"]
    }, {
        "A collective unanimous opinion of a number of persons. ": ["consensus", "conservatism", "conservative", "conservatory"]
    }, {
        "Tendency to adhere to the existing order of things. ": ["conservatism", "conservative", "conservatory", "consign"]
    }, {
        "Adhering to the existing order of things. ": ["conservative", "conservatory", "consign", "consignee"]
    }, {
        "An institution for instruction and training in music and declamation. ": ["conservatory", "consign", "consignee", "consignor"]
    }, {
        "To entrust. ": ["consign", "consignee", "consignor", "consistency"]
    }, {
        "A person to whom goods or other property has been entrusted. ": ["consignee", "consignor", "consistency", "console"]
    }, {
        "One who entrusts. ": ["consignor", "consistency", "console", "consolidate"]
    }, {
        "A state of permanence. ": ["consistency", "console", "consolidate", "consonance"]
    }, {
        "To comfort. ": ["console", "consolidate", "consonance", "consonant"]
    }, {
        "To combine into one body or system. ": ["consolidate", "consonance", "consonant", "consort"]
    }, {
        "The state or quality of being in accord with. ": ["consonance", "consonant", "consort", "conspicuous"]
    }, {
        "Being in agreement or harmony with. ": ["consonant", "consort", "conspicuous", "conspirator"]
    }, {
        "A companion or associate. ": ["consort", "conspicuous", "conspirator", "conspire"]
    }, {
        "Clearly visible. ": ["conspicuous", "conspirator", "conspire", "constable"]
    }, {
        "One who agrees with others to cooperate in accomplishing some unlawful purpose. ": ["conspirator", "conspire", "constable", "constellation"]
    }, {
        "To plot. ": ["conspire", "constable", "constellation", "consternation"]
    }, {
        "An officer whose duty is to maintain the peace. ": ["constable", "constellation", "consternation", "constituency"]
    }, {
        "An arbitrary assemblage or group of stars. ": ["constellation", "consternation", "constituency", "constituent"]
    }, {
        "Panic. ": ["consternation", "constituency", "constituent", "constrict"]
    }, {
        "The inhabitants or voters in a district represented in a legislative body. ": ["constituency", "constituent", "constrict", "consul"]
    }, {
        "One who has the right to vote at an election. ": ["constituent", "constrict", "consul", "consulate"]
    }, {
        "To bind. ": ["constrict", "consul", "consulate", "consummate"]
    }, {
        "An officer appointed to reside in a foreign city, chiefly to represent his country. ": ["consul", "consulate", "consummate", "consumption"]
    }, {
        "The place in which a consul transacts official business. ": ["consulate", "consummate", "consumption", "consumptive"]
    }, {
        "To bring to completion. ": ["consummate", "consumption", "consumptive", "contagion"]
    }, {
        "Gradual destruction, as by burning, eating, etc., or by using up, wearing out, etc. ": ["consumption", "consumptive", "contagion", "contagious"]
    }, {
        "Designed for gradual destruction. ": ["consumptive", "contagion", "contagious", "contaminate"]
    }, {
        "The communication of disease from person to person. ": ["contagion", "contagious", "contaminate", "contemplate"]
    }, {
        "Transmitting disease. ": ["contagious", "contaminate", "contemplate", "contemporaneous"]
    }, {
        "To pollute. ": ["contaminate", "contemplate", "contemporaneous", "contemporary"]
    }, {
        "To consider thoughtfully. ": ["contemplate", "contemporaneous", "contemporary", "contemptible"]
    }, {
        "Living, occurring, or existing at the same time. ": ["contemporaneous", "contemporary", "contemptible", "contemptuous"]
    }, {
        "Living or existing at the same time. ": ["contemporary", "contemptible", "contemptuous", "contender"]
    }, {
        "Worthy of scorn or disdain. ": ["contemptible", "contemptuous", "contender", "contiguity"]
    }, {
        "Disdainful. ": ["contemptuous", "contender", "contiguity", "contiguous"]
    }, {
        "One who exerts oneself in opposition or rivalry. ": ["contender", "contiguity", "contiguous", "continence"]
    }, {
        "Proximity. ": ["contiguity", "contiguous", "continence", "contingency"]
    }, {
        "Touching or joining at the edge or boundary. ": ["contiguous", "continence", "contingency", "contingent"]
    }, {
        "Self-restraint with respect to desires, appetites, and passion. ": ["continence", "contingency", "contingent", "continuance"]
    }, {
        "Possibility of happening. ": ["contingency", "contingent", "continuance", "continuation"]
    }, {
        "Not predictable. ": ["contingent", "continuance", "continuation", "continuity"]
    }, {
        "Permanence. ": ["continuance", "continuation", "continuity", "continuous"]
    }, {
        "Prolongation. ": ["continuation", "continuity", "continuous", "contort"]
    }, {
        "Uninterrupted connection in space, time, operation, or development. ": ["continuity", "continuous", "contort", "contraband"]
    }, {
        "Connected, extended, or prolonged without separation or interruption of sequence. ": ["continuous", "contort", "contraband", "contradiction"]
    }, {
        "To twist into a misshapen form. ": ["contort", "contraband", "contradiction", "contradictory"]
    }, {
        "Trade forbidden by law or treaty. ": ["contraband", "contradiction", "contradictory", "contraposition"]
    }, {
        "The assertion of the opposite of that which has been said. ": ["contradiction", "contradictory", "contraposition", "contravene"]
    }, {
        "Inconsistent with itself. ": ["contradictory", "contraposition", "contravene", "contribution"]
    }, {
        "A placing opposite. ": ["contraposition", "contravene", "contribution", "contributor"]
    }, {
        "To prevent or obstruct the operation of. ": ["contravene", "contribution", "contributor", "contrite"]
    }, {
        "The act of giving for a common purpose. ": ["contribution", "contributor", "contrite", "contrivance"]
    }, {
        "One who gives or furnishes, in common with others, for a common purpose. ": ["contributor", "contrite", "contrivance", "contrive"]
    }, {
        "Broken in spirit because of a sense of sin. ": ["contrite", "contrivance", "contrive", "control"]
    }, {
        "The act planning, devising, inventing, or adapting something to or for a special purpose. ": ["contrivance", "contrive", "control", "controller"]
    }, {
        "To manage or carry through by some device or scheme. ": ["contrive", "control", "controller", "contumacious"]
    }, {
        "To exercise a directing, restraining, or governing influence over. ": ["control", "controller", "contumacious", "contumacy"]
    }, {
        "One who or that which regulates or directs. ": ["controller", "contumacious", "contumacy", "contuse"]
    }, {
        "Rebellious. ": ["contumacious", "contumacy", "contuse", "contusion"]
    }, {
        "Contemptuous disregard of the requirements of rightful authority. ": ["contumacy", "contuse", "contusion", "convalesce"]
    }, {
        "To bruise by a blow, either with or without the breaking of the skin. ": ["contuse", "contusion", "convalesce", "convalescence"]
    }, {
        "A bruise. ": ["contusion", "convalesce", "convalescence", "convalescent"]
    }, {
        "To recover after a sickness. ": ["convalesce", "convalescence", "convalescent", "convene"]
    }, {
        "The state of progressive restoration to health and strength after the cessation of disease. ": ["convalescence", "convalescent", "convene", "convenience"]
    }, {
        "Recovering health after sickness. ": ["convalescent", "convene", "convenience", "converge"]
    }, {
        "To summon or cause to assemble. ": ["convene", "convenience", "converge", "convergent"]
    }, {
        "Fitness, as of time or place. ": ["convenience", "converge", "convergent", "conversant"]
    }, {
        "To cause to incline and approach nearer together. ": ["converge", "convergent", "conversant", "conversion"]
    }, {
        "Tending to one point. ": ["convergent", "conversant", "conversion", "convertible"]
    }, {
        "Thoroughly informed. ": ["conversant", "conversion", "convertible", "convex"]
    }, {
        "Change from one state or position to another, or from one form to another. ": ["conversion", "convertible", "convex", "conveyance"]
    }, {
        "Interchangeable. ": ["convertible", "convex", "conveyance", "convivial"]
    }, {
        "Curving like the segment of the globe or of the surface of a circle. ": ["convex", "conveyance", "convivial", "convolution"]
    }, {
        "That by which anything is transported. ": ["conveyance", "convivial", "convolution", "convolve"]
    }, {
        "Devoted to feasting, or to good-fellowship in eating or drinking. ": ["convivial", "convolution", "convolve", "convoy"]
    }, {
        "A winding motion. ": ["convolution", "convolve", "convoy", "convulse"]
    }, {
        "To move with a circling or winding motion. ": ["convolve", "convoy", "convulse", "convulsion"]
    }, {
        "A protecting force accompanying property in course of transportation. ": ["convoy", "convulse", "convulsion", "copious"]
    }, {
        "To cause spasms in. ": ["convulse", "convulsion", "copious", "coquette"]
    }, {
        "A violent and abnormal muscular contraction of the body. ": ["convulsion", "copious", "coquette", "cornice"]
    }, {
        "Plenteous. ": ["copious", "coquette", "cornice", "cornucopia"]
    }, {
        "A flirt. ": ["coquette", "cornice", "cornucopia", "corollary"]
    }, {
        "An ornamental molding running round the walls of a room close to the ceiling. ": ["cornice", "cornucopia", "corollary", "coronation"]
    }, {
        "The horn of plenty, symbolizing peace and prosperity. ": ["cornucopia", "corollary", "coronation", "coronet"]
    }, {
        "A proposition following so obviously from another that it requires little demonstration. ": ["corollary", "coronation", "coronet", "corporal"]
    }, {
        "The act or ceremony of crowning a monarch. ": ["coronation", "coronet", "corporal", "corporate"]
    }, {
        "Inferior crown denoting, according to its form, various degrees of noble rank less than sovereign.": ["coronet", "corporal", "corporate", "corporeal"]
    }, {
        "Belonging or relating to the body as opposed to the mind. ": ["corporal", "corporate", "corporeal", "corps"]
    }, {
        "Belonging to a corporation. ": ["corporate", "corporeal", "corps", "corpse"]
    }, {
        "Of a material nature; physical. ": ["corporeal", "corps", "corpse", "corpulent"]
    }, {
        "A number or body of persons in some way associated or acting together. ": ["corps", "corpse", "corpulent", "corpuscle"]
    }, {
        "A dead body. ": ["corpse", "corpulent", "corpuscle", "correlate"]
    }, {
        "Obese. ": ["corpulent", "corpuscle", "correlate", "correlative"]
    }, {
        "A minute particle of matter. ": ["corpuscle", "correlate", "correlative", "corrigible"]
    }, {
        "To put in some relation of connection or correspondence. ": ["correlate", "correlative", "corrigible", "corroborate"]
    }, {
        "Mutually involving or implying one another. ": ["correlative", "corrigible", "corroborate", "corroboration"]
    }, {
        "Capable of reformation. ": ["corrigible", "corroborate", "corroboration", "corrode"]
    }, {
        "To strengthen, as proof or conviction. ": ["corroborate", "corroboration", "corrode", "corrosion"]
    }, {
        "Confirmation. ": ["corroboration", "corrode", "corrosion", "corrosive"]
    }, {
        "To ruin or destroy little by little. ": ["corrode", "corrosion", "corrosive", "corruptible"]
    }, {
        "Gradual decay by crumbling or surface disintegration. ": ["corrosion", "corrosive", "corruptible", "corruption"]
    }, {
        "That which causes gradual decay by crumbling or surface disintegration. ": ["corrosive", "corruptible", "corruption", "cosmetic"]
    }, {
        "Open to bribery. ": ["corruptible", "corruption", "cosmetic", "cosmic"]
    }, {
        "Loss of purity or integrity. ": ["corruption", "cosmetic", "cosmic", "cosmogony"]
    }, {
        "Pertaining to the art of beautifying, especially the complexion. ": ["cosmetic", "cosmic", "cosmogony", "cosmography"]
    }, {
        "Pertaining to the universe. ": ["cosmic", "cosmogony", "cosmography", "cosmology"]
    }, {
        "A doctrine of creation or of the origin of the universe. ": ["cosmogony", "cosmography", "cosmology", "cosmopolitan"]
    }, {
        "The science that describes the universe, including astronomy, geography, and geology. ": ["cosmography", "cosmology", "cosmopolitan", "cosmopolitanism"]
    }, {
        "The general science of the universe. ": ["cosmology", "cosmopolitan", "cosmopolitanism", "cosmos"]
    }, {
        "Common to all the world. ": ["cosmopolitan", "cosmopolitanism", "cosmos", "counter-claim"]
    }, {
        "A cosmopolitan character. ": ["cosmopolitanism", "cosmos", "counter-claim", "counteract"]
    }, {
        "The world or universe considered as a system, perfect in order and arrangement. ": ["cosmos", "counter-claim", "counteract", "counterbalance"]
    }, {
        "A cross-demand alleged by a defendant in his favor against the plaintiff. ": ["counter-claim", "counteract", "counterbalance", "countercharge"]
    }, {
        "To act in opposition to. ": ["counteract", "counterbalance", "countercharge", "counterfeit"]
    }, {
        "To oppose with an equal force. ": ["counterbalance", "countercharge", "counterfeit", "counterpart"]
    }, {
        "To accuse in return. ": ["countercharge", "counterfeit", "counterpart", "countervail"]
    }, {
        "Made to resemble something else. ": ["counterfeit", "counterpart", "countervail", "counting-house"]
    }, {
        "Something taken with another for the completion of either. ": ["counterpart", "countervail", "counting-house", "countryman"]
    }, {
        "To offset. ": ["countervail", "counting-house", "countryman", "courageous"]
    }, {
        "A house or office used for transacting business, bookkeeping, correspondence, etc. ": ["counting-house", "countryman", "courageous", "course"]
    }, {
        "A rustic. ": ["countryman", "courageous", "course", "courser"]
    }, {
        "Brave. ": ["courageous", "course", "courser", "courtesy"]
    }, {
        "Line of motion or direction. ": ["course", "courser", "courtesy", "covenant"]
    }, {
        "A fleet and spirited horse. ": ["courser", "courtesy", "covenant", "covert"]
    }, {
        "Politeness originating in kindness and exercised habitually. ": ["courtesy", "covenant", "covert", "covey"]
    }, {
        "An agreement entered into by two or more persons or parties. ": ["covenant", "covert", "covey", "cower"]
    }, {
        "Concealed, especially for an evil purpose. ": ["covert", "covey", "cower", "coxswain"]
    }, {
        "A flock of quails or partridges. ": ["covey", "cower", "coxswain", "crag"]
    }, {
        "To crouch down tremblingly, as through fear or shame. ": ["cower", "coxswain", "crag", "cranium"]
    }, {
        "One who steers a rowboat, or one who has charge of a ship's boat and its crew under an officer. ": ["coxswain", "crag", "cranium", "crass"]
    }, {
        "A rugged, rocky projection on a cliff or ledge. ": ["crag", "cranium", "crass", "craving"]
    }, {
        "The skull of an animal, especially that part enclosing the brain. ": ["cranium", "crass", "craving", "creak"]
    }, {
        "Coarse or thick in nature or structure, as opposed to thin or fine. ": ["crass", "craving", "creak", "creamery"]
    }, {
        "A vehement desire. ": ["craving", "creak", "creamery", "creamy"]
    }, {
        "A sharp, harsh, squeaking sound. ": ["creak", "creamery", "creamy", "credence"]
    }, {
        "A butter-making establishment. ": ["creamery", "creamy", "credence", "credible"]
    }, {
        "Resembling or containing cream. ": ["creamy", "credence", "credible", "credulous"]
    }, {
        "Belief. ": ["credence", "credible", "credulous", "creed"]
    }, {
        "Believable. ": ["credible", "credulous", "creed", "crematory"]
    }, {
        "Easily deceived. ": ["credulous", "creed", "crematory", "crevasse"]
    }, {
        "A formal summary of fundamental points of religious belief. ": ["creed", "crematory", "crevasse", "crevice"]
    }, {
        "A place for cremating dead bodies. ": ["crematory", "crevasse", "crevice", "criterion"]
    }, {
        "A deep crack or fissure in the ice of a glacier. ": ["crevasse", "crevice", "criterion", "critique"]
    }, {
        "A small fissure, as between two contiguous surfaces. ": ["crevice", "criterion", "critique", "crockery"]
    }, {
        "A standard by which to determine the correctness of a judgment or conclusion. ": ["criterion", "critique", "crockery", "crucible"]
    }, {
        "A criticism or critical review. ": ["critique", "crockery", "crucible", "crusade"]
    }, {
        "Earthenware made from baked clay. ": ["crockery", "crucible", "crusade", "crustacean"]
    }, {
        "A trying and purifying test or agency. ": ["crucible", "crusade", "crustacean", "crustaceous"]
    }, {
        "Any concerted movement, vigorously prosecuted, in behalf of an idea or principle. ": ["crusade", "crustacean", "crustaceous", "cryptogram"]
    }, {
        "Pertaining to a division of arthropods, containing lobsters, crabs, crawfish, etc. ": ["crustacean", "crustaceous", "cryptogram", "crystallize"]
    }, {
        "Having a crust-like shell. ": ["crustaceous", "cryptogram", "crystallize", "cudgel"]
    }, {
        "Anything written in characters that are secret or so arranged as to have hidden meaning. ": ["cryptogram", "crystallize", "cudgel", "culinary"]
    }, {
        "To bring together or give fixed shape to. ": ["crystallize", "cudgel", "culinary", "cull"]
    }, {
        "A short thick stick used as a club. ": ["cudgel", "culinary", "cull", "culpable"]
    }, {
        "Of or pertaining to cooking or the kitchen. ": ["culinary", "cull", "culpable", "culprit"]
    }, {
        "To pick or sort out from the rest. ": ["cull", "culpable", "culprit", "culvert"]
    }, {
        "Guilty. ": ["culpable", "culprit", "culvert", "cupidity"]
    }, {
        "A guilty person. ": ["culprit", "culvert", "cupidity", "curable"]
    }, {
        "Any artificial covered channel for the passage of water through a bank or under a road, canal. ": ["culvert", "cupidity", "curable", "curator"]
    }, {
        "Avarice. ": ["cupidity", "curable", "curator", "curio"]
    }, {
        "Capable of being remedied or corrected. ": ["curable", "curator", "curio", "cursive"]
    }, {
        "A person having charge as of a library or museum. ": ["curator", "curio", "cursive", "cursory"]
    }, {
        "A piece of bric-a-brac. ": ["curio", "cursive", "cursory", "curt"]
    }, {
        "Writing in which the letters are joined together. ": ["cursive", "cursory", "curt", "curtail"]
    }, {
        "Rapid and superficial. ": ["cursory", "curt", "curtail", "curtsy"]
    }, {
        "Concise, compressed, and abrupt in act or expression. ": ["curt", "curtail", "curtsy", "cycloid"]
    }, {
        "To cut off or cut short. ": ["curtail", "curtsy", "cycloid", "cygnet"]
    }, {
        "A downward movement of the body by bending the knees. ": ["curtsy", "cycloid", "cygnet", "cynical"]
    }, {
        "Like a circle. ": ["cycloid", "cygnet", "cynical", "cynicism"]
    }, {
        "A young swan. ": ["cygnet", "cynical", "cynicism", "cynosure"]
    }, {
        "Exhibiting moral skepticism. ": ["cynical", "cynicism", "cynosure", "daring"]
    }, {
        "Contempt for the opinions of others and of what others value. ": ["cynicism", "cynosure", "daring", "darkling"]
    }, {
        "That to which general interest or attention is directed. ": ["cynosure", "daring", "darkling", "Darwinism"]
    }, {
        "Brave. ": ["daring", "darkling", "Darwinism", "dastard"]
    }, {
        "Blindly. ": ["darkling", "Darwinism", "dastard", "datum"]
    }, {
        "The doctrine that natural selection has been the prime cause of evolution of higher forms. ": ["Darwinism", "dastard", "datum", "dauntless"]
    }, {
        "A base coward. ": ["dastard", "datum", "dauntless", "day-man"]
    }, {
        "A premise, starting-point, or given fact. ": ["datum", "dauntless", "day-man", "dead-heat"]
    }, {
        "Fearless. ": ["dauntless", "day-man", "dead-heat", "dearth"]
    }, {
        "A day-laborer. ": ["day-man", "dead-heat", "dearth", "death's-head"]
    }, {
        "A race in which two or more competitors come out even, and there is no winner. ": ["dead-heat", "dearth", "death's-head", "debase"]
    }, {
        "Scarcity, as of something customary, essential ,or desirable. ": ["dearth", "death's-head", "debase", "debatable"]
    }, {
        "A human skull as a symbol of death. ": ["death's-head", "debase", "debatable", "debonair"]
    }, {
        "To lower in character or virtue. ": ["debase", "debatable", "debonair", "debut"]
    }, {
        "Subject to contention or dispute. ": ["debatable", "debonair", "debut", "decagon"]
    }, {
        "Having gentle or courteous bearing or manner. ": ["debonair", "debut", "decagon", "decagram"]
    }, {
        "A first appearance in society or on the stage. ": ["debut", "decagon", "decagram", "decaliter"]
    }, {
        "A figure with ten sides and ten angles. ": ["decagon", "decagram", "decaliter", "decalogue"]
    }, {
        "A weight of 10 grams. ": ["decagram", "decaliter", "decalogue", "Decameron"]
    }, {
        "A liquid and dry measure of 10 liters. ": ["decaliter", "decalogue", "Decameron", "decameter"]
    }, {
        "The ten commandments. ": ["decalogue", "Decameron", "decameter", "decamp"]
    }, {
        "A volume consisting of ten parts or books. ": ["Decameron", "decameter", "decamp", "decapitate"]
    }, {
        "A length of ten meters. ": ["decameter", "decamp", "decapitate", "decapod"]
    }, {
        "To leave suddenly or unexpectedly. ": ["decamp", "decapitate", "decapod", "decasyllable"]
    }, {
        "To behead. ": ["decapitate", "decapod", "decasyllable", "deceit"]
    }, {
        "Ten-footed or ten-armed. ": ["decapod", "decasyllable", "deceit", "deceitful"]
    }, {
        "A line of ten syllables. ": ["decasyllable", "deceit", "deceitful", "deceive"]
    }, {
        "Falsehood. ": ["deceit", "deceitful", "deceive", "decency"]
    }, {
        "Fraudulent. ": ["deceitful", "deceive", "decency", "decent"]
    }, {
        "To mislead by or as by falsehood. ": ["deceive", "decency", "decent", "deciduous"]
    }, {
        "Moral fitness. ": ["decency", "decent", "deciduous", "decimal"]
    }, {
        "Characterized by propriety of conduct, speech, manners, or dress. ": ["decent", "deciduous", "decimal", "decimate"]
    }, {
        "Falling off at maturity as petals after flowering, fruit when ripe, etc. ": ["deciduous", "decimal", "decimate", "decipher"]
    }, {
        "Founded on the number 10. ": ["decimal", "decimate", "decipher", "decisive"]
    }, {
        "To destroy a measurable or large proportion of. ": ["decimate", "decipher", "decisive", "declamation"]
    }, {
        "To find out the true words or meaning of, as something hardly legible. ": ["decipher", "decisive", "declamation", "declamatory"]
    }, {
        "Conclusive. ": ["decisive", "declamation", "declamatory", "declarative"]
    }, {
        "A speech recited or intended for recitation from memory in public. ": ["declamation", "declamatory", "declarative", "declension"]
    }, {
        "A full and formal style of utterance. ": ["declamatory", "declarative", "declension", "decorate"]
    }, {
        "Containing a formal, positive, or explicit statement or affirmation. ": ["declarative", "declension", "decorate", "decorous"]
    }, {
        "The change of endings in nouns and to express their different relations of gender. ": ["declension", "decorate", "decorous", "decoy"]
    }, {
        "To embellish. ": ["decorate", "decorous", "decoy", "decrepit"]
    }, {
        "Suitable for the occasion or circumstances. ": ["decorous", "decoy", "decrepit", "dedication"]
    }, {
        "Anything that allures, or is intended to allures into danger or temptation. ": ["decoy", "decrepit", "dedication", "deduce"]
    }, {
        "Enfeebled, as by old age or some chronic infirmity. ": ["decrepit", "dedication", "deduce", "deface"]
    }, {
        "The voluntary consecration or relinquishment of something to an end or cause. ": ["dedication", "deduce", "deface", "defalcate"]
    }, {
        "To derive or draw as a conclusion by reasoning from given premises or principles. ": ["deduce", "deface", "defalcate", "defamation"]
    }, {
        "To mar or disfigure the face or external surface of. ": ["deface", "defalcate", "defamation", "defame"]
    }, {
        "To cut off or take away, as a part of something. ": ["defalcate", "defamation", "defame", "default"]
    }, {
        "Malicious and groundless injury done to the reputation or good name of another. ": ["defamation", "defame", "default", "defendant"]
    }, {
        "To slander. ": ["defame", "default", "defendant", "defensible"]
    }, {
        "The neglect or omission of a legal requirement. ": ["default", "defendant", "defensible", "defensive"]
    }, {
        "A person against whom a suit is brought. ": ["defendant", "defensible", "defensive", "defer"]
    }, {
        "Capable of being maintained or justified. ": ["defensible", "defensive", "defer", "deference"]
    }, {
        "Carried on in resistance to aggression. ": ["defensive", "defer", "deference", "defiant"]
    }, {
        "To delay or put off to some other time. ": ["defer", "deference", "defiant", "deficiency"]
    }, {
        "Respectful submission or yielding, as to another's opinion, wishes, or judgment. ": ["deference", "defiant", "deficiency", "deficient"]
    }, {
        "Characterized by bold or insolent opposition. ": ["defiant", "deficiency", "deficient", "definite"]
    }, {
        "Lack or insufficiency. ": ["deficiency", "deficient", "definite", "deflect"]
    }, {
        "Not having an adequate or proper supply or amount. ": ["deficient", "definite", "deflect", "deforest"]
    }, {
        "Having an exact signification or positive meaning. ": ["definite", "deflect", "deforest", "deform"]
    }, {
        "To cause to turn aside or downward. ": ["deflect", "deforest", "deform", "deformity"]
    }, {
        "To clear of forests. ": ["deforest", "deform", "deformity", "defraud"]
    }, {
        "To disfigure. ": ["deform", "deformity", "defraud", "defray"]
    }, {
        "A disfigurement. ": ["deformity", "defraud", "defray", "degeneracy"]
    }, {
        "To deprive of something dishonestly. ": ["defraud", "defray", "degeneracy", "degenerate"]
    }, {
        "To make payment for. ": ["defray", "degeneracy", "degenerate", "degradation"]
    }, {
        "A becoming worse. ": ["degeneracy", "degenerate", "degradation", "degrade"]
    }, {
        "To become worse or inferior. ": ["degenerate", "degradation", "degrade", "dehydrate"]
    }, {
        "Diminution, as of strength or magnitude. ": ["degradation", "degrade", "dehydrate", "deify"]
    }, {
        "To take away honors or position from. ": ["degrade", "dehydrate", "deify", "deign"]
    }, {
        "To deprive of water. ": ["dehydrate", "deify", "deign", "deist"]
    }, {
        "To regard or worship as a god. ": ["deify", "deign", "deist", "deity"]
    }, {
        "To deem worthy of notice or account. ": ["deign", "deist", "deity", "deject"]
    }, {
        "One who believes in God, but denies supernatural revelation. ": ["deist", "deity", "deject", "dejection"]
    }, {
        "A god, goddess, or divine person. ": ["deity", "deject", "dejection", "delectable"]
    }, {
        "To dishearten. ": ["deject", "dejection", "delectable", "delectation"]
    }, {
        "Melancholy. ": ["dejection", "delectable", "delectation", "deleterious"]
    }, {
        "Delightful to the taste or to the senses. ": ["delectable", "delectation", "deleterious", "delicacy"]
    }, {
        "Delight. ": ["delectation", "deleterious", "delicacy", "delineate"]
    }, {
        "Hurtful, morally or physically. ": ["deleterious", "delicacy", "delineate", "deliquesce"]
    }, {
        "That which is agreeable to a fine taste. ": ["delicacy", "delineate", "deliquesce", "delirious"]
    }, {
        "To represent by sketch or diagram. ": ["delineate", "deliquesce", "delirious", "delude"]
    }, {
        "To dissolve gradually and become liquid by absorption of moisture from the air. ": ["deliquesce", "delirious", "delude", "deluge"]
    }, {
        "Raving. ": ["delirious", "delude", "deluge", "delusion"]
    }, {
        "To mislead the mind or judgment of. ": ["delude", "deluge", "delusion", "demagnetize"]
    }, {
        "To overwhelm with a flood of water. ": ["deluge", "delusion", "demagnetize", "demagogue"]
    }, {
        "Mistaken conviction, especially when more or less enduring. ": ["delusion", "demagnetize", "demagogue", "demeanor"]
    }, {
        "To deprive (a magnet) of magnetism. ": ["demagnetize", "demagogue", "demeanor", "demented"]
    }, {
        "An unprincipled politician. ": ["demagogue", "demeanor", "demented", "demerit"]
    }, {
        "Deportment. ": ["demeanor", "demented", "demerit", "demise"]
    }, {
        "Insane. ": ["demented", "demerit", "demise", "demobilize"]
    }, {
        "A mark for failure or bad conduct. ": ["demerit", "demise", "demobilize", "demolish"]
    }, {
        "Death. ": ["demise", "demobilize", "demolish", "demonstrable"]
    }, {
        "To disband, as troops. ": ["demobilize", "demolish", "demonstrable", "demonstrate"]
    }, {
        "To annihilate. ": ["demolish", "demonstrable", "demonstrate", "demonstrative"]
    }, {
        "Capable of positive proof. ": ["demonstrable", "demonstrate", "demonstrative", "demonstrator"]
    }, {
        "To prove indubitably. ": ["demonstrate", "demonstrative", "demonstrator", "demulcent"]
    }, {
        "Inclined to strong exhibition or expression of feeling or thoughts. ": ["demonstrative", "demonstrator", "demulcent", "demurrage"]
    }, {
        "One who proves in a convincing and conclusive manner. ": ["demonstrator", "demulcent", "demurrage", "dendroid"]
    }, {
        "Any application soothing to an irritable surface ": ["demulcent", "demurrage", "dendroid", "dendrology"]
    }, {
        "the detention of a vessel beyond the specified time of sailing. ": ["demurrage", "dendroid", "dendrology", "denizen"]
    }, {
        "Like a tree. ": ["dendroid", "dendrology", "denizen", "denominate"]
    }, {
        "The natural history of trees. ": ["dendrology", "denizen", "denominate", "denomination"]
    }, {
        "Inhabitant. ": ["denizen", "denominate", "denomination", "denominator"]
    }, {
        "To give a name or epithet to. ": ["denominate", "denomination", "denominator", "denote"]
    }, {
        "A body of Christians united by a common faith and form of worship and discipline. ": ["denomination", "denominator", "denote", "denouement"]
    }, {
        "Part of a fraction which expresses the number of equal parts into which the unit is divided. ": ["denominator", "denote", "denouement", "denounce"]
    }, {
        "To designate by word or mark. ": ["denote", "denouement", "denounce", "dentifrice"]
    }, {
        "That part of a play or story in which the mystery is cleared up. ": ["denouement", "denounce", "dentifrice", "denude"]
    }, {
        "To point out or publicly accuse as deserving of punishment, censure, or odium. ": ["denounce", "dentifrice", "denude", "denunciation"]
    }, {
        "Any preparation used for cleaning the teeth. ": ["dentifrice", "denude", "denunciation", "deplete"]
    }, {
        "To strip the covering from. ": ["denude", "denunciation", "deplete", "deplorable"]
    }, {
        "The act of declaring an action or person worthy of reprobation or punishment. ": ["denunciation", "deplete", "deplorable", "deplore"]
    }, {
        "To reduce or lessen, as by use, exhaustion, or waste. ": ["deplete", "deplorable", "deplore", "deponent"]
    }, {
        "Contemptible. ": ["deplorable", "deplore", "deponent", "depopulate"]
    }, {
        "To regard with grief or sorrow. ": ["deplore", "deponent", "depopulate", "deport"]
    }, {
        "Laying down. ": ["deponent", "depopulate", "deport", "deportment"]
    }, {
        "To remove the inhabitants from. ": ["depopulate", "deport", "deportment", "deposition"]
    }, {
        "To take or send away forcibly, as to a penal colony. ": ["deport", "deportment", "deposition", "depositor"]
    }, {
        "Demeanor. ": ["deportment", "deposition", "depositor", "depository"]
    }, {
        "Testimony legally taken on interrogatories and reduced to writing, for use as evidence in court.": ["deposition", "depositor", "depository", "deprave"]
    }, {
        "One who makes a deposit, or has an amount deposited. ": ["depositor", "depository", "deprave", "deprecate"]
    }, {
        "A place where anything is kept in safety. ": ["depository", "deprave", "deprecate", "depreciate"]
    }, {
        "To render bad, especially morally bad. ": ["deprave", "deprecate", "depreciate", "depreciation"]
    }, {
        "To express disapproval or regret for, with hope for the opposite. ": ["deprecate", "depreciate", "depreciation", "depress"]
    }, {
        "To lessen the worth of. ": ["depreciate", "depreciation", "depress", "depression"]
    }, {
        "A lowering in value or an underrating in worth. ": ["depreciation", "depress", "depression", "depth"]
    }, {
        "To press down. ": ["depress", "depression", "depth", "derelict"]
    }, {
        "A falling of the spirits. ": ["depression", "depth", "derelict", "deride"]
    }, {
        "Deepness. ": ["depth", "derelict", "deride", "derisible"]
    }, {
        "Neglectful of obligation. ": ["derelict", "deride", "derisible", "derision"]
    }, {
        "To ridicule. ": ["deride", "derisible", "derision", "derivation"]
    }, {
        "Open to ridicule. ": ["derisible", "derision", "derivation", "derivative"]
    }, {
        "Ridicule. ": ["derision", "derivation", "derivative", "derive"]
    }, {
        "That process by which a word is traced from its original root or primitive form and meaning. ": ["derivation", "derivative", "derive", "dermatology"]
    }, {
        "Coming or acquired from some origin. ": ["derivative", "derive", "dermatology", "derrick"]
    }, {
        "To deduce, as from a premise. ": ["derive", "dermatology", "derrick", "descendant"]
    }, {
        "The branch of medical science which relates to the skin and its diseases. ": ["dermatology", "derrick", "descendant", "descendent"]
    }, {
        "An apparatus for hoisting and swinging great weights. ": ["derrick", "descendant", "descendent", "descent"]
    }, {
        "One who is descended lineally from another, as a child, grandchild, etc. ": ["descendant", "descendent", "descent", "descry"]
    }, {
        "Proceeding downward. ": ["descendent", "descent", "descry", "desert"]
    }, {
        "The act of moving or going downward. ": ["descent", "descry", "desert", "desiccant"]
    }, {
        "To discern. ": ["descry", "desert", "desiccant", "designate"]
    }, {
        "To abandon without regard to the welfare of the abandoned": ["desert", "desiccant", "designate", "desist"]
    }, {
        "Any remedy which, when applied externally, dries up or absorbs moisture, as that of wounds. ": ["desiccant", "designate", "desist", "desistance"]
    }, {
        "To select or appoint, as by authority. ": ["designate", "desist", "desistance", "despair"]
    }, {
        "To cease from action. ": ["desist", "desistance", "despair", "desperado"]
    }, {
        "Cessation. ": ["desistance", "despair", "desperado", "desperate"]
    }, {
        "Utter hopelessness and despondency. ": ["despair", "desperado", "desperate", "despicable"]
    }, {
        "One without regard for law or life. ": ["desperado", "desperate", "despicable", "despite"]
    }, {
        "Resorted to in a last extremity, or as if prompted by utter despair. ": ["desperate", "despicable", "despite", "despond"]
    }, {
        "Contemptible. ": ["despicable", "despite", "despond", "despondent"]
    }, {
        "In spite of. ": ["despite", "despond", "despondent", "despot"]
    }, {
        "To lose spirit, courage, or hope. ": ["despond", "despondent", "despot", "despotism"]
    }, {
        "Disheartened. ": ["despondent", "despot", "despotism", "destitute"]
    }, {
        "An absolute and irresponsible monarch. ": ["despot", "despotism", "destitute", "desultory"]
    }, {
        "Any severe and strict rule in which the judgment of the governed has little or no part. ": ["despotism", "destitute", "desultory", "deter"]
    }, {
        "Poverty-stricken. ": ["destitute", "desultory", "deter", "deteriorate"]
    }, {
        "Not connected with what precedes. ": ["desultory", "deter", "deteriorate", "determinate"]
    }, {
        "To frighten away. ": ["deter", "deteriorate", "determinate", "determination"]
    }, {
        "To grow worse. ": ["deteriorate", "determinate", "determination", "deterrent"]
    }, {
        "Definitely limited or fixed. ": ["determinate", "determination", "deterrent", "detest"]
    }, {
        "The act of deciding. ": ["determination", "deterrent", "detest", "detract"]
    }, {
        "Hindering from action through fear. ": ["deterrent", "detest", "detract", "detriment"]
    }, {
        "To dislike or hate with intensity. ": ["detest", "detract", "detriment", "detrude"]
    }, {
        "To take away in such manner as to lessen value or estimation. ": ["detract", "detriment", "detrude", "deviate"]
    }, {
        "Something that causes damage, depreciation, or loss. ": ["detriment", "detrude", "deviate", "devilry"]
    }, {
        "To push down forcibly. ": ["detrude", "deviate", "devilry", "deviltry"]
    }, {
        "To take a different course. ": ["deviate", "devilry", "deviltry", "devious"]
    }, {
        "Malicious mischief. ": ["devilry", "deviltry", "devious", "devise"]
    }, {
        "Wanton and malicious mischief. ": ["deviltry", "devious", "devise", "devout"]
    }, {
        "Out of the common or regular track. ": ["devious", "devise", "devout", "dexterity"]
    }, {
        "To invent. ": ["devise", "devout", "dexterity", "diabolic"]
    }, {
        "Religious. ": ["devout", "dexterity", "diabolic", "diacritical"]
    }, {
        "Readiness, precision, efficiency, and ease in any physical activity or in any mechanical work.": ["dexterity", "diabolic", "diacritical", "diagnose"]
    }, {
        "Characteristic of the devil. ": ["diabolic", "diacritical", "diagnose", "diagnosis"]
    }, {
        "Marking a difference. ": ["diacritical", "diagnose", "diagnosis", "dialect"]
    }, {
        "To distinguish, as a disease, by its characteristic phenomena. ": ["diagnose", "diagnosis", "dialect", "dialectician"]
    }, {
        "Determination of the distinctive nature of a disease. ": ["diagnosis", "dialect", "dialectician", "dialogue"]
    }, {
        "Forms of speech collectively that are peculiar to the people of a particular district. ": ["dialect", "dialectician", "dialogue", "diaphanous"]
    }, {
        "A logician. ": ["dialectician", "dialogue", "diaphanous", "diatomic"]
    }, {
        "A formal conversation in which two or more take part. ": ["dialogue", "diaphanous", "diatomic", "diatribe"]
    }, {
        "Transparent. ": ["diaphanous", "diatomic", "diatribe", "dictum"]
    }, {
        "Containing only two atoms. ": ["diatomic", "diatribe", "dictum", "didactic"]
    }, {
        "A bitter or malicious criticism. ": ["diatribe", "dictum", "didactic", "difference"]
    }, {
        "A positive utterance. ": ["dictum", "didactic", "difference", "differentia"]
    }, {
        "Pertaining to teaching. ": ["didactic", "difference", "differentia", "differential"]
    }, {
        "Dissimilarity in any respect. ": ["difference", "differentia", "differential", "differentiate"]
    }, {
        "Any essential characteristic of a species by reason of which it differs from other species. ": ["differentia", "differential", "differentiate", "diffidence"]
    }, {
        "Distinctive. ": ["differential", "differentiate", "diffidence", "diffident"]
    }, {
        "To acquire a distinct and separate character. ": ["differentiate", "diffidence", "diffident", "diffusible"]
    }, {
        "Self-distrust. ": ["diffidence", "diffident", "diffusible", "diffusion"]
    }, {
        "Affected or possessed with self-distrust. ": ["diffident", "diffusible", "diffusion", "dignitary"]
    }, {
        "Spreading rapidly through the system and acting quickly. ": ["diffusible", "diffusion", "dignitary", "digraph"]
    }, {
        "Dispersion. ": ["diffusion", "dignitary", "digraph", "digress"]
    }, {
        "One who holds high rank. ": ["dignitary", "digraph", "digress", "dilapidated"]
    }, {
        "A union of two characters representing a single sound. ": ["digraph", "digress", "dilapidated", "dilate"]
    }, {
        "To turn aside from the main subject and for a time dwell on some incidental matter. ": ["digress", "dilapidated", "dilate", "dilatory"]
    }, {
        "Fallen into decay or partial ruin. ": ["dilapidated", "dilate", "dilatory", "dilemma"]
    }, {
        "To enlarge in all directions. ": ["dilate", "dilatory", "dilemma", "dilettante"]
    }, {
        "Tending to cause delay. ": ["dilatory", "dilemma", "dilettante", "diligence"]
    }, {
        "A situation in which a choice between opposing modes of conduct is necessary. ": ["dilemma", "dilettante", "diligence", "dilute"]
    }, {
        "A superficial amateur. ": ["dilettante", "diligence", "dilute", "diminution"]
    }, {
        "Careful and persevering effort to accomplish what is undertaken. ": ["diligence", "dilute", "diminution", "dimly"]
    }, {
        "To make more fluid or less concentrated by admixture with something. ": ["dilute", "diminution", "dimly", "diphthong"]
    }, {
        "Reduction. ": ["diminution", "dimly", "diphthong", "diplomacy"]
    }, {
        "Obscurely. ": ["dimly", "diphthong", "diplomacy", "diplomat"]
    }, {
        "The sound produced by combining two vowels in to a single syllable or running together the sounds. ": ["diphthong", "diplomacy", "diplomat", "diplomatic"]
    }, {
        "Tact, shrewdness, or skill in conducting any kind of negotiations or in social matters. ": ["diplomacy", "diplomat", "diplomatic", "diplomatist"]
    }, {
        "A representative of one sovereign state at the capital or court of another. ": ["diplomat", "diplomatic", "diplomatist", "disagree"]
    }, {
        "Characterized by special tact in negotiations. ": ["diplomatic", "diplomatist", "disagree", "disallow"]
    }, {
        "One remarkable for tact and shrewd management. ": ["diplomatist", "disagree", "disallow", "disappear"]
    }, {
        "To be opposite in opinion. ": ["disagree", "disallow", "disappear", "disappoint"]
    }, {
        "To withhold permission or sanction. ": ["disallow", "disappear", "disappoint", "disapprove"]
    }, {
        "To cease to exist, either actually or for the time being. ": ["disappear", "disappoint", "disapprove", "disarm"]
    }, {
        "To fail to fulfill the expectation, hope, wish, or desire of. ": ["disappoint", "disapprove", "disarm", "disarrange"]
    }, {
        "To regard with blame. ": ["disapprove", "disarm", "disarrange", "disavow"]
    }, {
        "To deprive of weapons. ": ["disarm", "disarrange", "disavow", "disavowal"]
    }, {
        "To throw out of order. ": ["disarrange", "disavow", "disavowal", "disbeliever"]
    }, {
        "To disclaim responsibility for. ": ["disavow", "disavowal", "disbeliever", "disburden"]
    }, {
        "Denial. ": ["disavowal", "disbeliever", "disburden", "disburse"]
    }, {
        "One who refuses to believe. ": ["disbeliever", "disburden", "disburse", "discard"]
    }, {
        "To disencumber. ": ["disburden", "disburse", "discard", "discernible"]
    }, {
        "To pay out or expend, as money from a fund. ": ["disburse", "discard", "discernible", "disciple"]
    }, {
        "To reject. ": ["discard", "discernible", "disciple", "disciplinary"]
    }, {
        "Perceivable. ": ["discernible", "disciple", "disciplinary", "discipline"]
    }, {
        "One who believes the teaching of another, or who adopts and follows some doctrine. ": ["disciple", "disciplinary", "discipline", "disclaim"]
    }, {
        "Having the nature of systematic training or subjection to authority. ": ["disciplinary", "discipline", "disclaim", "discolor"]
    }, {
        "To train to obedience. ": ["discipline", "disclaim", "discolor", "discomfit"]
    }, {
        "To disavow any claim to, connection with, or responsibility to. ": ["disclaim", "discolor", "discomfit", "discomfort"]
    }, {
        "To stain. ": ["discolor", "discomfit", "discomfort", "disconnect"]
    }, {
        "To put to confusion. ": ["discomfit", "discomfort", "disconnect", "disconsolate"]
    }, {
        "The state of being positively uncomfortable. ": ["discomfort", "disconnect", "disconsolate", "discontinuance"]
    }, {
        "To undo or dissolve the connection or association of. ": ["disconnect", "disconsolate", "discontinuance", "discord"]
    }, {
        "Grief-stricken. ": ["disconsolate", "discontinuance", "discord", "discountenance"]
    }, {
        "Interruption or intermission. ": ["discontinuance", "discord", "discountenance", "discover"]
    }, {
        "Absence of harmoniousness. ": ["discord", "discountenance", "discover", "discredit"]
    }, {
        "To look upon with disfavor. ": ["discountenance", "discover", "discredit", "discreet"]
    }, {
        "To get first sight or knowledge of, as something previously unknown or unperceived. ": ["discover", "discredit", "discreet", "discrepant"]
    }, {
        "To injure the reputation of. ": ["discredit", "discreet", "discrepant", "discriminate"]
    }, {
        "Judicious. ": ["discreet", "discrepant", "discriminate", "discursive"]
    }, {
        "Opposite. ": ["discrepant", "discriminate", "discursive", "discussion"]
    }, {
        "To draw a distinction. ": ["discriminate", "discursive", "discussion", "disenfranchise"]
    }, {
        "Passing from one subject to another. ": ["discursive", "discussion", "disenfranchise", "disengage"]
    }, {
        "Debate. ": ["discussion", "disenfranchise", "disengage", "disfavor"]
    }, {
        "To deprive of any right privilege or power ": ["disenfranchise", "disengage", "disfavor", "disfigure"]
    }, {
        "To become detached. ": ["disengage", "disfavor", "disfigure", "dishabille"]
    }, {
        "Disregard. ": ["disfavor", "disfigure", "dishabille", "dishonest"]
    }, {
        "To impair or injure the beauty, symmetry, or appearance of. ": ["disfigure", "dishabille", "dishonest", "disillusion"]
    }, {
        "Undress or negligent attire. ": ["dishabille", "dishonest", "disillusion", "disinfect"]
    }, {
        "Untrustworthy. ": ["dishonest", "disillusion", "disinfect", "disinfectant"]
    }, {
        "To disenchant. ": ["disillusion", "disinfect", "disinfectant", "disinherit"]
    }, {
        "To remove or destroy the poison of infectious or contagious diseases. ": ["disinfect", "disinfectant", "disinherit", "disinterested"]
    }, {
        "A substance used to destroy the germs of infectious diseases. ": ["disinfectant", "disinherit", "disinterested", "disjunctive"]
    }, {
        "To deprive of an inheritance. ": ["disinherit", "disinterested", "disjunctive", "dislocate"]
    }, {
        "Impartial. ": ["disinterested", "disjunctive", "dislocate", "dismissal"]
    }, {
        "Helping or serving to disconnect or separate. ": ["disjunctive", "dislocate", "dismissal", "dismount"]
    }, {
        "To put out of proper place or order. ": ["dislocate", "dismissal", "dismount", "disobedience"]
    }, {
        "Displacement by authority from an office or an employment. ": ["dismissal", "dismount", "disobedience", "disobedient"]
    }, {
        "To throw down, push off, or otherwise remove from a horse or the like. ": ["dismount", "disobedience", "disobedient", "disown"]
    }, {
        "Neglect or refusal to comply with an authoritative injunction. ": ["disobedience", "disobedient", "disown", "disparage"]
    }, {
        "Neglecting or refusing to obey. ": ["disobedient", "disown", "disparage", "disparity"]
    }, {
        "To refuse to acknowledge as one's own or as connected with oneself. ": ["disown", "disparage", "disparity", "dispel"]
    }, {
        "To regard or speak of slightingly. ": ["disparage", "disparity", "dispel", "dispensation"]
    }, {
        "Inequality. ": ["disparity", "dispel", "dispensation", "displace"]
    }, {
        "To drive away by or as by scattering in different directions. ": ["dispel", "dispensation", "displace", "dispossess"]
    }, {
        "That which is bestowed on or appointed to one from a higher power. ": ["dispensation", "displace", "dispossess", "disputation"]
    }, {
        "To put out of the proper or accustomed place. ": ["displace", "dispossess", "disputation", "disqualify"]
    }, {
        "To deprive of actual occupancy, especially of real estate. ": ["dispossess", "disputation", "disqualify", "disquiet"]
    }, {
        "Verbal controversy. ": ["disputation", "disqualify", "disquiet", "disregard"]
    }, {
        "To debar. ": ["disqualify", "disquiet", "disregard", "disreputable"]
    }, {
        "To deprive of peace or tranquillity.": ["disquiet", "disregard", "disreputable", "disrepute"]
    }, {
        "To take no notice of. ": ["disregard", "disreputable", "disrepute", "disrobe"]
    }, {
        "Dishonorable or disgraceful. ": ["disreputable", "disrepute", "disrobe", "disrupt"]
    }, {
        "A bad name or character. ": ["disrepute", "disrobe", "disrupt", "dissatisfy"]
    }, {
        "To unclothe. ": ["disrobe", "disrupt", "dissatisfy", "dissect"]
    }, {
        "To burst or break asunder. ": ["disrupt", "dissatisfy", "dissect", "dissection"]
    }, {
        "To displease. ": ["dissatisfy", "dissect", "dissection", "dissemble"]
    }, {
        "To cut apart or to pieces. ": ["dissect", "dissection", "dissemble", "disseminate"]
    }, {
        "The act or operation of cutting in pieces, specifically of a plant or an animal. ": ["dissection", "dissemble", "disseminate", "dissension"]
    }, {
        "To hide by pretending something different. ": ["dissemble", "disseminate", "dissension", "dissent"]
    }, {
        "To sow or scatter abroad, as seed is sown. ": ["disseminate", "dissension", "dissent", "dissentient"]
    }, {
        "Angry or violent difference of opinion. ": ["dissension", "dissent", "dissentient", "dissentious"]
    }, {
        "Disagreement. ": ["dissent", "dissentient", "dissentious", "dissertation"]
    }, {
        "One who disagrees. ": ["dissentient", "dissentious", "dissertation", "disservice"]
    }, {
        "Contentious. ": ["dissentious", "dissertation", "disservice", "dissever"]
    }, {
        "Thesis. ": ["dissertation", "disservice", "dissever", "dissimilar"]
    }, {
        "An ill turn. ": ["disservice", "dissever", "dissimilar", "dissipate"]
    }, {
        "To divide. ": ["dissever", "dissimilar", "dissipate", "dissipation"]
    }, {
        "Different. ": ["dissimilar", "dissipate", "dissipation", "dissolute"]
    }, {
        "To disperse or disappear. ": ["dissipate", "dissipation", "dissolute", "dissolution"]
    }, {
        "The state of being dispersed or scattered. ": ["dissipation", "dissolute", "dissolution", "dissolve"]
    }, {
        "Lewd. ": ["dissolute", "dissolution", "dissolve", "dissonance"]
    }, {
        "A breaking up of a union of persons. ": ["dissolution", "dissolve", "dissonance", "dissonant"]
    }, {
        "To liquefy or soften, as by heat or moisture. ": ["dissolve", "dissonance", "dissonant", "dissuade"]
    }, {
        "Discord. ": ["dissonance", "dissonant", "dissuade", "dissuasion"]
    }, {
        "Harsh or disagreeable in sound. ": ["dissonant", "dissuade", "dissuasion", "disyllable"]
    }, {
        "To change the purpose or alter the plans of by persuasion, counsel, or pleading. ": ["dissuade", "dissuasion", "disyllable", "distemper"]
    }, {
        "The act of changing the purpose of or altering the plans of through persuasion, or pleading. ": ["dissuasion", "disyllable", "distemper", "distend"]
    }, {
        "A word of two syllables. ": ["disyllable", "distemper", "distend", "distensible"]
    }, {
        "A disease or malady. ": ["distemper", "distend", "distensible", "distention"]
    }, {
        "To stretch out or expand in every direction. ": ["distend", "distensible", "distention", "distill"]
    }, {
        "Capable of being stretched out or expanded in every direction. ": ["distensible", "distention", "distill", "distillation"]
    }, {
        "Expansion. ": ["distention", "distill", "distillation", "distiller"]
    }, {
        "To extract or produce by vaporization and condensation. ": ["distill", "distillation", "distiller", "distinction"]
    }, {
        "Separation of the more volatile parts of a substance from those less volatile. ": ["distillation", "distiller", "distinction", "distort"]
    }, {
        "One occupied in the business of distilling alcoholic liquors. ": ["distiller", "distinction", "distort", "distrain"]
    }, {
        "A note or designation of honor, officially recognizing superiority or success in studies. ": ["distinction", "distort", "distrain", "distrainor"]
    }, {
        "To twist into an unnatural or irregular form. ": ["distort", "distrain", "distrainor", "distraught"]
    }, {
        "To subject a person to distress. ": ["distrain", "distrainor", "distraught", "distrust"]
    }, {
        "One who subjects a person to distress. ": ["distrainor", "distraught", "distrust", "disunion"]
    }, {
        "Bewildered. ": ["distraught", "distrust", "disunion", "diurnal"]
    }, {
        "Lack of confidence in the power, wisdom, or good intent of any person. ": ["distrust", "disunion", "diurnal", "divagation"]
    }, {
        "Separation of relations or interests. ": ["disunion", "diurnal", "divagation", "divergent"]
    }, {
        "Daily. ": ["diurnal", "divagation", "divergent", "diverse"]
    }, {
        "Digression. ": ["divagation", "divergent", "diverse", "diversion"]
    }, {
        "Tending in different directions. ": ["divergent", "diverse", "diversion", "diversity"]
    }, {
        "Capable of various forms. ": ["diverse", "diversion", "diversity", "divert"]
    }, {
        "Pastime. ": ["diversion", "diversity", "divert", "divertible"]
    }, {
        "Dissimilitude. ": ["diversity", "divert", "divertible", "divest"]
    }, {
        "To turn from the accustomed course or a line of action already established. ": ["divert", "divertible", "divest", "divination"]
    }, {
        "Able to be turned from the accustomed course or a line of action already established. ": ["divertible", "divest", "divination", "divinity"]
    }, {
        "To strip, specifically of clothes, ornaments, or accouterments or disinvestment. ": ["divest", "divination", "divinity", "divisible"]
    }, {
        "The pretended forecast of future events or discovery of what is lost or hidden. ": ["divination", "divinity", "divisible", "divisor"]
    }, {
        "The quality or character of being godlike. ": ["divinity", "divisible", "divisor", "divulge"]
    }, {
        "Capable of being separated into parts. ": ["divisible", "divisor", "divulge", "divulgence"]
    }, {
        "That by which a number or quantity is divided. ": ["divisor", "divulge", "divulgence", "docile"]
    }, {
        "To tell or make known, as something previously private or secret. ": ["divulge", "divulgence", "docile", "docket"]
    }, {
        "A divulging. ": ["divulgence", "docile", "docket", "doe"]
    }, {
        "Easy to manage. ": ["docile", "docket", "doe", "dogma"]
    }, {
        "The registry of judgments of a court. ": ["docket", "doe", "dogma", "dogmatic"]
    }, {
        "The female of the deer. ": ["doe", "dogma", "dogmatic", "dogmatize"]
    }, {
        "A statement of religious faith or duty formulated by a body claiming authority. ": ["dogma", "dogmatic", "dogmatize", "doleful"]
    }, {
        "Making statements without argument or evidence. ": ["dogmatic", "dogmatize", "doleful", "dolesome"]
    }, {
        "To make positive assertions without supporting them by argument or evidence. ": ["dogmatize", "doleful", "dolesome", "dolor"]
    }, {
        "Melancholy. ": ["doleful", "dolesome", "dolor", "dolorous"]
    }, {
        "Melancholy. ": ["dolesome", "dolor", "dolorous", "domain"]
    }, {
        "Lamentation. ": ["dolor", "dolorous", "domain", "domesticity"]
    }, {
        "Expressing or causing sorrow or pain. ": ["dolorous", "domain", "domesticity", "domicile"]
    }, {
        "A sphere or field of action or interest. ": ["domain", "domesticity", "domicile", "dominance"]
    }, {
        "Life in or fondness for one's home and family. ": ["domesticity", "domicile", "dominance", "dominant"]
    }, {
        "The place where one lives. ": ["domicile", "dominance", "dominant", "dominate"]
    }, {
        "Ascendancy. ": ["dominance", "dominant", "dominate", "domination"]
    }, {
        "Conspicuously prominent. ": ["dominant", "dominate", "domination", "domineer"]
    }, {
        "To influence controllingly. ": ["dominate", "domination", "domineer", "donate"]
    }, {
        "Control by the exercise of power or constituted authority. ": ["domination", "domineer", "donate", "donator"]
    }, {
        "To rule with insolence or unnecessary annoyance. ": ["domineer", "donate", "donator", "donee"]
    }, {
        "To bestow as a gift, especially for a worthy cause. ": ["donate", "donator", "donee", "donor"]
    }, {
        "One who makes a donation or present. ": ["donator", "donee", "donor", "dormant"]
    }, {
        "A person to whom a donation is made. ": ["donee", "donor", "dormant", "doublet"]
    }, {
        "One who makes a donation or present. ": ["donor", "dormant", "doublet", "doubly"]
    }, {
        "Being in a state of or resembling sleep. ": ["dormant", "doublet", "doubly", "dowry"]
    }, {
        "One of a pair of like things. ": ["doublet", "doubly", "dowry", "drachma"]
    }, {
        "In twofold degree or extent. ": ["doubly", "dowry", "drachma", "dragnet"]
    }, {
        "The property which a wife brings to her husband in marriage. ": ["dowry", "drachma", "dragnet", "dragoon"]
    }, {
        "A modern and an ancient Greek coin. ": ["drachma", "dragnet", "dragoon", "drainage"]
    }, {
        "A net to be drawn along the bottom of the water. ": ["dragnet", "dragoon", "drainage", "dramatist"]
    }, {
        "In the British army, a cavalryman. ": ["dragoon", "drainage", "dramatist", "dramatize"]
    }, {
        "The means of draining collectively, as a system of conduits, trenches, pipes, etc. ": ["drainage", "dramatist", "dramatize", "drastic"]
    }, {
        "One who writes plays. ": ["dramatist", "dramatize", "drastic", "drought"]
    }, {
        "To relate or represent in a dramatic or theatrical manner. ": ["dramatize", "drastic", "drought", "drowsy"]
    }, {
        "Acting vigorously. ": ["drastic", "drought", "drowsy", "drudgery"]
    }, {
        "Dry weather, especially when so long continued as to cause vegetation to wither. ": ["drought", "drowsy", "drudgery", "dubious"]
    }, {
        "Heavy with sleepiness. ": ["drowsy", "drudgery", "dubious", "duckling"]
    }, {
        "Hard and constant work in any menial or dull occupation. ": ["drudgery", "dubious", "duckling", "ductile"]
    }, {
        "Doubtful. ": ["dubious", "duckling", "ductile", "duet"]
    }, {
        "A young duck. ": ["duckling", "ductile", "duet", "dun"]
    }, {
        "Capable of being drawn out, as into wire or a thread. ": ["ductile", "duet", "dun", "duplex"]
    }, {
        "A composition for two voices or instruments. ": ["duet", "dun", "duplex", "duplicity"]
    }, {
        "To make a demand or repeated demands on for payment. ": ["dun", "duplex", "duplicity", "durance"]
    }, {
        "Having two parts. ": ["duplex", "duplicity", "durance", "duration"]
    }, {
        "Double-dealing. ": ["duplicity", "durance", "duration", "duteous"]
    }, {
        "Confinement. ": ["durance", "duration", "duteous", "dutiable"]
    }, {
        "The period of time during which anything lasts. ": ["duration", "duteous", "dutiable", "dutiful"]
    }, {
        "Showing submission to natural superiors. ": ["duteous", "dutiable", "dutiful", "dwindle"]
    }, {
        "Subject to a duty, especially a customs duty. ": ["dutiable", "dutiful", "dwindle", "dyne"]
    }, {
        "Obedient. ": ["dutiful", "dwindle", "dyne", "earnest"]
    }, {
        "To diminish or become less. ": ["dwindle", "dyne", "earnest", "earthenware"]
    }, {
        "The force which, applied to a mass of one gram for 1 second, would give it a velocity of 1 cm/s. ": ["dyne", "earnest", "earthenware", "eatable"]
    }, {
        "Ardent in spirit and speech. ": ["earnest", "earthenware", "eatable", "ebullient"]
    }, {
        "Anything made of clay and baked in a kiln or dried in the sun. ": ["earthenware", "eatable", "ebullient", "eccentric"]
    }, {
        "Edible. ": ["eatable", "ebullient", "eccentric", "eccentricity"]
    }, {
        "Showing enthusiasm or exhilaration of feeling. ": ["ebullient", "eccentric", "eccentricity", "eclipse"]
    }, {
        "Peculiar. ": ["eccentric", "eccentricity", "eclipse", "economize"]
    }, {
        "Idiosyncrasy. ": ["eccentricity", "eclipse", "economize", "ecstasy"]
    }, {
        "The obstruction of a heavenly body by its entering into the shadow of another body. ": ["eclipse", "economize", "ecstasy", "ecstatic"]
    }, {
        "To spend sparingly. ": ["economize", "ecstasy", "ecstatic", "edible"]
    }, {
        "Rapturous excitement or exaltation. ": ["ecstasy", "ecstatic", "edible", "edict"]
    }, {
        "Enraptured. ": ["ecstatic", "edible", "edict", "edify"]
    }, {
        "Suitable to be eaten. ": ["edible", "edict", "edify", "editorial"]
    }, {
        "That which is uttered or proclaimed by authority as a rule of action. ": ["edict", "edify", "editorial", "educe"]
    }, {
        "To build up, or strengthen, especially in morals or religion. ": ["edify", "editorial", "educe", "efface"]
    }, {
        "An article in a periodical written by the editor and published as an official argument. ": ["editorial", "educe", "efface", "effect"]
    }, {
        "To draw out. ": ["educe", "efface", "effect", "effective"]
    }, {
        "To obliterate. ": ["efface", "effect", "effective", "effectual"]
    }, {
        "A consequence. ": ["effect", "effective", "effectual", "effeminacy"]
    }, {
        "Fit for a destined purpose. ": ["effective", "effectual", "effeminacy", "effeminate"]
    }, {
        "Efficient. ": ["effectual", "effeminacy", "effeminate", "effervesce"]
    }, {
        "Womanishness. ": ["effeminacy", "effeminate", "effervesce", "effervescent"]
    }, {
        "Having womanish traits or qualities. ": ["effeminate", "effervesce", "effervescent", "effete"]
    }, {
        "To bubble up. ": ["effervesce", "effervescent", "effete", "efficacious"]
    }, {
        "Giving off bubbles of gas. ": ["effervescent", "effete", "efficacious", "efficacy"]
    }, {
        "Exhausted, as having performed its functions. ": ["effete", "efficacious", "efficacy", "efficiency"]
    }, {
        "Effective. ": ["efficacious", "efficacy", "efficiency", "efficient"]
    }, {
        "The power to produce an intended effect as shown in the production of it. ": ["efficacy", "efficiency", "efficient", "efflorescence"]
    }, {
        "The state of possessing adequate skill or knowledge for the performance of a duty. ": ["efficiency", "efficient", "efflorescence", "efflorescent"]
    }, {
        "Having and exercising the power to produce effects or results. ": ["efficient", "efflorescence", "efflorescent", "effluvium"]
    }, {
        "The state of being flowery, or a flowery appearance. ": ["efflorescence", "efflorescent", "effluvium", "effrontery"]
    }, {
        "Opening in flower. ": ["efflorescent", "effluvium", "effrontery", "effulgence"]
    }, {
        "A noxious or ill-smelling exhalation from decaying or putrefying matter. ": ["effluvium", "effrontery", "effulgence", "effuse"]
    }, {
        "Unblushing impudence. ": ["effrontery", "effulgence", "effuse", "effusion"]
    }, {
        "Splendor. ": ["effulgence", "effuse", "effusion", "egoism"]
    }, {
        "To pour forth. ": ["effuse", "effusion", "egoism", "egoist"]
    }, {
        "an outpouring. ": ["effusion", "egoism", "egoist", "egotism"]
    }, {
        "The theory that places man's chief good in the completeness of self. ": ["egoism", "egoist", "egotism", "egotist"]
    }, {
        "One who advocates or practices egoism. ": ["egoist", "egotism", "egotist", "egregious"]
    }, {
        "Self-conceit. ": ["egotism", "egotist", "egregious", "egress"]
    }, {
        "One given to self-mention or who is constantly telling of his own views and experiences. ": ["egotist", "egregious", "egress", "eject"]
    }, {
        "Extreme. ": ["egregious", "egress", "eject", "elapse"]
    }, {
        "Any place of exit. ": ["egress", "eject", "elapse", "elasticity"]
    }, {
        "To expel. ": ["eject", "elapse", "elasticity", "electrolysis"]
    }, {
        "To quietly terminate: said of time. ": ["elapse", "elasticity", "electrolysis", "electrotype"]
    }, {
        "That property of matter by which a body tends to return to a former shape after being changed. ": ["elasticity", "electrolysis", "electrotype", "elegy"]
    }, {
        "The process of decomposing a chemical compound by the passage of an electric current. ": ["electrolysis", "electrotype", "elegy", "element"]
    }, {
        "A metallic copy of any surface, as a coin. ": ["electrotype", "elegy", "element", "elicit"]
    }, {
        "A lyric poem lamenting the dead. ": ["elegy", "element", "elicit", "eligible"]
    }, {
        "A component or essential part. ": ["element", "elicit", "eligible", "eliminate"]
    }, {
        "To educe or extract gradually or without violence. ": ["elicit", "eligible", "eliminate", "Elizabethan"]
    }, {
        "Qualified for selection. ": ["eligible", "eliminate", "Elizabethan", "elocution"]
    }, {
        "To separate and cast aside. ": ["eliminate", "Elizabethan", "elocution", "eloquent"]
    }, {
        "Relating to Elizabeth, queen of England, or to her era. ": ["Elizabethan", "elocution", "eloquent", "elucidate"]
    }, {
        "The art of correct intonation, inflection, and gesture in public speaking or reading. ": ["elocution", "eloquent", "elucidate", "elude"]
    }, {
        "Having the ability to express emotion or feeling in lofty and impassioned speech. ": ["eloquent", "elucidate", "elude", "elusion"]
    }, {
        "To bring out more clearly the facts concerning. ": ["elucidate", "elude", "elusion", "emaciate"]
    }, {
        "To evade the search or pursuit of by dexterity or artifice. ": ["elude", "elusion", "emaciate", "emanate"]
    }, {
        "Evasion. ": ["elusion", "emaciate", "emanate", "emancipate"]
    }, {
        "To waste away in flesh. ": ["emaciate", "emanate", "emancipate", "embargo"]
    }, {
        "To flow forth or proceed, as from some source. ": ["emanate", "emancipate", "embargo", "embark"]
    }, {
        "To release from bondage. ": ["emancipate", "embargo", "embark", "embarrass"]
    }, {
        "Authoritative stoppage of foreign commerce or of any special trade. ": ["embargo", "embark", "embarrass", "embellish"]
    }, {
        "To make a beginning in some occupation or scheme. ": ["embark", "embarrass", "embellish", "embezzle"]
    }, {
        "To render flustered or agitated. ": ["embarrass", "embellish", "embezzle", "emblazon"]
    }, {
        "To make beautiful or elegant by adding attractive or ornamental features. ": ["embellish", "embezzle", "emblazon", "emblem"]
    }, {
        "To misappropriate secretly. ": ["embezzle", "emblazon", "emblem", "embody"]
    }, {
        "To set forth publicly or in glowing terms. ": ["emblazon", "emblem", "embody", "embolden"]
    }, {
        "A symbol. ": ["emblem", "embody", "embolden", "embolism"]
    }, {
        "To express, formulate, or exemplify in a concrete, compact or visible form. ": ["embody", "embolden", "embolism", "embroil"]
    }, {
        "To give courage to. ": ["embolden", "embolism", "embroil", "emerge"]
    }, {
        "An obstruction or plugging up of an artery or other blood-vessel. ": ["embolism", "embroil", "emerge", "emergence"]
    }, {
        "To involve in dissension or strife. ": ["embroil", "emerge", "emergence", "emergent"]
    }, {
        "To come into view or into existence. ": ["emerge", "emergence", "emergent", "emeritus"]
    }, {
        "A coming into view. ": ["emergence", "emergent", "emeritus", "emigrant"]
    }, {
        "Coming into view. ": ["emergent", "emeritus", "emigrant", "emigrate"]
    }, {
        "Retired from active service but retained to an honorary position. ": ["emeritus", "emigrant", "emigrate", "eminence"]
    }, {
        "One who moves from one place to settle in another. ": ["emigrant", "emigrate", "eminence", "eminent"]
    }, {
        "To go from one country, state, or region for the purpose of settling or residing in another. ": ["emigrate", "eminence", "eminent", "emit"]
    }, {
        "An elevated position with respect to rank, place, character, condition, etc. ": ["eminence", "eminent", "emit", "emphasis"]
    }, {
        "High in station, merit, or esteem. ": ["eminent", "emit", "emphasis", "emphasize"]
    }, {
        "To send or give out. ": ["emit", "emphasis", "emphasize", "emphatic"]
    }, {
        "Any special impressiveness added to an utterance or act, or stress laid upon some word. ": ["emphasis", "emphasize", "emphatic", "employee"]
    }, {
        "To articulate or enunciate with special impressiveness upon a word, or a group of words. ": ["emphasize", "emphatic", "employee", "employer"]
    }, {
        "Spoken with any special impressiveness laid upon an act, word, or set of words. ": ["emphatic", "employee", "employer", "emporium"]
    }, {
        "One who works for wages or a salary. ": ["employee", "employer", "emporium", "empower"]
    }, {
        "One who uses or engages the services of other persons for pay. ": ["employer", "emporium", "empower", "emulate"]
    }, {
        "A bazaar or shop. ": ["emporium", "empower", "emulate", "enact"]
    }, {
        "To delegate authority to. ": ["empower", "emulate", "enact", "enamor"]
    }, {
        "To imitate with intent to equal or surpass. ": ["emulate", "enact", "enamor", "encamp"]
    }, {
        "To make into law, as by legislative act. ": ["enact", "enamor", "encamp", "encomium"]
    }, {
        "To inspire with ardent love. ": ["enamor", "encamp", "encomium", "encompass"]
    }, {
        "To pitch tents for a resting-place. ": ["encamp", "encomium", "encompass", "encore"]
    }, {
        "A formal or discriminating expression of praise. ": ["encomium", "encompass", "encore", "encourage"]
    }, {
        "To encircle. ": ["encompass", "encore", "encourage", "encroach"]
    }, {
        "The call for a repetition, as of some part of a play or performance. ": ["encore", "encourage", "encroach", "encumber"]
    }, {
        "To inspire with courage, hope, or strength of mind. ": ["encourage", "encroach", "encumber", "encyclical"]
    }, {
        "To invade partially or insidiously and appropriate the possessions of another. ": ["encroach", "encumber", "encyclical", "encyclopedia"]
    }, {
        "To impede with obstacles. ": ["encumber", "encyclical", "encyclopedia", "endanger"]
    }, {
        "Intended for general circulation. ": ["encyclical", "encyclopedia", "endanger", "endear"]
    }, {
        "A work containing information on subjects, or exhaustive of one subject. ": ["encyclopedia", "endanger", "endear", "endemic"]
    }, {
        "To expose to peril. ": ["endanger", "endear", "endemic", "endue"]
    }, {
        "To cause to be loved. ": ["endear", "endemic", "endue", "endurable"]
    }, {
        "Peculiar to some specified country or people. ": ["endemic", "endue", "endurable", "endurance"]
    }, {
        "To endow with some quality, gift, or grace, usually spiritual. ": ["endue", "endurable", "endurance", "energetic"]
    }, {
        "Tolerable. ": ["endurable", "endurance", "energetic", "enervate"]
    }, {
        "The ability to suffer pain, distress, hardship, or stress of any kind without succumbing. ": ["endurance", "energetic", "enervate", "enfeeble"]
    }, {
        "Working vigorously. ": ["energetic", "enervate", "enfeeble", "enfranchise"]
    }, {
        "To render ineffective or inoperative. ": ["enervate", "enfeeble", "enfranchise", "engender"]
    }, {
        "To debilitate. ": ["enfeeble", "enfranchise", "engender", "engrave"]
    }, {
        "To endow with a privilege, especially with the right to vote. ": ["enfranchise", "engender", "engrave", "engross"]
    }, {
        "To produce. ": ["engender", "engrave", "engross", "enhance"]
    }, {
        "To cut or carve in or upon some surface. ": ["engrave", "engross", "enhance", "enigma"]
    }, {
        "To occupy completely. ": ["engross", "enhance", "enigma", "enjoin"]
    }, {
        "To intensify. ": ["enhance", "enigma", "enjoin", "enkindle"]
    }, {
        "A riddle. ": ["enigma", "enjoin", "enkindle", "enlighten"]
    }, {
        "To command. ": ["enjoin", "enkindle", "enlighten", "enlist"]
    }, {
        "To set on fire. ": ["enkindle", "enlighten", "enlist", "enmity"]
    }, {
        "To cause to see clearly. ": ["enlighten", "enlist", "enmity", "ennoble"]
    }, {
        "To enter voluntarily the military service by formal enrollment. ": ["enlist", "enmity", "ennoble", "enormity"]
    }, {
        "Hatred. ": ["enmity", "ennoble", "enormity", "enormous"]
    }, {
        "To dignify. ": ["ennoble", "enormity", "enormous", "enrage"]
    }, {
        "Immensity. ": ["enormity", "enormous", "enrage", "enrapture"]
    }, {
        "Gigantic. ": ["enormous", "enrage", "enrapture", "enshrine"]
    }, {
        "To infuriate. ": ["enrage", "enrapture", "enshrine", "ensnare"]
    }, {
        "To delight extravagantly or intensely. ": ["enrapture", "enshrine", "ensnare", "entail"]
    }, {
        "To keep sacred. ": ["enshrine", "ensnare", "entail", "entangle"]
    }, {
        "To entrap. ": ["ensnare", "entail", "entangle", "enthrall"]
    }, {
        "To involve; necessitate. ": ["entail", "entangle", "enthrall", "enthrone"]
    }, {
        "To involve in difficulties, confusion, or complications. ": ["entangle", "enthrall", "enthrone", "enthuse"]
    }, {
        "To bring or hold under any overmastering influence. ": ["enthrall", "enthrone", "enthuse", "enthusiastic"]
    }, {
        "To invest with sovereign power. ": ["enthrone", "enthuse", "enthusiastic", "entirety"]
    }, {
        "To yield to or display intense and rapturous feeling. ": ["enthuse", "enthusiastic", "entirety", "entomology"]
    }, {
        "Full of zeal and fervor. ": ["enthusiastic", "entirety", "entomology", "entrails"]
    }, {
        "A complete thing. ": ["entirety", "entomology", "entrails", "entreaty"]
    }, {
        "The branch of zoology that treats of insects. ": ["entomology", "entrails", "entreaty", "entree"]
    }, {
        "pl. The internal parts of an animal. ": ["entrails", "entreaty", "entree", "entrench"]
    }, {
        "An earnest request. ": ["entreaty", "entree", "entrench", "entwine"]
    }, {
        "The act of entering. ": ["entree", "entrench", "entwine", "enumerate"]
    }, {
        "To fortify or protect, as with a trench or ditch and wall. ": ["entrench", "entwine", "enumerate", "epic"]
    }, {
        "To interweave. ": ["entwine", "enumerate", "epic", "epicure"]
    }, {
        "To name one by one. ": ["enumerate", "epic", "epicure", "Epicurean"]
    }, {
        "A poem celebrating in formal verse the mythical achievements of great personages, heroes, etc. ": ["epic", "epicure", "Epicurean", "epicycle"]
    }, {
        "One who cultivates a delicate taste for eating and drinking. ": ["epicure", "Epicurean", "epicycle", "epicycloid"]
    }, {
        "Indulging, ministering, or pertaining to daintiness of appetite. ": ["Epicurean", "epicycle", "epicycloid", "epidemic"]
    }, {
        "A circle that rolls upon the external or internal circumference of another circle. ": ["epicycle", "epicycloid", "epidemic", "epidermis"]
    }, {
        "A curve traced by a point on the circumference of a circle which rolls upon another circle. ": ["epicycloid", "epidemic", "epidermis", "epigram"]
    }, {
        "Wide-spread occurrence of a disease in a certain region. ": ["epidemic", "epidermis", "epigram", "epilogue"]
    }, {
        "The outer skin. ": ["epidermis", "epigram", "epilogue", "epiphany"]
    }, {
        "A pithy phrasing of a shrewd observation. ": ["epigram", "epilogue", "epiphany", "episode"]
    }, {
        "The close of a narrative or dramatic poem. ": ["epilogue", "epiphany", "episode", "epitaph"]
    }, {
        "Any appearance or bodily manifestation of a deity. ": ["epiphany", "episode", "epitaph", "epithet"]
    }, {
        "An incident or story in a literary work, separable from yet growing out of it. ": ["episode", "epitaph", "epithet", "epitome"]
    }, {
        "An inscription on a tomb or monument in honor or in memory of the dead. ": ["epitaph", "epithet", "epitome", "epizootic"]
    }, {
        "Word used adjectivally to describe some quality or attribute of is objects, as in \"Father Aeneas\".": ["epithet", "epitome", "epizootic", "epoch"]
    }, {
        "A simplified representation. ": ["epitome", "epizootic", "epoch", "epode"]
    }, {
        "Prevailing among animals. ": ["epizootic", "epoch", "epode", "equalize"]
    }, {
        "A interval of time, memorable for extraordinary events. ": ["epoch", "epode", "equalize", "equanimity"]
    }, {
        "A species of lyric poems. ": ["epode", "equalize", "equanimity", "equestrian"]
    }, {
        "To render uniform. ": ["equalize", "equanimity", "equestrian", "equilibrium"]
    }, {
        "Evenness of mind or temper. ": ["equanimity", "equestrian", "equilibrium", "equitable"]
    }, {
        "Pertaining to horses or horsemanship. ": ["equestrian", "equilibrium", "equitable", "equity"]
    }, {
        "A state of balance. ": ["equilibrium", "equitable", "equity", "equivalent"]
    }, {
        "Characterized by fairness. ": ["equitable", "equity", "equivalent", "equivocal"]
    }, {
        "Fairness or impartiality. ": ["equity", "equivalent", "equivocal", "equivocate"]
    }, {
        "Equal in value, force, meaning, or the like. ": ["equivalent", "equivocal", "equivocate", "eradicate"]
    }, {
        "Ambiguous. ": ["equivocal", "equivocate", "eradicate", "errant"]
    }, {
        "To use words of double meaning. ": ["equivocate", "eradicate", "errant", "erratic"]
    }, {
        "To destroy thoroughly. ": ["eradicate", "errant", "erratic", "erroneous"]
    }, {
        "Roving or wandering, as in search of adventure or opportunity for gallant deeds. ": ["errant", "erratic", "erroneous", "erudite"]
    }, {
        "Irregular. ": ["erratic", "erroneous", "erudite", "erudition"]
    }, {
        "Incorrect. ": ["erroneous", "erudite", "erudition", "eschew"]
    }, {
        "Very-learned. ": ["erudite", "erudition", "eschew", "espy"]
    }, {
        "Extensive knowledge of literature, history, language, etc. ": ["erudition", "eschew", "espy", "esquire"]
    }, {
        "To keep clear of. ": ["eschew", "espy", "esquire", "essence"]
    }, {
        "To keep close watch. ": ["espy", "esquire", "essence", "esthetic"]
    }, {
        "A title of dignity, office, or courtesy. ": ["esquire", "essence", "esthetic", "estimable"]
    }, {
        "That which makes a thing to be what it is. ": ["essence", "esthetic", "estimable", "estrange"]
    }, {
        "Pertaining to beauty, taste, or the fine arts. ": ["esthetic", "estimable", "estrange", "estuary"]
    }, {
        "Worthy of respect. ": ["estimable", "estrange", "estuary", "et cetera"]
    }, {
        "To alienate. ": ["estrange", "estuary", "et cetera", "eugenic"]
    }, {
        "A wide lower part of a tidal river. ": ["estuary", "et cetera", "eugenic", "eulogize"]
    }, {
        "And so forth. ": ["et cetera", "eugenic", "eulogize", "eulogy"]
    }, {
        "Relating to the development and improvement of race. ": ["eugenic", "eulogize", "eulogy", "euphemism"]
    }, {
        "To speak or write a laudation of a person's life or character. ": ["eulogize", "eulogy", "euphemism", "euphonious"]
    }, {
        "A spoken or written laudation of a person's life or character. ": ["eulogy", "euphemism", "euphonious", "euphony"]
    }, {
        "A figure of speech by which a phrase less offensive is substituted. ": ["euphemism", "euphonious", "euphony", "eureka "]
    }, {
        "Characterized by agreeableness of sound. ": ["euphonious", "euphony", "eureka ", "evade"]
    }, {
        "Agreeableness of sound. ": ["euphony", "eureka ", "evade", "evanesce"]
    }, {
        " I have found it. ": ["eureka ", "evade", "evanesce", "evanescent"]
    }, {
        "To avoid by artifice. ": ["evade", "evanesce", "evanescent", "evangelical"]
    }, {
        "To vanish gradually. ": ["evanesce", "evanescent", "evangelical", "evangelist"]
    }, {
        "Fleeting. ": ["evanescent", "evangelical", "evangelist", "evasion"]
    }, {
        "Seeking the conversion of sinners. ": ["evangelical", "evangelist", "evasion", "eventual"]
    }, {
        "A preacher who goes from place to place holding services. ": ["evangelist", "evasion", "eventual", "evert"]
    }, {
        "Escape. ": ["evasion", "eventual", "evert", "evict"]
    }, {
        "Ultimate. ": ["eventual", "evert", "evict", "evidential"]
    }, {
        "To turn inside out. ": ["evert", "evict", "evidential", "evince"]
    }, {
        "To dispossess pursuant to judicial decree. ": ["evict", "evidential", "evince", "evoke"]
    }, {
        "Indicative. ": ["evidential", "evince", "evoke", "evolution"]
    }, {
        "To make manifest or evident. ": ["evince", "evoke", "evolution", "evolve"]
    }, {
        "To call or summon forth. ": ["evoke", "evolution", "evolve", "exacerbate"]
    }, {
        "Development or growth. ": ["evolution", "evolve", "exacerbate", "exaggerate"]
    }, {
        "To unfold or expand. ": ["evolve", "exacerbate", "exaggerate", "exasperate"]
    }, {
        "To make more sharp, severe, or virulent. ": ["exacerbate", "exaggerate", "exasperate", "excavate"]
    }, {
        "To overstate. ": ["exaggerate", "exasperate", "excavate", "exceed"]
    }, {
        "To excite great anger in. ": ["exasperate", "excavate", "exceed", "excel"]
    }, {
        "To remove by digging or scooping out. ": ["excavate", "exceed", "excel", "excellence"]
    }, {
        "To go beyond, as in measure, quality, value, action, power, skill, etc. ": ["exceed", "excel", "excellence", "excellency"]
    }, {
        "To be superior or distinguished. ": ["excel", "excellence", "excellency", "excellent"]
    }, {
        "Possession of eminently or unusually good qualities. ": ["excellence", "excellency", "excellent", "excerpt"]
    }, {
        "A title of honor bestowed upon various high officials. ": ["excellency", "excellent", "excerpt", "excess"]
    }, {
        "Possessing distinguished merit. ": ["excellent", "excerpt", "excess", "excitable"]
    }, {
        "An extract or selection from written or printed matter. ": ["excerpt", "excess", "excitable", "excitation"]
    }, {
        "That which passes the ordinary, proper, or required limit, measure, or experience. ": ["excess", "excitable", "excitation", "exclamation"]
    }, {
        "Nervously high-strung. ": ["excitable", "excitation", "exclamation", "exclude"]
    }, {
        "Intensified emotion or action. ": ["excitation", "exclamation", "exclude", "exclusion"]
    }, {
        "An abrupt or emphatic expression of thought or of feeling. ": ["exclamation", "exclude", "exclusion", "excrescence"]
    }, {
        "To shut out purposely or forcibly. ": ["exclude", "exclusion", "excrescence", "excretion"]
    }, {
        "Non-admission. ": ["exclusion", "excrescence", "excretion", "excruciate"]
    }, {
        "Any unnatural addition, outgrowth, or development. ": ["excrescence", "excretion", "excruciate", "excursion"]
    }, {
        "The getting rid of waste matter. ": ["excretion", "excruciate", "excursion", "excusable"]
    }, {
        "To inflict severe pain or agony upon. ": ["excruciate", "excursion", "excusable", "execrable"]
    }, {
        "A journey. ": ["excursion", "excusable", "execrable", "execration"]
    }, {
        "Justifiable. ": ["excusable", "execrable", "execration", "executor"]
    }, {
        "Abominable. ": ["execrable", "execration", "executor", "exegesis"]
    }, {
        "An accursed thing. ": ["execration", "executor", "exegesis", "exemplar"]
    }, {
        "A person nominated by the will of another to execute the will. ": ["executor", "exegesis", "exemplar", "exemplary"]
    }, {
        "Biblical exposition or interpretation. ": ["exegesis", "exemplar", "exemplary", "exemplify"]
    }, {
        "A model, pattern, or original to be copied or imitated. ": ["exemplar", "exemplary", "exemplify", "exempt"]
    }, {
        "Fitted to serve as a model or example worthy of imitation. ": ["exemplary", "exemplify", "exempt", "exert"]
    }, {
        "To show by example. ": ["exemplify", "exempt", "exert", "exhale"]
    }, {
        "Free, clear, or released, as from some liability, or restriction affecting others. ": ["exempt", "exert", "exhale", "exhaust"]
    }, {
        "To make an effort. ": ["exert", "exhale", "exhaust", "exhaustible"]
    }, {
        "To breathe forth. ": ["exhale", "exhaust", "exhaustible", "exhaustion"]
    }, {
        "To empty by draining off the contents. ": ["exhaust", "exhaustible", "exhaustion", "exhaustive"]
    }, {
        "Causing or tending to cause exhaustion. ": ["exhaustible", "exhaustion", "exhaustive", "exhilarate"]
    }, {
        "Deprivation of strength or energy. ": ["exhaustion", "exhaustive", "exhilarate", "exhume"]
    }, {
        "Thorough and complete in execution. ": ["exhaustive", "exhilarate", "exhume", "exigency"]
    }, {
        "To fill with high or cheerful spirits. ": ["exhilarate", "exhume", "exigency", "exigent"]
    }, {
        "To dig out of the earth (what has been buried). ": ["exhume", "exigency", "exigent", "existence"]
    }, {
        "A critical period or condition. ": ["exigency", "exigent", "existence", "exit"]
    }, {
        "Urgent. ": ["exigent", "existence", "exit", "exodus"]
    }, {
        "Possession or continuance of being. ": ["existence", "exit", "exodus", "exonerate"]
    }, {
        "A way or passage out. ": ["exit", "exodus", "exonerate", "exorbitance"]
    }, {
        "A going forth or departure from a place or country, especially of many people. ": ["exodus", "exonerate", "exorbitance", "exorbitant"]
    }, {
        "To relieve or vindicate from accusation, imputation, or blame. ": ["exonerate", "exorbitance", "exorbitant", "exorcise"]
    }, {
        "Extravagance or enormity. ": ["exorbitance", "exorbitant", "exorcise", "exotic"]
    }, {
        "Going beyond usual and proper limits. ": ["exorbitant", "exorcise", "exotic", "expand"]
    }, {
        "To cast or drive out by religious or magical means. ": ["exorcise", "exotic", "expand", "expanse"]
    }, {
        "Foreign. ": ["exotic", "expand", "expanse", "expansion"]
    }, {
        "To increase in range or scope. ": ["expand", "expanse", "expansion", "expatriate"]
    }, {
        "A continuous area or stretch. ": ["expanse", "expansion", "expatriate", "expect"]
    }, {
        "Increase of amount, size, scope, or the like. ": ["expansion", "expatriate", "expect", "expectancy"]
    }, {
        "To drive from one's own country. ": ["expatriate", "expect", "expectancy", "expectorate"]
    }, {
        "To look forward to as certain or probable. ": ["expect", "expectancy", "expectorate", "expediency"]
    }, {
        "The act or state of looking forward to as certain or probable. ": ["expectancy", "expectorate", "expediency", "expedient"]
    }, {
        "To cough up and spit forth. ": ["expectorate", "expediency", "expedient", "expedite"]
    }, {
        "Fitness to meet the requirements of a particular case. ": ["expediency", "expedient", "expedite", "expeditious"]
    }, {
        "Contributing to personal advantage. ": ["expedient", "expedite", "expeditious", "expend"]
    }, {
        "To hasten the movement or progress of. ": ["expedite", "expeditious", "expend", "expense"]
    }, {
        "Speedy. ": ["expeditious", "expend", "expense", "expiate"]
    }, {
        "To spend. ": ["expend", "expense", "expiate", "explicate"]
    }, {
        "The laying out or expending or money or other resources, as time or strength. ": ["expense", "expiate", "explicate", "explicit"]
    }, {
        "To make satisfaction or amends for. ": ["expiate", "explicate", "explicit", "explode"]
    }, {
        "To clear from involvement. ": ["explicate", "explicit", "explode", "explosion"]
    }, {
        "Definite. ": ["explicit", "explode", "explosion", "explosive"]
    }, {
        "To cause to burst in pieces by force from within. ": ["explode", "explosion", "explosive", "exposition"]
    }, {
        "A sudden and violent outbreak. ": ["explosion", "explosive", "exposition", "expository"]
    }, {
        "Pertaining to a sudden and violent outbreak. ": ["explosive", "exposition", "expository", "expostulate"]
    }, {
        "Formal presentation. ": ["exposition", "expository", "expostulate", "exposure"]
    }, {
        "Pertaining to a formal presentation. ": ["expository", "expostulate", "exposure", "expressive"]
    }, {
        "To discuss. ": ["expostulate", "exposure", "expressive", "expulsion"]
    }, {
        "An open situation or position in relation to the sun, elements, or points of the compass. ": ["exposure", "expressive", "expulsion", "extant"]
    }, {
        "Full of meaning. ": ["expressive", "expulsion", "extant", "extemporaneous"]
    }, {
        "Forcible ejection. ": ["expulsion", "extant", "extemporaneous", "extempore"]
    }, {
        "Still existing and known. ": ["extant", "extemporaneous", "extempore", "extensible"]
    }, {
        "Done or made without much or any preparation. ": ["extemporaneous", "extempore", "extensible", "extension"]
    }, {
        "Without studied or special preparation. ": ["extempore", "extensible", "extension", "extensive"]
    }, {
        "Capable of being thrust out. ": ["extensible", "extension", "extensive", "extensor"]
    }, {
        "A reaching or stretching out, as in space, time or scope. ": ["extension", "extensive", "extensor", "extenuate"]
    }, {
        "Extended widely in space, time, or scope. ": ["extensive", "extensor", "extenuate", "exterior"]
    }, {
        "A muscle that causes extension. ": ["extensor", "extenuate", "exterior", "external"]
    }, {
        "To diminish the gravity or importance of. ": ["extenuate", "exterior", "external", "extinct"]
    }, {
        "That which is outside. ": ["exterior", "external", "extinct", "extinguish"]
    }, {
        "Anything relating or belonging to the outside. ": ["external", "extinct", "extinguish", "extol"]
    }, {
        "Being no longer in existence. ": ["extinct", "extinguish", "extol", "extort"]
    }, {
        "To render extinct. ": ["extinguish", "extol", "extort", "extortion"]
    }, {
        "To praise in the highest terms. ": ["extol", "extort", "extortion", "extradite"]
    }, {
        "To obtain by violence, threats, compulsion, or the subjection of another to some necessity. ": ["extort", "extortion", "extradite", "extradition"]
    }, {
        "The practice of obtaining by violence or compulsion. ": ["extortion", "extradite", "extradition", "extrajudicial"]
    }, {
        "To surrender the custody of. ": ["extradite", "extradition", "extrajudicial", "extraneous"]
    }, {
        "The surrender by a government of a person accused of crime to the justice of another government. ": ["extradition", "extrajudicial", "extraneous", "extraordinary"]
    }, {
        "Happening out of court. ": ["extrajudicial", "extraneous", "extraordinary", "extravagance"]
    }, {
        "Having no essential relation to a subject. ": ["extraneous", "extraordinary", "extravagance", "extravagant"]
    }, {
        "Unusual. ": ["extraordinary", "extravagance", "extravagant", "extremist"]
    }, {
        "Undue expenditure of money. ": ["extravagance", "extravagant", "extremist", "extremity"]
    }, {
        "Needlessly free or lavish in expenditure. ": ["extravagant", "extremist", "extremity", "extricate"]
    }, {
        "One who supports extreme measures or holds extreme views. ": ["extremist", "extremity", "extricate", "extrude"]
    }, {
        "The utmost point, side, or border, or that farthest removed from a mean position. ": ["extremity", "extricate", "extrude", "exuberance"]
    }, {
        "Disentangle. ": ["extricate", "extrude", "exuberance", "exuberant"]
    }, {
        "To drive out or away. ": ["extrude", "exuberance", "exuberant", "fabricate"]
    }, {
        "Rich supply. ": ["exuberance", "exuberant", "fabricate", "fabulous"]
    }, {
        "Marked by great plentifulness. ": ["exuberant", "fabricate", "fabulous", "facet"]
    }, {
        "To invent fancifully or falsely. ": ["fabricate", "fabulous", "facet", "facetious"]
    }, {
        "Incredible. ": ["fabulous", "facet", "facetious", "facial"]
    }, {
        "One of the small triangular plane surfaces of a diamond or other gem. ": ["facet", "facetious", "facial", "facile"]
    }, {
        "Amusing. ": ["facetious", "facial", "facile", "facilitate"]
    }, {
        "Pertaining to the face. ": ["facial", "facile", "facilitate", "facility"]
    }, {
        "Not difficult to do. ": ["facile", "facilitate", "facility", "facsimile"]
    }, {
        "To make more easy. ": ["facilitate", "facility", "facsimile", "faction"]
    }, {
        "Ease. ": ["facility", "facsimile", "faction", "factious"]
    }, {
        "An exact copy or reproduction. ": ["facsimile", "faction", "factious", "fallacious"]
    }, {
        "A number of persons combined for a common purpose. ": ["faction", "factious", "fallacious", "fallacy"]
    }, {
        "Turbulent. ": ["factious", "fallacious", "fallacy", "fallible"]
    }, {
        "Illogical. ": ["fallacious", "fallacy", "fallible", "fallow"]
    }, {
        "Any unsound or delusive mode of reasoning, or anything based on such reasoning. ": ["fallacy", "fallible", "fallow", "famish"]
    }, {
        "Capable of erring. ": ["fallible", "fallow", "famish", "fanatic"]
    }, {
        "Land broken up and left to become mellow or to rest. ": ["fallow", "famish", "fanatic", "fancier"]
    }, {
        "To suffer extremity of hunger or thirst. ": ["famish", "fanatic", "fancier", "fanciless"]
    }, {
        "A religious zealot. ": ["fanatic", "fancier", "fanciless", "fastidious"]
    }, {
        "One having a taste for or interest in special objects. ": ["fancier", "fanciless", "fastidious", "fathom"]
    }, {
        "Unimaginative. ": ["fanciless", "fastidious", "fathom", "fatuous"]
    }, {
        "Hard to please. ": ["fastidious", "fathom", "fatuous", "faulty"]
    }, {
        "A measure of length, 6 feet. ": ["fathom", "fatuous", "faulty", "faun"]
    }, {
        "Idiotic ": ["fatuous", "faulty", "faun", "fawn"]
    }, {
        "Imperfect. ": ["faulty", "faun", "fawn", "fealty"]
    }, {
        "One of a class of deities of the woods and herds represented as half human, with goats feet. ": ["faun", "fawn", "fealty", "feasible"]
    }, {
        "A young deer. ": ["fawn", "fealty", "feasible", "federate"]
    }, {
        "Loyalty. ": ["fealty", "feasible", "federate", "feint"]
    }, {
        "That may be done, performed, or effected; practicable. ": ["feasible", "federate", "feint", "felicitate"]
    }, {
        "To league together. ": ["federate", "feint", "felicitate", "felicity"]
    }, {
        "Any sham, pretense, or deceptive movement. ": ["feint", "felicitate", "felicity", "felon"]
    }, {
        "To wish joy or happiness to, especially in view of a coming event. ": ["felicitate", "felicity", "felon", "felonious"]
    }, {
        "A state of well-founded happiness. ": ["felicity", "felon", "felonious", "felony"]
    }, {
        "A criminal or depraved person. ": ["felon", "felonious", "felony", "feminine"]
    }, {
        "Showing criminal or evil purpose. ": ["felonious", "felony", "feminine", "fernery"]
    }, {
        "One of the highest class of offenses, and punishable with death or imprisonment. ": ["felony", "feminine", "fernery", "ferocious"]
    }, {
        "Characteristic of woman or womankind. ": ["feminine", "fernery", "ferocious", "ferocity"]
    }, {
        "A place in which ferns are grown. ": ["fernery", "ferocious", "ferocity", "fervent"]
    }, {
        "Of a wild, fierce, and savage nature. ": ["ferocious", "ferocity", "fervent", "fervid"]
    }, {
        "Savageness. ": ["ferocity", "fervent", "fervid", "fervor"]
    }, {
        "Ardent in feeling. ": ["fervent", "fervid", "fervor", "festal"]
    }, {
        "Intense. ": ["fervid", "fervor", "festal", "festive"]
    }, {
        "Ardor or intensity of feeling. ": ["fervor", "festal", "festive", "fete"]
    }, {
        "Joyous. ": ["festal", "festive", "fete", "fetus"]
    }, {
        "Merry. ": ["festive", "fete", "fetus", "feudal"]
    }, {
        "A festival or feast. ": ["fete", "fetus", "feudal", "feudalism"]
    }, {
        "The young in the womb or in the egg. ": ["fetus", "feudal", "feudalism", "fez"]
    }, {
        "Pertaining to the relation of lord and vassal. ": ["feudal", "feudalism", "fez", "fiasco"]
    }, {
        "The feudal system. ": ["feudalism", "fez", "fiasco", "fickle"]
    }, {
        "A brimless felt cap in the shape of a truncated cone, usually red with a black tassel. ": ["fez", "fiasco", "fickle", "fictitious"]
    }, {
        "A complete or humiliating failure. ": ["fiasco", "fickle", "fictitious", "fidelity"]
    }, {
        "Unduly changeable in feeling, judgment, or purpose. ": ["fickle", "fictitious", "fidelity", "fiducial"]
    }, {
        "Created or formed by the imagination. ": ["fictitious", "fidelity", "fiducial", "fief"]
    }, {
        "Loyalty. ": ["fidelity", "fiducial", "fief", "filibuster"]
    }, {
        "Indicative of faith or trust. ": ["fiducial", "fief", "filibuster", "finale"]
    }, {
        "A landed estate held under feudal tenure. ": ["fief", "filibuster", "finale", "finality"]
    }, {
        "One who attempts to obstruct legislation. ": ["filibuster", "finale", "finality", "finally"]
    }, {
        "Concluding performance. ": ["finale", "finality", "finally", "financial"]
    }, {
        "The state or quality of being final or complete. ": ["finality", "finally", "financial", "financier"]
    }, {
        "At last. ": ["finally", "financial", "financier", "finery"]
    }, {
        "Monetary. ": ["financial", "financier", "finery", "finesse"]
    }, {
        "One skilled in or occupied with financial affairs or operations. ": ["financier", "finery", "finesse", "finite"]
    }, {
        "That which is used to decorate the person or dress. ": ["finery", "finesse", "finite", "fiscal"]
    }, {
        "Subtle contrivance used to gain a point. ": ["finesse", "finite", "fiscal", "fishmonger"]
    }, {
        "Limited. ": ["finite", "fiscal", "fishmonger", "fissure"]
    }, {
        "Pertaining to the treasury or public finances of a government. ": ["fiscal", "fishmonger", "fissure", "fitful"]
    }, {
        "One who sells fish. ": ["fishmonger", "fissure", "fitful", "fixture"]
    }, {
        "A crack or crack-like depression. ": ["fissure", "fitful", "fixture", "flag-officer"]
    }, {
        "Spasmodic. ": ["fitful", "fixture", "flag-officer", "flagrant"]
    }, {
        "One who or that which is expected to remain permanently in its position. ": ["fixture", "flag-officer", "flagrant", "flamboyant"]
    }, {
        "The captain of a flag-ship. ": ["flag-officer", "flagrant", "flamboyant", "flatulence"]
    }, {
        "Openly scandalous. ": ["flagrant", "flamboyant", "flatulence", "flection"]
    }, {
        "Characterized by extravagance and in general by want of good taste. ": ["flamboyant", "flatulence", "flection", "fledgling"]
    }, {
        "Accumulation of gas in the stomach and bowels. ": ["flatulence", "flection", "fledgling", "flexible"]
    }, {
        "The act of bending. ": ["flection", "fledgling", "flexible", "flimsy"]
    }, {
        "A young bird. ": ["fledgling", "flexible", "flimsy", "flippant"]
    }, {
        "Pliable. ": ["flexible", "flimsy", "flippant", "floe"]
    }, {
        "Thin and weak. ": ["flimsy", "flippant", "floe", "flora"]
    }, {
        "Having a light, pert, trifling disposition. ": ["flippant", "floe", "flora", "floral"]
    }, {
        "A collection of tabular masses of floating polar ice. ": ["floe", "flora", "floral", "florid"]
    }, {
        "The aggregate of plants growing without cultivation in a district. ": ["flora", "floral", "florid", "florist"]
    }, {
        "Pertaining to flowers. ": ["floral", "florid", "florist", "fluctuate"]
    }, {
        "Flushed with red. ": ["florid", "florist", "fluctuate", "fluctuation"]
    }, {
        "A dealer in flowers. ": ["florist", "fluctuate", "fluctuation", "flue"]
    }, {
        "To pass backward and forward irregularly from one state or degree to another. ": ["fluctuate", "fluctuation", "flue", "fluent"]
    }, {
        "Frequent irregular change back and forth from one state or degree to another. ": ["fluctuation", "flue", "fluent", "fluential"]
    }, {
        "A smoke-duct in a chimney. ": ["flue", "fluent", "fluential", "flux"]
    }, {
        "Having a ready or easy flow of words or ideas. ": ["fluent", "fluential", "flux", "foggy"]
    }, {
        "Pertaining to streams. ": ["fluential", "flux", "foggy", "foible"]
    }, {
        "A state of constant movement, change, or renewal. ": ["flux", "foggy", "foible", "foist"]
    }, {
        "Obscure. ": ["foggy", "foible", "foist", "foliage"]
    }, {
        "A personal weakness or failing. ": ["foible", "foist", "foliage", "folio"]
    }, {
        "To palm off. ": ["foist", "foliage", "folio", "folk-lore"]
    }, {
        "Any growth of leaves. ": ["foliage", "folio", "folk-lore", "fondle"]
    }, {
        "A sheet of paper folded once, or of a size adapted to folding once. ": ["folio", "folk-lore", "fondle", "foolery"]
    }, {
        "The traditions, beliefs, and customs of the common people. ": ["folk-lore", "fondle", "foolery", "foot-note"]
    }, {
        "To handle tenderly and lovingly. ": ["fondle", "foolery", "foot-note", "foppery"]
    }, {
        "Folly. ": ["foolery", "foot-note", "foppery", "foppish"]
    }, {
        "A note of explanation or comment at the foot of a page or column. ": ["foot-note", "foppery", "foppish", "forbearance"]
    }, {
        "Dandyism. ": ["foppery", "foppish", "forbearance", "forby"]
    }, {
        "Characteristic of one who is unduly devoted to dress and the niceties of manners. ": ["foppish", "forbearance", "forby", "forcible"]
    }, {
        "Patient endurance or toleration of offenses. ": ["forbearance", "forby", "forcible", "forecourt"]
    }, {
        "Besides. ": ["forby", "forcible", "forecourt", "forejudge"]
    }, {
        "Violent. ": ["forcible", "forecourt", "forejudge", "forepeak"]
    }, {
        "A court opening directly from the street. ": ["forecourt", "forejudge", "forepeak", "foreshore"]
    }, {
        "To judge of before hearing evidence. ": ["forejudge", "forepeak", "foreshore", "forebode"]
    }, {
        "The extreme forward part of a ship's hold, under the lowest deck. ": ["forepeak", "foreshore", "forebode", "forecast"]
    }, {
        "That part of a shore uncovered at low tide. ": ["foreshore", "forebode", "forecast", "forecastle"]
    }, {
        "To be an omen or warning sign of, especially of evil. ": ["forebode", "forecast", "forecastle", "foreclose"]
    }, {
        "To predict. ": ["forecast", "forecastle", "foreclose", "forefather"]
    }, {
        "That part of the upper deck of a ship forward of the after fore-shrouds. ": ["forecastle", "foreclose", "forefather", "forego"]
    }, {
        "To bar by judicial proceedings the equitable right of a mortgagor to redeem property. ": ["foreclose", "forefather", "forego", "foreground"]
    }, {
        "An ancestor. ": ["forefather", "forego", "foreground", "forehead"]
    }, {
        "To deny oneself the pleasure or profit of. ": ["forego", "foreground", "forehead", "foreign"]
    }, {
        "That part of a landscape or picture situated or represented as nearest the spectator. ": ["foreground", "forehead", "foreign", "foreigner"]
    }, {
        "The upper part of the face, between the eyes and the hair. ": ["forehead", "foreign", "foreigner", "foreknowledge"]
    }, {
        "Belonging to, situated in, or derived from another country. ": ["foreign", "foreigner", "foreknowledge", "foreman"]
    }, {
        "A citizen of a foreign country. ": ["foreigner", "foreknowledge", "foreman", "foreordain"]
    }, {
        "Prescience. ": ["foreknowledge", "foreman", "foreordain", "foreordination"]
    }, {
        "The head man. ": ["foreman", "foreordain", "foreordination", "forerun"]
    }, {
        "To predetermine. ": ["foreordain", "foreordination", "forerun", "foresail"]
    }, {
        "Predestination. ": ["foreordination", "forerun", "foresail", "foresee"]
    }, {
        "To go before as introducing or ushering in. ": ["forerun", "foresail", "foresee", "foresight"]
    }, {
        "A square sail. ": ["foresail", "foresee", "foresight", "foretell"]
    }, {
        "To discern beforehand. ": ["foresee", "foresight", "foretell", "forethought"]
    }, {
        "Provision against harm or need. ": ["foresight", "foretell", "forethought", "forfeit"]
    }, {
        "To predict. ": ["foretell", "forethought", "forfeit", "forfend"]
    }, {
        "Premeditation. ": ["forethought", "forfeit", "forfend", "forgery"]
    }, {
        "To lose possession of through failure to fulfill some obligation. ": ["forfeit", "forfend", "forgery", "forgo"]
    }, {
        "To ward off. ": ["forfend", "forgery", "forgo", "formation"]
    }, {
        "Counterfeiting. ": ["forgery", "forgo", "formation", "formidable"]
    }, {
        "To deny oneself. ": ["forgo", "formation", "formidable", "formula"]
    }, {
        "Relative disposition of parts. ": ["formation", "formidable", "formula", "forswear"]
    }, {
        "Difficult to accomplish. ": ["formidable", "formula", "forswear", "forte"]
    }, {
        "Fixed rule or set form. ": ["formula", "forswear", "forte", "forth"]
    }, {
        "To renounce upon oath. ": ["forswear", "forte", "forth", "forthright"]
    }, {
        "A strong point. ": ["forte", "forth", "forthright", "fortify"]
    }, {
        "Into notice or view. ": ["forth", "forthright", "fortify", "fortitude"]
    }, {
        "With directness. ": ["forthright", "fortify", "fortitude", "foursome"]
    }, {
        "To provide with defensive works. ": ["fortify", "fortitude", "foursome", "fracture"]
    }, {
        "Patient courage. ": ["fortitude", "foursome", "fracture", "fragile"]
    }, {
        "Consisting of four. ": ["foursome", "fracture", "fragile", "frailty"]
    }, {
        "A break. ": ["fracture", "fragile", "frailty", "fragile"]
    }, {
        "Easily broken. ": ["fragile", "frailty", "fragile", "frankincense"]
    }, {
        "Liability to be broken or destroyed. ": ["frailty", "fragile", "frankincense", "frantic"]
    }, {
        "Capable of being broken. ": ["fragile", "frankincense", "frantic", "fraternal"]
    }, {
        "A gum or resin which on burning yields aromatic fumes. ": ["frankincense", "frantic", "fraternal", "fraudulence"]
    }, {
        "Frenzied. ": ["frantic", "fraternal", "fraudulence", "fraudulent"]
    }, {
        "Brotherly. ": ["fraternal", "fraudulence", "fraudulent", "fray"]
    }, {
        "Deceitfulness. ": ["fraudulence", "fraudulent", "fray", "freemason"]
    }, {
        "Counterfeit. ": ["fraudulent", "fray", "freemason", "freethinker"]
    }, {
        "To fret at the edge so as to loosen or break the threads. ": ["fray", "freemason", "freethinker", "free trade"]
    }, {
        "A member of an ancient secret fraternity originally confined to skilled artisans. ": ["freemason", "freethinker", "free trade", "frequency"]
    }, {
        "One who rejects authority or inspiration in religion. ": ["freethinker", "free trade", "frequency", "fresco"]
    }, {
        "Commerce unrestricted by tariff or customs. ": ["free trade", "frequency", "fresco", "freshness"]
    }, {
        "The comparative number of any kind of occurrences within a given time or space. ": ["frequency", "fresco", "freshness", "fretful"]
    }, {
        "The art of painting on a surface of plaster, particularly on walls and ceilings. ": ["fresco", "freshness", "fretful", "frightful"]
    }, {
        "The state, quality, or degree of being fresh. ": ["freshness", "fretful", "frightful", "frigid"]
    }, {
        "Disposed to peevishness. ": ["fretful", "frightful", "frigid", "frigidarium"]
    }, {
        "Apt to induce terror or alarm. ": ["frightful", "frigid", "frigidarium", "frivolity"]
    }, {
        "Lacking warmth. ": ["frigid", "frigidarium", "frivolity", "frivolous"]
    }, {
        "A room kept at a low temperature for preserving fruits, meat, etc. ": ["frigidarium", "frivolity", "frivolous", "frizz"]
    }, {
        "A trifling act, thought, saying, or practice. ": ["frivolity", "frivolous", "frizz", "frizzle"]
    }, {
        "Trivial. ": ["frivolous", "frizz", "frizzle", "frolicsome"]
    }, {
        "To give a crinkled, fluffy appearance to. ": ["frizz", "frizzle", "frolicsome", "frontier"]
    }, {
        "To cause to crinkle or curl, as the hair. ": ["frizzle", "frolicsome", "frontier", "frowzy"]
    }, {
        "Prankish. ": ["frolicsome", "frontier", "frowzy", "frugal"]
    }, {
        "The part of a nation's territory that abuts upon another country. ": ["frontier", "frowzy", "frugal", "fruition"]
    }, {
        "Slovenly in appearance. ": ["frowzy", "frugal", "fruition", "fugacious"]
    }, {
        "Economical. ": ["frugal", "fruition", "fugacious", "fulcrum"]
    }, {
        "Fulfillment. ": ["fruition", "fugacious", "fulcrum", "fulminate"]
    }, {
        "Fleeting. ": ["fugacious", "fulcrum", "fulminate", "fulsome"]
    }, {
        "The support on or against which a lever rests, or the point about which it turns. ": ["fulcrum", "fulminate", "fulsome", "fumigate"]
    }, {
        "To cause to explode. ": ["fulminate", "fulsome", "fumigate", "functionary"]
    }, {
        "Offensive from excess of praise or commendation. ": ["fulsome", "fumigate", "functionary", "fundamental"]
    }, {
        "To subject to the action of smoke or fumes, especially for disinfection. ": ["fumigate", "functionary", "fundamental", "fungible"]
    }, {
        "An official. ": ["functionary", "fundamental", "fungible", "fungous"]
    }, {
        "Basal. ": ["fundamental", "fungible", "fungous", "fungus"]
    }, {
        "That may be measured, counted, or weighed. ": ["fungible", "fungous", "fungus", "furbish"]
    }, {
        "Spongy. ": ["fungous", "fungus", "furbish", "furlong"]
    }, {
        "A plant destitute of chlorophyll, as a mushroom. ": ["fungus", "furbish", "furlong", "furlough"]
    }, {
        "To restore brightness or beauty to. ": ["furbish", "furlong", "furlough", "furrier"]
    }, {
        "A measure, one-eighth of a mile. ": ["furlong", "furlough", "furrier", "further"]
    }, {
        "A temporary absence of a soldier or sailor by permission of the commanding officer. ": ["furlough", "furrier", "further", "furtherance"]
    }, {
        "A dealer in or maker of fur goods. ": ["furrier", "further", "furtherance", "furtive"]
    }, {
        "More distant or advanced. ": ["further", "furtherance", "furtive", "fuse"]
    }, {
        "Advancement. ": ["furtherance", "furtive", "fuse", "fusible"]
    }, {
        "Stealthy or sly, like the actions of a thief. ": ["furtive", "fuse", "fusible", "futile"]
    }, {
        "To unite or blend as by melting together. ": ["fuse", "fusible", "futile", "futurist"]
    }, {
        "Capable of being melted by heat. ": ["fusible", "futile", "futurist", "gauge"]
    }, {
        "Of no avail or effect. ": ["futile", "futurist", "gauge", "gaiety"]
    }, {
        "A person of expectant temperament. ": ["futurist", "gauge", "gaiety", "gaily"]
    }, {
        "An instrument for measuring. ": ["gauge", "gaiety", "gaily", "gait"]
    }, {
        "Festivity. ": ["gaiety", "gaily", "gait", "gallant"]
    }, {
        "Merrily. ": ["gaily", "gait", "gallant", "galore"]
    }, {
        "Carriage of the body in going. ": ["gait", "gallant", "galore", "galvanic"]
    }, {
        "Possessing a brave or chivalrous spirit. ": ["gallant", "galore", "galvanic", "galvanism"]
    }, {
        "Abundant. ": ["galore", "galvanic", "galvanism", "galvanize"]
    }, {
        "Pertaining or relating to electricity produced by chemical action. ": ["galvanic", "galvanism", "galvanize", "gamble"]
    }, {
        "Current electricity, especially that arising from chemical action. ": ["galvanism", "galvanize", "gamble", "gambol"]
    }, {
        "To imbue with life or animation. ": ["galvanize", "gamble", "gambol", "gamester"]
    }, {
        "To risk money or other possession on an event, chance, or contingency. ": ["gamble", "gambol", "gamester", "gamut"]
    }, {
        "Playful leaping or frisking. ": ["gambol", "gamester", "gamut", "garnish"]
    }, {
        "A gambler. ": ["gamester", "gamut", "garnish", "garrison"]
    }, {
        "The whole range or sequence. ": ["gamut", "garnish", "garrison", "garrote"]
    }, {
        "In cookery, to surround with additions for embellishment. ": ["garnish", "garrison", "garrote", "garrulous"]
    }, {
        "The military force stationed in a fort, town, or other place for its defense. ": ["garrison", "garrote", "garrulous", "gaseous"]
    }, {
        "To execute by strangling. ": ["garrote", "garrulous", "gaseous", "gastric"]
    }, {
        "Given to constant trivial talking. ": ["garrulous", "gaseous", "gastric", "gastritis"]
    }, {
        "Light and unsubstantial. ": ["gaseous", "gastric", "gastritis", "gastronomy"]
    }, {
        "Of, pertaining to, or near the stomach. ": ["gastric", "gastritis", "gastronomy", "gendarme"]
    }, {
        "Inflammation of the stomach. ": ["gastritis", "gastronomy", "gendarme", "genealogy"]
    }, {
        "The art of preparing and serving appetizing food. ": ["gastronomy", "gendarme", "genealogy", "genealogist"]
    }, {
        "In continental Europe, particularly in France, a uniformed and armed police officer. ": ["gendarme", "genealogy", "genealogist", "generality"]
    }, {
        "A list, in the order of succession, of ancestors and their descendants. ": ["genealogy", "genealogist", "generality", "generalize"]
    }, {
        "A tracer of pedigrees. ": ["genealogist", "generality", "generalize", "generally"]
    }, {
        "The principal portion. ": ["generality", "generalize", "generally", "generate"]
    }, {
        "To draw general inferences. ": ["generalize", "generally", "generate", "generic"]
    }, {
        "Ordinarily. ": ["generally", "generate", "generic", "generosity"]
    }, {
        "To produce or cause to be. ": ["generate", "generic", "generosity", "genesis"]
    }, {
        "Noting a genus or kind; opposed to specific. ": ["generic", "generosity", "genesis", "geniality"]
    }, {
        "A disposition to give liberally or to bestow favors heartily. ": ["generosity", "genesis", "geniality", "genital"]
    }, {
        "Creation. ": ["genesis", "geniality", "genital", "genitive"]
    }, {
        "Warmth and kindliness of disposition. ": ["geniality", "genital", "genitive", "genteel"]
    }, {
        "Of or pertaining to the animal reproductive organs. ": ["genital", "genitive", "genteel", "gentile"]
    }, {
        "Indicating source, origin, possession, or the like. ": ["genitive", "genteel", "gentile", "geology"]
    }, {
        "Well-bred or refined. ": ["genteel", "gentile", "geology", "germane"]
    }, {
        "Belonging to a people not Jewish. ": ["gentile", "geology", "germane", "germinate"]
    }, {
        "The department of natural science that treats of the constitution and structure of the earth. ": ["geology", "germane", "germinate", "gestation"]
    }, {
        "Relevant. ": ["germane", "germinate", "gestation", "gesticulate"]
    }, {
        "To begin to develop into an embryo or higher form. ": ["germinate", "gestation", "gesticulate", "gesture"]
    }, {
        "Pregnancy. ": ["gestation", "gesticulate", "gesture", "ghastly"]
    }, {
        "To make gestures or motions, as in speaking, or in place of speech. ": ["gesticulate", "gesture", "ghastly", "gibe"]
    }, {
        "A movement or action of the hands or face, expressive of some idea or emotion. ": ["gesture", "ghastly", "gibe", "giddy"]
    }, {
        "Hideous. ": ["ghastly", "gibe", "giddy", "gigantic"]
    }, {
        "To utter taunts or reproaches. ": ["gibe", "giddy", "gigantic", "giver"]
    }, {
        "Affected with a whirling or swimming sensation in the head. ": ["giddy", "gigantic", "giver", "glacial"]
    }, {
        "Tremendous. ": ["gigantic", "giver", "glacial", "glacier"]
    }, {
        "One who gives, in any sense. ": ["giver", "glacial", "glacier", "gladden"]
    }, {
        "Icy, or icily cold. ": ["glacial", "glacier", "gladden", "glazier"]
    }, {
        "A field or stream of ice. ": ["glacier", "gladden", "glazier", "glimmer"]
    }, {
        "To make joyous. ": ["gladden", "glazier", "glimmer", "glimpse"]
    }, {
        "One who cuts and fits panes of glass, as for windows. ": ["glazier", "glimmer", "glimpse", "globose"]
    }, {
        "A faint, wavering, unsteady light. ": ["glimmer", "glimpse", "globose", "globular"]
    }, {
        "A momentary look. ": ["glimpse", "globose", "globular", "glorious"]
    }, {
        "Spherical. ": ["globose", "globular", "glorious", "glutinous"]
    }, {
        "Spherical. ": ["globular", "glorious", "glutinous", "gluttonous"]
    }, {
        "Of excellence and splendor. ": ["glorious", "glutinous", "gluttonous", "gnash"]
    }, {
        "Sticky. ": ["glutinous", "gluttonous", "gnash", "Gordian knot"]
    }, {
        "Given to excess in eating. ": ["gluttonous", "gnash", "Gordian knot", "gourmand"]
    }, {
        "To grind or strike the teeth together, as from rage. ": ["gnash", "Gordian knot", "gourmand", "gosling"]
    }, {
        "Any difficulty the only issue out of which is by bold or unusual manners. ": ["Gordian knot", "gourmand", "gosling", "gossamer"]
    }, {
        "A connoisseur in the delicacies of the table. ": ["gourmand", "gosling", "gossamer", "gourd"]
    }, {
        "A young goose. ": ["gosling", "gossamer", "gourd", "graceless"]
    }, {
        "Flimsy. ": ["gossamer", "gourd", "graceless", "gradation"]
    }, {
        "A melon, pumpkin, squash, or some similar fruit having a hard rind. ": ["gourd", "graceless", "gradation", "gradient"]
    }, {
        "Ungracious. ": ["graceless", "gradation", "gradient", "granary"]
    }, {
        "A step, degree, rank, or relative position in an order or series. ": ["gradation", "gradient", "granary", "grandeur"]
    }, {
        "Moving or advancing by steps. ": ["gradient", "granary", "grandeur", "grandiloquent"]
    }, {
        "A storehouse for grain after it is thrashed or husked. ": ["granary", "grandeur", "grandiloquent", "grandiose"]
    }, {
        "The quality of being grand or admirably great. ": ["grandeur", "grandiloquent", "grandiose", "grantee"]
    }, {
        "Speaking in or characterized by a pompous or bombastic style. ": ["grandiloquent", "grandiose", "grantee", "grantor"]
    }, {
        "Having an imposing style or effect. ": ["grandiose", "grantee", "grantor", "granular"]
    }, {
        "The person to whom property is transferred by deed. ": ["grantee", "grantor", "granular", "granulate"]
    }, {
        "The maker of a deed. ": ["grantor", "granular", "granulate", "granule"]
    }, {
        "Composed of small grains or particles. ": ["granular", "granulate", "granule", "grapple"]
    }, {
        "To form into grains or small particles. ": ["granulate", "granule", "grapple", "gratification"]
    }, {
        "A small grain or particle. ": ["granule", "grapple", "gratification", "gratify"]
    }, {
        "To take hold of. ": ["grapple", "gratification", "gratify", "gratuitous"]
    }, {
        "Satisfaction. ": ["gratification", "gratify", "gratuitous", "gratuity"]
    }, {
        "To please, as by satisfying a physical or mental desire or need. ": ["gratify", "gratuitous", "gratuity", "gravity"]
    }, {
        "Voluntarily. ": ["gratuitous", "gratuity", "gravity", "gregarious"]
    }, {
        "That which is given without demand or claim. Tip. ": ["gratuity", "gravity", "gregarious", "grenadier"]
    }, {
        "Seriousness. ": ["gravity", "gregarious", "grenadier", "grief"]
    }, {
        "Not habitually solitary or living alone. ": ["gregarious", "grenadier", "grief", "grievance"]
    }, {
        "A member of a regiment composed of men of great stature. ": ["grenadier", "grief", "grievance", "grievous"]
    }, {
        "Sorrow. ": ["grief", "grievance", "grievous", "grimace"]
    }, {
        "That which oppresses, injures, or causes grief and at the same time a sense of wrong. ": ["grievance", "grievous", "grimace", "grindstone"]
    }, {
        "Creating affliction. ": ["grievous", "grimace", "grindstone", "grisly"]
    }, {
        "A distortion of the features, occasioned by some feeling of pain, disgust, etc. ": ["grimace", "grindstone", "grisly", "grotesque"]
    }, {
        "A flat circular stone, used for sharpening tools. ": ["grindstone", "grisly", "grotesque", "grotto"]
    }, {
        "Fear-inspiring. ": ["grisly", "grotesque", "grotto", "ground"]
    }, {
        "Incongruously composed or ill-proportioned. ": ["grotesque", "grotto", "ground", "guess"]
    }, {
        "A small cavern. ": ["grotto", "ground", "guess", "guile"]
    }, {
        "A pavement or floor or any supporting surface on which one may walk. ": ["ground", "guess", "guile", "guileless"]
    }, {
        "Surmise. ": ["guess", "guile", "guileless", "guinea"]
    }, {
        "Duplicity. ": ["guile", "guileless", "guinea", "guise"]
    }, {
        "Frank. ": ["guileless", "guinea", "guise", "gullible"]
    }, {
        "An English monetary unit. ": ["guinea", "guise", "gullible", "gumption"]
    }, {
        "The external appearance as produced by garb or costume. ": ["guise", "gullible", "gumption", "gusto"]
    }, {
        "Credulous. ": ["gullible", "gumption", "gusto", "guy"]
    }, {
        "Common sense. ": ["gumption", "gusto", "guy", "guzzle"]
    }, {
        "Keen enjoyment. ": ["gusto", "guy", "guzzle", "gynecocracy"]
    }, {
        "Stay-rope. ": ["guy", "guzzle", "gynecocracy", "gynecology"]
    }, {
        "To swallow greedily or hastily; gulp. ": ["guzzle", "gynecocracy", "gynecology", "gyrate"]
    }, {
        "Female supremacy. ": ["gynecocracy", "gynecology", "gyrate", "gyroscope"]
    }, {
        "The science that treats of the functions and diseases peculiar to women. ": ["gynecology", "gyrate", "gyroscope", "habitable"]
    }, {
        "To revolve. ": ["gyrate", "gyroscope", "habitable", "habitant"]
    }, {
        "An instrument for illustrating the laws of rotation. ": ["gyroscope", "habitable", "habitant", "habitual"]
    }, {
        "Fit to be dwelt in. ": ["habitable", "habitant", "habitual", "habitude"]
    }, {
        "Dweller. ": ["habitant", "habitual", "habitude", "hackney"]
    }, {
        "According to usual practice. ": ["habitual", "habitude", "hackney", "haggard"]
    }, {
        "Customary relation or association. ": ["habitude", "hackney", "haggard", "halcyon"]
    }, {
        "To make stale or trite by repetition. ": ["hackney", "haggard", "halcyon", "hale"]
    }, {
        "Worn and gaunt in appearance. ": ["haggard", "halcyon", "hale", "handwriting"]
    }, {
        "Calm. ": ["halcyon", "hale", "handwriting", "hanger-on"]
    }, {
        "Of sound and vigorous health. ": ["hale", "handwriting", "hanger-on", "happy-go-lucky"]
    }, {
        "Penmanship. ": ["handwriting", "hanger-on", "happy-go-lucky", "harangue"]
    }, {
        "A parasite. ": ["hanger-on", "happy-go-lucky", "harangue", "harass"]
    }, {
        "Improvident. ": ["happy-go-lucky", "harangue", "harass", "harbinger"]
    }, {
        "A tirade. ": ["harangue", "harass", "harbinger", "hard-hearted"]
    }, {
        "To trouble with importunities, cares, or annoyances. ": ["harass", "harbinger", "hard-hearted", "hardihood"]
    }, {
        "One who or that which foreruns and announces the coming of any person or thing. ": ["harbinger", "hard-hearted", "hardihood", "harmonious"]
    }, {
        "Lacking pity or sympathy. ": ["hard-hearted", "hardihood", "harmonious", "havoc"]
    }, {
        "Foolish daring. ": ["hardihood", "harmonious", "havoc", "hawthorn"]
    }, {
        "Concordant in sound. ": ["harmonious", "havoc", "hawthorn", "hazard"]
    }, {
        "Devastation. ": ["havoc", "hawthorn", "hazard", "head first"]
    }, {
        "A thorny shrub much used in England for hedges. ": ["hawthorn", "hazard", "head first", "head foremost"]
    }, {
        "Risk. ": ["hazard", "head first", "head foremost", "heartrending"]
    }, {
        "Precipitately, as in diving. ": ["head first", "head foremost", "heartrending", "heathenish"]
    }, {
        "Precipitately, as in diving. ": ["head foremost", "heartrending", "heathenish", "heedless"]
    }, {
        "Very depressing. ": ["heartrending", "heathenish", "heedless", "heifer"]
    }, {
        "Irreligious. ": ["heathenish", "heedless", "heifer", "heinous"]
    }, {
        "Thoughtless. ": ["heedless", "heifer", "heinous", "hemorrhage"]
    }, {
        "A young cow. ": ["heifer", "heinous", "hemorrhage", "hemorrhoids"]
    }, {
        "Odiously sinful. ": ["heinous", "hemorrhage", "hemorrhoids", "henchman"]
    }, {
        "Discharge of blood from a ruptured or wounded blood-vessel. ": ["hemorrhage", "hemorrhoids", "henchman", "henpeck"]
    }, {
        "pl. Tumors composed of enlarged and thickened blood-vessels, at the lower end of the rectum. ": ["hemorrhoids", "henchman", "henpeck", "heptagon"]
    }, {
        "A servile assistant and subordinate. ": ["henchman", "henpeck", "heptagon", "heptarchy"]
    }, {
        "To worry or harass by ill temper and petty annoyances. ": ["henpeck", "heptagon", "heptarchy", "herbaceous"]
    }, {
        "A figure having seven sides and seven angles. ": ["heptagon", "heptarchy", "herbaceous", "herbarium"]
    }, {
        "A group of seven governments. ": ["heptarchy", "herbaceous", "herbarium", "herbivorous"]
    }, {
        "Having the character of a herb. ": ["herbaceous", "herbarium", "herbivorous", "hereditary"]
    }, {
        "A collection of dried plants scientifically arranged for study. ": ["herbarium", "herbivorous", "hereditary", "heredity"]
    }, {
        "Feeding on herbs or other vegetable matter, as animals. ": ["herbivorous", "hereditary", "heredity", "heresy"]
    }, {
        "Passing naturally from parent to child. ": ["hereditary", "heredity", "heresy", "heretic"]
    }, {
        "Transmission of physical or mental qualities, diseases, etc., from parent to offspring. ": ["heredity", "heresy", "heretic", "heritage"]
    }, {
        "An opinion or doctrine subversive of settled beliefs or accepted principles. ": ["heresy", "heretic", "heritage", "hernia"]
    }, {
        "One who holds opinions contrary to the recognized standards or tenets of any philosophy. ": ["heretic", "heritage", "hernia", "hesitancy"]
    }, {
        "Birthright. ": ["heritage", "hernia", "hesitancy", "hesitant"]
    }, {
        "Protrusion of any internal organ in whole or in part from its normal position. ": ["hernia", "hesitancy", "hesitant", "hesitation"]
    }, {
        "A pausing to consider. ": ["hesitancy", "hesitant", "hesitation", "heterodox"]
    }, {
        "Vacillating. ": ["hesitant", "hesitation", "heterodox", "heterogeneity"]
    }, {
        "Vacillation. ": ["hesitation", "heterodox", "heterogeneity", "heterogeneous"]
    }, {
        "At variance with any commonly accepted doctrine or opinion. ": ["heterodox", "heterogeneity", "heterogeneous", "heteromorphic"]
    }, {
        "Unlikeness of constituent parts. ": ["heterogeneity", "heterogeneous", "heteromorphic", "hexangular"]
    }, {
        "Consisting of dissimilar elements or ingredients of different kinds. ": ["heterogeneous", "heteromorphic", "hexangular", "hexapod"]
    }, {
        "Deviating from the normal form or standard type. ": ["heteromorphic", "hexangular", "hexapod", "hexagon"]
    }, {
        "Having six angles. ": ["hexangular", "hexapod", "hexagon", "hiatus"]
    }, {
        "Having six feet. ": ["hexapod", "hexagon", "hiatus", "hibernal"]
    }, {
        "A figure with six angles. ": ["hexagon", "hiatus", "hibernal", "Hibernian"]
    }, {
        "A break or vacancy where something necessary to supply the connection is wanting. ": ["hiatus", "hibernal", "Hibernian", "hideous"]
    }, {
        "Pertaining to winter. ": ["hibernal", "Hibernian", "hideous", "hilarious"]
    }, {
        "Pertaining to Ireland, or its people. ": ["Hibernian", "hideous", "hilarious", "hillock"]
    }, {
        "Appalling. ": ["hideous", "hilarious", "hillock", "hinder"]
    }, {
        "Boisterously merry. ": ["hilarious", "hillock", "hinder", "hindmost"]
    }, {
        "A small hill or mound. ": ["hillock", "hinder", "hindmost", "hindrance"]
    }, {
        "To obstruct. ": ["hinder", "hindmost", "hindrance", "hirsute"]
    }, {
        "Farthest from the front. ": ["hindmost", "hindrance", "hirsute", "hoard"]
    }, {
        "An obstacle. ": ["hindrance", "hirsute", "hoard", "hoarse"]
    }, {
        "Having a hairy covering. ": ["hirsute", "hoard", "hoarse", "homage"]
    }, {
        "To gather and store away for the sake of accumulation. ": ["hoard", "hoarse", "homage", "homogeneity"]
    }, {
        "Having the voice harsh or rough, as from a cold or fatigue. ": ["hoarse", "homage", "homogeneity", "homogeneous"]
    }, {
        "Reverential regard or worship. ": ["homage", "homogeneity", "homogeneous", "homologous"]
    }, {
        "Congruity of the members or elements or parts. ": ["homogeneity", "homogeneous", "homologous", "homonym"]
    }, {
        "Made up of similar parts or elements. ": ["homogeneous", "homologous", "homonym", "homophone"]
    }, {
        "Identical in nature, make-up, or relation. ": ["homologous", "homonym", "homophone", "honorarium"]
    }, {
        "A word agreeing in sound with but different in meaning from another. ": ["homonym", "homophone", "honorarium", "hoodwink"]
    }, {
        "A word agreeing in sound with but different in meaning from another. ": ["homophone", "honorarium", "hoodwink", "horde"]
    }, {
        "A token fee or payment to a professional man for services. ": ["honorarium", "hoodwink", "horde", "hosiery"]
    }, {
        "To deceive. ": ["hoodwink", "horde", "hosiery", "hospitable"]
    }, {
        "A gathered multitude of human beings. ": ["horde", "hosiery", "hospitable", "hospitality"]
    }, {
        "A stocking. ": ["hosiery", "hospitable", "hospitality", "hostility"]
    }, {
        "Disposed to treat strangers or guests with generous kindness. ": ["hospitable", "hospitality", "hostility", "huckster"]
    }, {
        "The practice of receiving and entertaining strangers and guests with kindness. ": ["hospitality", "hostility", "huckster", "humane"]
    }, {
        "Enmity. ": ["hostility", "huckster", "humane", "humanitarian"]
    }, {
        "One who retails small wares. ": ["huckster", "humane", "humanitarian", "humanize"]
    }, {
        "Compassionate. ": ["humane", "humanitarian", "humanize", "humbug"]
    }, {
        "A philanthropist. ": ["humanitarian", "humanize", "humbug", "humiliate"]
    }, {
        "To make gentle or refined. ": ["humanize", "humbug", "humiliate", "hussar"]
    }, {
        "Anything intended or calculated to deceive or mislead. ": ["humbug", "humiliate", "hussar", "hustle"]
    }, {
        "To put to shame. ": ["humiliate", "hussar", "hustle", "hybrid"]
    }, {
        "A light-horse trooper armed with saber and carbine. ": ["hussar", "hustle", "hybrid", "hydra"]
    }, {
        "To move with haste and promptness. ": ["hustle", "hybrid", "hydra", "hydraulic"]
    }, {
        "Cross-bred. ": ["hybrid", "hydra", "hydraulic", "hydrodynamics"]
    }, {
        "The seven- or nine-headed water-serpent slain by Hercules. ": ["hydra", "hydraulic", "hydrodynamics", "hydroelectric"]
    }, {
        "Involving the moving of water, of the force exerted by water in motion. ": ["hydraulic", "hydrodynamics", "hydroelectric", "hydromechanics"]
    }, {
        "The branch of mechanics that treats of the dynamics of fluids. ": ["hydrodynamics", "hydroelectric", "hydromechanics", "hydrometer"]
    }, {
        "Pertaining to electricity developed water or steam. ": ["hydroelectric", "hydromechanics", "hydrometer", "hydrostatics"]
    }, {
        "The mechanics of fluids. ": ["hydromechanics", "hydrometer", "hydrostatics", "hydrous"]
    }, {
        "An instrument for determining the density of solids and liquids by flotation. ": ["hydrometer", "hydrostatics", "hydrous", "hygiene"]
    }, {
        "The branch of science that treats of the pressure and equilibrium of fluids. ": ["hydrostatics", "hydrous", "hygiene", "hypercritical"]
    }, {
        "Watery. ": ["hydrous", "hygiene", "hypercritical", "hypnosis"]
    }, {
        "The branch of medical science that relates to improving health. ": ["hygiene", "hypercritical", "hypnosis", "hypnotic"]
    }, {
        "Faultfinding. ": ["hypercritical", "hypnosis", "hypnotic", "hypnotism"]
    }, {
        "An artificial trance-sleep. ": ["hypnosis", "hypnotic", "hypnotism", "hypnotize"]
    }, {
        "Tending to produce sleep. ": ["hypnotic", "hypnotism", "hypnotize", "hypocrisy"]
    }, {
        "An artificially induced somnambulistic state in which the mind readily acts on suggestion. ": ["hypnotism", "hypnotize", "hypocrisy", "hypocrite"]
    }, {
        "To produce a somnambulistic state in which the mind readily acts on suggestions. ": ["hypnotize", "hypocrisy", "hypocrite", "hypodermic"]
    }, {
        "Extreme insincerity. ": ["hypocrisy", "hypocrite", "hypodermic", "hypotenuse"]
    }, {
        "One who makes false professions of his views or beliefs. ": ["hypocrite", "hypodermic", "hypotenuse", "hypothesis"]
    }, {
        "Pertaining to the area under the skin. ": ["hypodermic", "hypotenuse", "hypothesis", "hysteria"]
    }, {
        "The side of a right-angled triangle opposite the right angle. ": ["hypotenuse", "hypothesis", "hysteria", "ichthyic"]
    }, {
        "A proposition taken for granted as a premise from which to reach a conclusion. ": ["hypothesis", "hysteria", "ichthyic", "ichthyology"]
    }, {
        "A nervous affection occurring typically in paroxysms of laughing and crying. ": ["hysteria", "ichthyic", "ichthyology", "ichthyosaurs"]
    }, {
        "Fish-like. ": ["ichthyic", "ichthyology", "ichthyosaurs", "icily"]
    }, {
        "The branch of zoology that treats of fishes. ": ["ichthyology", "ichthyosaurs", "icily", "iciness"]
    }, {
        "A fossil reptile. ": ["ichthyosaurs", "icily", "iciness", "icon"]
    }, {
        "Frigidly. ": ["icily", "iciness", "icon", "iconoclast"]
    }, {
        "The state of being icy. ": ["iciness", "icon", "iconoclast", "idealize"]
    }, {
        "An image or likeness. ": ["icon", "iconoclast", "idealize", "idiom"]
    }, {
        "An image-breaker. ": ["iconoclast", "idealize", "idiom", "idiosyncrasy"]
    }, {
        "To make to conform to some mental or imaginary standard. ": ["idealize", "idiom", "idiosyncrasy", "idolize"]
    }, {
        "A use of words peculiar to a particular language. ": ["idiom", "idiosyncrasy", "idolize", "ignoble"]
    }, {
        "A mental quality or habit peculiar to an individual. ": ["idiosyncrasy", "idolize", "ignoble", "ignominious"]
    }, {
        "To regard with inordinate love or admiration. ": ["idolize", "ignoble", "ignominious", "Iliad"]
    }, {
        "Low in character or purpose. ": ["ignoble", "ignominious", "Iliad", "illegal"]
    }, {
        "Shameful. ": ["ignominious", "Iliad", "illegal", "illegible"]
    }, {
        "A Greek epic poem describing scenes from the siege of Troy. ": ["Iliad", "illegal", "illegible", "illegitimate"]
    }, {
        "Not according to law. ": ["illegal", "illegible", "illegitimate", "illiberal"]
    }, {
        "Undecipherable. ": ["illegible", "illegitimate", "illiberal", "illicit"]
    }, {
        "Unlawfully begotten. ": ["illegitimate", "illiberal", "illicit", "illimitable"]
    }, {
        "Stingy. ": ["illiberal", "illicit", "illimitable", "illiterate"]
    }, {
        "Unlawful. ": ["illicit", "illimitable", "illiterate", "ill-natured"]
    }, {
        "Boundless. ": ["illimitable", "illiterate", "ill-natured", "illogical"]
    }, {
        "Having little or no book-learning. ": ["illiterate", "ill-natured", "illogical", "illuminant"]
    }, {
        "Surly. ": ["ill-natured", "illogical", "illuminant", "illuminate"]
    }, {
        "Contrary to the rules of sound thought. ": ["illogical", "illuminant", "illuminate", "illumine"]
    }, {
        "That which may be used to produce light. ": ["illuminant", "illuminate", "illumine", "illusion"]
    }, {
        "To supply with light. ": ["illuminate", "illumine", "illusion", "illusive"]
    }, {
        "To make bright or clear. ": ["illumine", "illusion", "illusive", "illusory"]
    }, {
        "An unreal image presented to the senses. ": ["illusion", "illusive", "illusory", "imaginable"]
    }, {
        "Deceptive. ": ["illusive", "illusory", "imaginable", "imaginary"]
    }, {
        "Deceiving or tending to deceive, as by false appearance. ": ["illusory", "imaginable", "imaginary", "imbibe"]
    }, {
        "That can be imagined or conceived in the mind. ": ["imaginable", "imaginary", "imbibe", "imbroglio"]
    }, {
        "Fancied. ": ["imaginary", "imbibe", "imbroglio", "imbrue"]
    }, {
        "To drink or take in. ": ["imbibe", "imbroglio", "imbrue", "imitation"]
    }, {
        "A misunderstanding attended by ill feeling, perplexity, or strife. ": ["imbroglio", "imbrue", "imitation", "imitator"]
    }, {
        "To wet or moisten. ": ["imbrue", "imitation", "imitator", "immaculate"]
    }, {
        "That which is made as a likeness or copy. ": ["imitation", "imitator", "immaculate", "immaterial"]
    }, {
        "One who makes in imitation. ": ["imitator", "immaculate", "immaterial", "immature"]
    }, {
        "Without spot or blemish. ": ["immaculate", "immaterial", "immature", "immeasurable"]
    }, {
        "Of no essential consequence. ": ["immaterial", "immature", "immeasurable", "immense"]
    }, {
        "Not full-grown. ": ["immature", "immeasurable", "immense", "immerse"]
    }, {
        "Indefinitely extensive. ": ["immeasurable", "immense", "immerse", "immersion"]
    }, {
        "Very great in degree, extent, size, or quantity. ": ["immense", "immerse", "immersion", "immigrant"]
    }, {
        "To plunge or dip entirely under water or other fluid. ": ["immerse", "immersion", "immigrant", "immigrate"]
    }, {
        "The act of plunging or dipping entirely under water or another fluid. ": ["immersion", "immigrant", "immigrate", "imminence"]
    }, {
        "A foreigner who enters a country to settle there. ": ["immigrant", "immigrate", "imminence", "imminent"]
    }, {
        "To come into a country or region from a former habitat. ": ["immigrate", "imminence", "imminent", "immiscible"]
    }, {
        "Impending evil or danger. ": ["imminence", "imminent", "immiscible", "immoral"]
    }, {
        "Dangerous and close at hand. ": ["imminent", "immiscible", "immoral", "immortalize"]
    }, {
        "Separating, as oil and water. ": ["immiscible", "immoral", "immortalize", "immovable"]
    }, {
        "Habitually engaged in licentious or lewd practices. ": ["immoral", "immortalize", "immovable", "immune"]
    }, {
        "To cause to last or to be known or remembered throughout a great or indefinite length of time. ": ["immortalize", "immovable", "immune", "immutable"]
    }, {
        "Steadfast. ": ["immovable", "immune", "immutable", "impair"]
    }, {
        "Exempt, as from disease. ": ["immune", "immutable", "impair", "impalpable"]
    }, {
        "Unchangeable. ": ["immutable", "impair", "impalpable", "impartial"]
    }, {
        "To cause to become less or worse. ": ["impair", "impalpable", "impartial", "impassable"]
    }, {
        "Imperceptible to the touch. ": ["impalpable", "impartial", "impassable", "impassible"]
    }, {
        "Unbiased. ": ["impartial", "impassable", "impassible", "impassive"]
    }, {
        "That can not be passed through or over. ": ["impassable", "impassible", "impassive", "impatience"]
    }, {
        "Not moved or affected by feeling. ": ["impassible", "impassive", "impatience", "impeccable"]
    }, {
        "Unmoved by or not exhibiting feeling. ": ["impassive", "impatience", "impeccable", "impecunious"]
    }, {
        "Unwillingness to brook delays or wait the natural course of things. ": ["impatience", "impeccable", "impecunious", "impede"]
    }, {
        "Blameless. ": ["impeccable", "impecunious", "impede", "impel"]
    }, {
        "Having no money. ": ["impecunious", "impede", "impel", "impend"]
    }, {
        "To be an obstacle or to place obstacles in the way of. ": ["impede", "impel", "impend", "imperative"]
    }, {
        "To drive or urge forward. ": ["impel", "impend", "imperative", "imperceptible"]
    }, {
        "To be imminent. ": ["impend", "imperative", "imperceptible", "imperfectible"]
    }, {
        "Obligatory. ": ["imperative", "imperceptible", "imperfectible", "imperil"]
    }, {
        "Indiscernible. ": ["imperceptible", "imperfectible", "imperil", "imperious"]
    }, {
        "That can not be perfected. ": ["imperfectible", "imperil", "imperious", "impermissible"]
    }, {
        "To endanger. ": ["imperil", "imperious", "impermissible", "impersonal"]
    }, {
        "Insisting on obedience. ": ["imperious", "impermissible", "impersonal", "impersonate"]
    }, {
        "Not permissible. ": ["impermissible", "impersonal", "impersonate", "impersuadable"]
    }, {
        "Not relating to a particular person or thing. ": ["impersonal", "impersonate", "impersuadable", "impertinence"]
    }, {
        "To appear or act in the character of. ": ["impersonate", "impersuadable", "impertinence", "imperturbable"]
    }, {
        "Unyielding. ": ["impersuadable", "impertinence", "imperturbable", "impervious"]
    }, {
        "Rudeness. ": ["impertinence", "imperturbable", "impervious", "impetuosity"]
    }, {
        "Calm. ": ["imperturbable", "impervious", "impetuosity", "impetuous"]
    }, {
        "Impenetrable. ": ["impervious", "impetuosity", "impetuous", "impetus"]
    }, {
        "Rashness. ": ["impetuosity", "impetuous", "impetus", "impiety"]
    }, {
        "Impulsive. ": ["impetuous", "impetus", "impiety", "impious"]
    }, {
        "Any impulse or incentive. ": ["impetus", "impiety", "impious", "implausible"]
    }, {
        "Irreverence toward God. ": ["impiety", "impious", "implausible", "impliable"]
    }, {
        "Characterized by irreverence or irreligion. ": ["impious", "implausible", "impliable", "implicate"]
    }, {
        "Not plausible. ": ["implausible", "impliable", "implicate", "implicit"]
    }, {
        "Capable of being inferred. ": ["impliable", "implicate", "implicit", "imply"]
    }, {
        "To show or prove to be involved in or concerned ": ["implicate", "implicit", "imply", "impolitic"]
    }, {
        "Implied. ": ["implicit", "imply", "impolitic", "importation"]
    }, {
        "To signify. ": ["imply", "impolitic", "importation", "importunate"]
    }, {
        "Inexpedient. ": ["impolitic", "importation", "importunate", "importune"]
    }, {
        "The act or practice of bringing from one country into another. ": ["importation", "importunate", "importune", "impotent"]
    }, {
        "Urgent in character, request, or demand. ": ["importunate", "importune", "impotent", "impoverish"]
    }, {
        "To harass with persistent demands or entreaties. ": ["importune", "impotent", "impoverish", "impracticable"]
    }, {
        "Destitute of or lacking in power, physical, moral, or intellectual. ": ["impotent", "impoverish", "impracticable", "impregnable"]
    }, {
        "To make indigent or poor. ": ["impoverish", "impracticable", "impregnable", "impregnate"]
    }, {
        "Not feasible. ": ["impracticable", "impregnable", "impregnate", "impromptu"]
    }, {
        "That can not be taken by assault. ": ["impregnable", "impregnate", "impromptu", "improper"]
    }, {
        "To make pregnant. ": ["impregnate", "impromptu", "improper", "impropriety"]
    }, {
        "Anything done or said on the impulse of the moment. ": ["impromptu", "improper", "impropriety", "improvident"]
    }, {
        "Not appropriate, suitable, or becoming. ": ["improper", "impropriety", "improvident", "improvise"]
    }, {
        "The state or quality of being unfit, unseemly, or inappropriate. ": ["impropriety", "improvident", "improvise", "imprudent"]
    }, {
        "Lacking foresight or thrift. ": ["improvident", "improvise", "imprudent", "impudence"]
    }, {
        "To do anything extemporaneously or offhand. ": ["improvise", "imprudent", "impudence", "impugn"]
    }, {
        "Heedless. ": ["imprudent", "impudence", "impugn", "impulsion"]
    }, {
        "Insolent disrespect. ": ["impudence", "impugn", "impulsion", "impulsive"]
    }, {
        "To assail with arguments, insinuations, or accusations. ": ["impugn", "impulsion", "impulsive", "impunity"]
    }, {
        "Impetus. ": ["impulsion", "impulsive", "impunity", "impure"]
    }, {
        "Unpremeditated. ": ["impulsive", "impunity", "impure", "impute"]
    }, {
        "Freedom from punishment. ": ["impunity", "impure", "impute", "inaccessible"]
    }, {
        "Tainted. ": ["impure", "impute", "inaccessible", "inaccurate"]
    }, {
        "To attribute. ": ["impute", "inaccessible", "inaccurate", "inactive"]
    }, {
        "Difficult of approach. ": ["inaccessible", "inaccurate", "inactive", "inadequate"]
    }, {
        "Not exactly according to the facts. ": ["inaccurate", "inactive", "inadequate", "inadmissible"]
    }, {
        "Inert. ": ["inactive", "inadequate", "inadmissible", "inadvertent"]
    }, {
        "Insufficient. ": ["inadequate", "inadmissible", "inadvertent", "inadvisable"]
    }, {
        "Not to be approved, considered, or allowed, as testimony. ": ["inadmissible", "inadvertent", "inadvisable", "inane"]
    }, {
        "Accidental. ": ["inadvertent", "inadvisable", "inane", "inanimate"]
    }, {
        "Unadvisable. ": ["inadvisable", "inane", "inanimate", "inapprehensible"]
    }, {
        "Silly. ": ["inane", "inanimate", "inapprehensible", "inapt"]
    }, {
        "Destitute of animal life. ": ["inanimate", "inapprehensible", "inapt", "inarticulate"]
    }, {
        "Not to be understood. ": ["inapprehensible", "inapt", "inarticulate", "inaudible"]
    }, {
        "Awkward or slow. ": ["inapt", "inarticulate", "inaudible", "inborn"]
    }, {
        "Speechless. ": ["inarticulate", "inaudible", "inborn", "inbred"]
    }, {
        "That can not be heard. ": ["inaudible", "inborn", "inbred", "incandescence"]
    }, {
        "Implanted by nature. ": ["inborn", "inbred", "incandescence", "incandescent"]
    }, {
        "Innate. ": ["inbred", "incandescence", "incandescent", "incapacitate"]
    }, {
        "The state of being white or glowing with heat. ": ["incandescence", "incandescent", "incapacitate", "incapacity"]
    }, {
        "White or glowing with heat. ": ["incandescent", "incapacitate", "incapacity", "incarcerate"]
    }, {
        "To deprive of power, capacity, competency, or qualification. ": ["incapacitate", "incapacity", "incarcerate", "incendiary"]
    }, {
        "Want of power to apprehend, understand, and manage. ": ["incapacity", "incarcerate", "incendiary", "incentive"]
    }, {
        "To imprison. ": ["incarcerate", "incendiary", "incentive", "inception"]
    }, {
        "Chemical or person who starts a fire-literally or figuratively. ": ["incendiary", "incentive", "inception", "inceptive"]
    }, {
        "That which moves the mind or inflames the passions. ": ["incentive", "inception", "inceptive", "incessant"]
    }, {
        "The beginning. ": ["inception", "inceptive", "incessant", "inchmeal"]
    }, {
        "Beginning. ": ["inceptive", "incessant", "inchmeal", "inchoate"]
    }, {
        "Unceasing. ": ["incessant", "inchmeal", "inchoate", "inchoative"]
    }, {
        "Piecemeal. ": ["inchmeal", "inchoate", "inchoative", "incidence"]
    }, {
        "Incipient. ": ["inchoate", "inchoative", "incidence", "incident"]
    }, {
        "That which begins, or expresses beginning. ": ["inchoative", "incidence", "incident", "incidentally"]
    }, {
        "Casual occurrence. ": ["incidence", "incident", "incidentally", "incinerate"]
    }, {
        "A happening in general, especially one of little importance. ": ["incident", "incidentally", "incinerate", "incipience"]
    }, {
        "Without intention. ": ["incidentally", "incinerate", "incipience", "incipient"]
    }, {
        "To reduce to ashes. ": ["incinerate", "incipience", "incipient", "incisor"]
    }, {
        "Beginning. ": ["incipience", "incipient", "incisor", "incite"]
    }, {
        "Initial. ": ["incipient", "incisor", "incite", "incitement"]
    }, {
        "A front or cutting tooth. ": ["incisor", "incite", "incitement", "incoercible"]
    }, {
        "To rouse to a particular action. ": ["incite", "incitement", "incoercible", "incoherence"]
    }, {
        "That which moves to action, or serves as an incentive or stimulus. ": ["incitement", "incoercible", "incoherence", "incoherent"]
    }, {
        "Incapable of being forced, constrained, or compelled. ": ["incoercible", "incoherence", "incoherent", "incombustible"]
    }, {
        "Want of connection, or agreement, as of parts or ideas in thought, speech, etc. ": ["incoherence", "incoherent", "incombustible", "incomparable"]
    }, {
        "Not logically coordinated, as to parts, elements, or details. ": ["incoherent", "incombustible", "incomparable", "incompatible"]
    }, {
        "That can not be burned. ": ["incombustible", "incomparable", "incompatible", "incompetence"]
    }, {
        "Matchless. ": ["incomparable", "incompatible", "incompetence", "incompetent"]
    }, {
        "Discordant. ": ["incompatible", "incompetence", "incompetent", "incomplete"]
    }, {
        "General lack of capacity or fitness. ": ["incompetence", "incompetent", "incomplete", "incomprehensible"]
    }, {
        "Not having the abilities desired or necessary for any purpose. ": ["incompetent", "incomplete", "incomprehensible", "incompressible"]
    }, {
        "Lacking some element, part, or adjunct necessary or required. ": ["incomplete", "incomprehensible", "incompressible", "inconceivable"]
    }, {
        "Not understandable. ": ["incomprehensible", "incompressible", "inconceivable", "incongruous"]
    }, {
        "Resisting all attempts to reduce volume by pressure. ": ["incompressible", "inconceivable", "incongruous", "inconsequential"]
    }, {
        "Incomprehensible. ": ["inconceivable", "incongruous", "inconsequential", "inconsiderable"]
    }, {
        "Unsuitable for the time, place, or occasion. ": ["incongruous", "inconsequential", "inconsiderable", "inconsistent"]
    }, {
        "Valueless. ": ["inconsequential", "inconsiderable", "inconsistent", "inconstant"]
    }, {
        "Small in quantity or importance. ": ["inconsiderable", "inconsistent", "inconstant", "incontrovertible"]
    }, {
        "Contradictory. ": ["inconsistent", "inconstant", "incontrovertible", "inconvenient"]
    }, {
        "Changeable. ": ["inconstant", "incontrovertible", "inconvenient", "indefensible"]
    }, {
        "Indisputable. ": ["incontrovertible", "inconvenient", "indefensible", "indefinitely"]
    }, {
        "Interfering with comfort or progress. ": ["inconvenient", "indefensible", "indefinitely", "indelible"]
    }, {
        "Untenable. ": ["indefensible", "indefinitely", "indelible", "indescribable"]
    }, {
        "In a vague or uncertain way. ": ["indefinitely", "indelible", "indescribable", "indestructible"]
    }, {
        "That can not be blotted out, effaced, destroyed, or removed. ": ["indelible", "indescribable", "indestructible", "indicant"]
    }, {
        "That can not be described. ": ["indescribable", "indestructible", "indicant", "indicator"]
    }, {
        "That can not be destroyed. ": ["indestructible", "indicant", "indicator", "indict"]
    }, {
        "That which points out. ": ["indicant", "indicator", "indict", "indigence"]
    }, {
        "One who or that which points out. ": ["indicator", "indict", "indigence", "indigenous"]
    }, {
        "To find and declare chargeable with crime. ": ["indict", "indigence", "indigenous", "indigent"]
    }, {
        "Poverty. ": ["indigence", "indigenous", "indigent", "indigestible"]
    }, {
        "Native. ": ["indigenous", "indigent", "indigestible", "indigestion"]
    }, {
        "Poor. ": ["indigent", "indigestible", "indigestion", "indignant"]
    }, {
        "Not digestible, or difficult to digest. ": ["indigestible", "indigestion", "indignant", "indignity"]
    }, {
        "Difficulty or failure in the alimentary canal in changing food into absorptive nutriment. ": ["indigestion", "indignant", "indignity", "indiscernible"]
    }, {
        "Having such anger and scorn as is aroused by meanness or wickedness. ": ["indignant", "indignity", "indiscernible", "indiscreet"]
    }, {
        "Unmerited contemptuous conduct or treatment. ": ["indignity", "indiscernible", "indiscreet", "indiscriminate"]
    }, {
        "Not perceptible. ": ["indiscernible", "indiscreet", "indiscriminate", "indispensable"]
    }, {
        "Lacking wise judgment. ": ["indiscreet", "indiscriminate", "indispensable", "indistinct"]
    }, {
        "Promiscuous. ": ["indiscriminate", "indispensable", "indistinct", "indivertible"]
    }, {
        "Necessary or requisite for the purpose. ": ["indispensable", "indistinct", "indivertible", "indivisible"]
    }, {
        "Vague. ": ["indistinct", "indivertible", "indivisible", "indolence"]
    }, {
        "That can not be turned aside. ": ["indivertible", "indivisible", "indolence", "indolent"]
    }, {
        "Not separable into parts. ": ["indivisible", "indolence", "indolent", "indomitable"]
    }, {
        "Laziness. ": ["indolence", "indolent", "indomitable", "induct"]
    }, {
        "Habitually inactive or idle. ": ["indolent", "indomitable", "induct", "indulgence"]
    }, {
        "Unconquerable. ": ["indomitable", "induct", "indulgence", "indulgent"]
    }, {
        "To bring in. ": ["induct", "indulgence", "indulgent", "inebriate"]
    }, {
        "The yielding to inclination, passion, desire, or propensity in oneself or another. ": ["indulgence", "indulgent", "inebriate", "inedible"]
    }, {
        "Yielding to the desires or humor of oneself or those under one's care. ": ["indulgent", "inebriate", "inedible", "ineffable"]
    }, {
        "To intoxicate. ": ["inebriate", "inedible", "ineffable", "inefficient"]
    }, {
        "Not good for food. ": ["inedible", "ineffable", "inefficient", "inefficiency"]
    }, {
        "Unutterable. ": ["ineffable", "inefficient", "inefficiency", "ineligible"]
    }, {
        "Not accomplishing an intended purpose. ": ["inefficient", "inefficiency", "ineligible", "inept"]
    }, {
        "That which does not accomplish an intended purpose. ": ["inefficiency", "ineligible", "inept", "inert"]
    }, {
        "Not suitable to be selected or chosen. ": ["ineligible", "inept", "inert", "inestimable"]
    }, {
        "Not fit or suitable. ": ["inept", "inert", "inestimable", "inevitable"]
    }, {
        "Inanimate. ": ["inert", "inestimable", "inevitable", "inexcusable"]
    }, {
        "Above price. ": ["inestimable", "inevitable", "inexcusable", "inexhaustible"]
    }, {
        "Unavoidable. ": ["inevitable", "inexcusable", "inexhaustible", "inexorable"]
    }, {
        "Not to be justified. ": ["inexcusable", "inexhaustible", "inexorable", "inexpedient"]
    }, {
        "So large or furnishing so great a supply as not to be emptied, wasted, or spent. ": ["inexhaustible", "inexorable", "inexpedient", "inexpensive"]
    }, {
        "Unrelenting. ": ["inexorable", "inexpedient", "inexpensive", "inexperience"]
    }, {
        "Unadvisable. ": ["inexpedient", "inexpensive", "inexperience", "inexplicable"]
    }, {
        "Low-priced. ": ["inexpensive", "inexperience", "inexplicable", "inexpressible"]
    }, {
        "Lack of or deficiency in experience. ": ["inexperience", "inexplicable", "inexpressible", "inextensible"]
    }, {
        "Such as can not be made plain. ": ["inexplicable", "inexpressible", "inextensible", "infallible"]
    }, {
        "Unutterable. ": ["inexpressible", "inextensible", "infallible", "infamous"]
    }, {
        "Of unchangeable length or area. ": ["inextensible", "infallible", "infamous", "infamy"]
    }, {
        "Exempt from error of judgment, as in opinion or statement. ": ["infallible", "infamous", "infamy", "inference"]
    }, {
        "Publicly branded or notorious, as for vice, or crime. ": ["infamous", "infamy", "inference", "infernal"]
    }, {
        "Total loss or destitution of honor or reputation. ": ["infamy", "inference", "infernal", "infest"]
    }, {
        "The derivation of a judgment from any given material of knowledge on the ground of law. ": ["inference", "infernal", "infest", "infidel"]
    }, {
        "Akin to or befitting hell or its occupants. ": ["infernal", "infest", "infidel", "infidelity"]
    }, {
        "To be present in such numbers as to be a source of annoyance, trouble, or danger. ": ["infest", "infidel", "infidelity", "infinite"]
    }, {
        "One who denies the existence of God. ": ["infidel", "infidelity", "infinite", "infinity"]
    }, {
        "Disloyalty. ": ["infidelity", "infinite", "infinity", "infirm"]
    }, {
        "Measureless. ": ["infinite", "infinity", "infirm", "infirmary"]
    }, {
        "Boundless or immeasurable extension or duration. ": ["infinity", "infirm", "infirmary", "infirmity"]
    }, {
        "Lacking in bodily or mental strength. ": ["infirm", "infirmary", "infirmity", "inflammable"]
    }, {
        "A place for the reception or treatment of the sick. ": ["infirmary", "infirmity", "inflammable", "inflammation"]
    }, {
        "A physical, mental, or moral weakness or flaw. ": ["infirmity", "inflammable", "inflammation", "inflexible"]
    }, {
        "Easily set on fire or excited. ": ["inflammable", "inflammation", "inflexible", "influence"]
    }, {
        "A morbid process in some part of the body characterized by heat, swelling, and pain. ": ["inflammation", "inflexible", "influence", "influential"]
    }, {
        "That can not be altered or varied. ": ["inflexible", "influence", "influential", "influx"]
    }, {
        "Ability to sway the will of another. ": ["influence", "influential", "influx", "infrequence"]
    }, {
        "Having the power to sway the will of another. ": ["influential", "influx", "infrequence", "infrequent"]
    }, {
        "Infusion. ": ["influx", "infrequence", "infrequent", "infringe"]
    }, {
        "Rareness. ": ["infrequence", "infrequent", "infringe", "infuse"]
    }, {
        "Uncommon. ": ["infrequent", "infringe", "infuse", "infusion"]
    }, {
        "To trespass upon. ": ["infringe", "infuse", "infusion", "ingenious"]
    }, {
        "To instill, introduce, or inculcate, as principles or qualities. ": ["infuse", "infusion", "ingenious", "ingenuity"]
    }, {
        "The act of imbuing, or pouring in. ": ["infusion", "ingenious", "ingenuity", "ingenuous"]
    }, {
        "Evincing skill, originality, or cleverness, as in contrivance or arrangement. ": ["ingenious", "ingenuity", "ingenuous", "inglorious"]
    }, {
        "Cleverness in contriving, combining, or originating. ": ["ingenuity", "ingenuous", "inglorious", "ingraft"]
    }, {
        "Candid, frank, or open in character or quality. ": ["ingenuous", "inglorious", "ingraft", "ingratiate"]
    }, {
        "Shameful. ": ["inglorious", "ingraft", "ingratiate", "ingratitude"]
    }, {
        "To set or implant deeply and firmly. ": ["ingraft", "ingratiate", "ingratitude", "ingredient"]
    }, {
        "To win confidence or good graces for oneself. ": ["ingratiate", "ingratitude", "ingredient", "inherence"]
    }, {
        "Insensibility to kindness. ": ["ingratitude", "ingredient", "inherence", "inherent"]
    }, {
        "Component. ": ["ingredient", "inherence", "inherent", "inhibit"]
    }, {
        "The state of being permanently existing in something. ": ["inherence", "inherent", "inhibit", "inhospitable"]
    }, {
        "Intrinsic. ": ["inherent", "inhibit", "inhospitable", "inhuman"]
    }, {
        "To hold back or in. ": ["inhibit", "inhospitable", "inhuman", "inhume"]
    }, {
        "Not disposed to entertain strangers gratuitously. ": ["inhospitable", "inhuman", "inhume", "inimical"]
    }, {
        "Savage. ": ["inhuman", "inhume", "inimical", "iniquity"]
    }, {
        "To place in the earth, as a dead body. ": ["inhume", "inimical", "iniquity", "initiate"]
    }, {
        "Adverse. ": ["inimical", "iniquity", "initiate", "inject"]
    }, {
        "Gross wrong or injustice. ": ["iniquity", "initiate", "inject", "injunction"]
    }, {
        "To perform the first act or rite. ": ["initiate", "inject", "injunction", "inkling"]
    }, {
        "To introduce, as a fluid, by injection. ": ["inject", "injunction", "inkling", "inland"]
    }, {
        "Mandate. ": ["injunction", "inkling", "inland", "inlet"]
    }, {
        "A hint. ": ["inkling", "inland", "inlet", "inmost"]
    }, {
        "Remote from the sea. ": ["inland", "inlet", "inmost", "innocuous"]
    }, {
        "A small body of water leading into a larger. ": ["inlet", "inmost", "innocuous", "innovate"]
    }, {
        "Deepest within. ": ["inmost", "innocuous", "innovate", "innuendo"]
    }, {
        "Harmless. ": ["innocuous", "innovate", "innuendo", "innumerable"]
    }, {
        "To introduce or strive to introduce new things. ": ["innovate", "innuendo", "innumerable", "inoffensive"]
    }, {
        "Insinuation. ": ["innuendo", "innumerable", "inoffensive", "inopportune"]
    }, {
        "Countless. ": ["innumerable", "inoffensive", "inopportune", "inquire"]
    }, {
        "Causing nothing displeasing or disturbing. ": ["inoffensive", "inopportune", "inquire", "inquisition"]
    }, {
        "Unsuitable or inconvenient, especially as to time. ": ["inopportune", "inquire", "inquisition", "inquisitive"]
    }, {
        "To ask information about. ": ["inquire", "inquisition", "inquisitive", "inquisitor"]
    }, {
        "A court or tribunal for examination and punishment of heretics. ": ["inquisition", "inquisitive", "inquisitor", "inroad"]
    }, {
        "Given to questioning, especially out of curiosity. ": ["inquisitive", "inquisitor", "inroad", "insatiable"]
    }, {
        "One who makes an investigation. ": ["inquisitor", "inroad", "insatiable", "inscribe"]
    }, {
        "Forcible encroachment or trespass. ": ["inroad", "insatiable", "inscribe", "inscrutable"]
    }, {
        "That desires or craves immoderately or unappeasably. ": ["insatiable", "inscribe", "inscrutable", "insecure"]
    }, {
        "To enter in a book, or on a list, roll, or document, by writing. ": ["inscribe", "inscrutable", "insecure", "insensible"]
    }, {
        "Impenetrably mysterious or profound. ": ["inscrutable", "insecure", "insensible", "insentient"]
    }, {
        "Not assured of safety. ": ["insecure", "insensible", "insentient", "inseparable"]
    }, {
        "Imperceptible. ": ["insensible", "insentient", "inseparable", "insidious"]
    }, {
        "Lacking the power of feeling or perceiving. ": ["insentient", "inseparable", "insidious", "insight"]
    }, {
        "That can not be separated. ": ["inseparable", "insidious", "insight", "insignificance"]
    }, {
        "Working ill by slow and stealthy means. ": ["insidious", "insight", "insignificance", "insignificant"]
    }, {
        "Intellectual discernment. ": ["insight", "insignificance", "insignificant", "insinuate"]
    }, {
        "Lack of import or of importance. ": ["insignificance", "insignificant", "insinuate", "insipid"]
    }, {
        "Without importance, force, or influence. ": ["insignificant", "insinuate", "insipid", "insistence"]
    }, {
        "To imply. ": ["insinuate", "insipid", "insistence", "insistent"]
    }, {
        "Tasteless. ": ["insipid", "insistence", "insistent", "insolence"]
    }, {
        "Urgency. ": ["insistence", "insistent", "insolence", "insolent"]
    }, {
        "Urgent. ": ["insistent", "insolence", "insolent", "insomnia"]
    }, {
        "Pride or haughtiness exhibited in contemptuous and overbearing treatment of others. ": ["insolence", "insolent", "insomnia", "inspector"]
    }, {
        "Impudent. ": ["insolent", "insomnia", "inspector", "instance"]
    }, {
        "Sleeplessness. ": ["insomnia", "inspector", "instance", "instant"]
    }, {
        "An official appointed to examine or oversee any matter of public interest or importance. ": ["inspector", "instance", "instant", "instantaneous"]
    }, {
        "A single occurrence or happening of a given kind. ": ["instance", "instant", "instantaneous", "instigate"]
    }, {
        "A very brief portion of time. ": ["instant", "instantaneous", "instigate", "instigator"]
    }, {
        "Done without perceptible lapse of time. ": ["instantaneous", "instigate", "instigator", "instill"]
    }, {
        "To provoke. ": ["instigate", "instigator", "instill", "instructive"]
    }, {
        "One who incites to evil. ": ["instigator", "instill", "instructive", "insufficiency"]
    }, {
        "To infuse. ": ["instill", "instructive", "insufficiency", "insufficient"]
    }, {
        "Conveying knowledge. ": ["instructive", "insufficiency", "insufficient", "insular"]
    }, {
        "Inadequacy. ": ["insufficiency", "insufficient", "insular", "insulate"]
    }, {
        "Inadequate for some need, purpose, or use. ": ["insufficient", "insular", "insulate", "insuperable"]
    }, {
        "Pertaining to an island. ": ["insular", "insulate", "insuperable", "insuppressible"]
    }, {
        "To place in a detached state or situation. ": ["insulate", "insuperable", "insuppressible", "insurgence"]
    }, {
        "Invincible. ": ["insuperable", "insuppressible", "insurgence", "insurgent"]
    }, {
        "Incapable of being concealed. ": ["insuppressible", "insurgence", "insurgent", "insurrection"]
    }, {
        "Uprising. ": ["insurgence", "insurgent", "insurrection", "intangible"]
    }, {
        "One who takes part in forcible opposition to the constituted authorities of a place. ": ["insurgent", "insurrection", "intangible", "integrity"]
    }, {
        "The state of being in active resistance to authority. ": ["insurrection", "intangible", "integrity", "intellect"]
    }, {
        "Not perceptible to the touch. ": ["intangible", "integrity", "intellect", "intellectual"]
    }, {
        "Uprightness of character and soundness of moral principle. ": ["integrity", "intellect", "intellectual", "intelligence"]
    }, {
        "The faculty of perception or thought. ": ["intellect", "intellectual", "intelligence", "intelligible"]
    }, {
        "Characterized by intelligence. ": ["intellectual", "intelligence", "intelligible", "intemperance"]
    }, {
        "Capacity to know or understand. ": ["intelligence", "intelligible", "intemperance", "intension"]
    }, {
        "Comprehensible. ": ["intelligible", "intemperance", "intension", "intensive"]
    }, {
        "Immoderate action or indulgence, as of the appetites. ": ["intemperance", "intension", "intensive", "intention"]
    }, {
        "The act of stringing or stretching, or state of being strained. ": ["intension", "intensive", "intention", "interact"]
    }, {
        "Adding emphasis or force. ": ["intensive", "intention", "interact", "intercede"]
    }, {
        "That upon which the mind is set. ": ["intention", "interact", "intercede", "intercept"]
    }, {
        "To act reciprocally. ": ["interact", "intercede", "intercept", "intercession"]
    }, {
        "To mediate between persons. ": ["intercede", "intercept", "intercession", "intercessor"]
    }, {
        "To interrupt the course of. ": ["intercept", "intercession", "intercessor", "interdict"]
    }, {
        "Entreaty in behalf of others. ": ["intercession", "intercessor", "interdict", "interim"]
    }, {
        "A mediator. ": ["intercessor", "interdict", "interim", "interlocutor"]
    }, {
        "Authoritative act of prohibition. ": ["interdict", "interim", "interlocutor", "interlude"]
    }, {
        "Time between acts or periods. ": ["interim", "interlocutor", "interlude", "intermediate"]
    }, {
        "One who takes part in a conversation or oral discussion. ": ["interlocutor", "interlude", "intermediate", "interminable"]
    }, {
        "An action or event considered as coming between others of greater length. ": ["interlude", "intermediate", "interminable", "intermission"]
    }, {
        "Being in a middle place or degree or between extremes. ": ["intermediate", "interminable", "intermission", "intermit"]
    }, {
        "Having no limit or end. ": ["interminable", "intermission", "intermit", "intermittent"]
    }, {
        "A recess. ": ["intermission", "intermit", "intermittent", "interpolation"]
    }, {
        "To cause to cease temporarily. ": ["intermit", "intermittent", "interpolation", "interpose"]
    }, {
        "A temporary discontinuance. ": ["intermittent", "interpolation", "interpose", "interposition"]
    }, {
        "Verbal interference. ": ["interpolation", "interpose", "interposition", "interpreter"]
    }, {
        "To come between other things or persons. ": ["interpose", "interposition", "interpreter", "interrogate"]
    }, {
        "A coming between. ": ["interposition", "interpreter", "interrogate", "interrogative"]
    }, {
        "A person who makes intelligible the speech of a foreigner by oral translation. ": ["interpreter", "interrogate", "interrogative", "interrogatory"]
    }, {
        "To examine formally by questioning. ": ["interrogate", "interrogative", "interrogatory", "interrupt"]
    }, {
        "Having the nature or form of a question. ": ["interrogative", "interrogatory", "interrupt", "intersect"]
    }, {
        "A question or inquiry. ": ["interrogatory", "interrupt", "intersect", "intervale"]
    }, {
        "To stop while in progress. ": ["interrupt", "intersect", "intervale", "intervene"]
    }, {
        "To cut through or into so as to divide. ": ["intersect", "intervale", "intervene", "intestacy"]
    }, {
        "A low tract of land between hills, especially along a river. ": ["intervale", "intervene", "intestacy", "intestate"]
    }, {
        "To interfere for some end. ": ["intervene", "intestacy", "intestate", "intestine"]
    }, {
        "The condition resulting from one's dying not having made a valid will. ": ["intestacy", "intestate", "intestine", "intimacy"]
    }, {
        "Not having made a valid will. ": ["intestate", "intestine", "intimacy", "intimidate"]
    }, {
        "That part of the digestive tube below or behind the stomach, extending to the anus. ": ["intestine", "intimacy", "intimidate", "intolerable"]
    }, {
        "Close or confidential friendship. ": ["intimacy", "intimidate", "intolerable", "intolerance"]
    }, {
        "To cause to become frightened. ": ["intimidate", "intolerable", "intolerance", "intolerant"]
    }, {
        "Insufferable. ": ["intolerable", "intolerance", "intolerant", "intoxicant"]
    }, {
        "Inability or unwillingness to bear or endure. ": ["intolerance", "intolerant", "intoxicant", "intoxicate"]
    }, {
        "Bigoted. ": ["intolerant", "intoxicant", "intoxicate", "intracellular"]
    }, {
        "Anything that unduly exhilarates or excites. ": ["intoxicant", "intoxicate", "intracellular", "intramural"]
    }, {
        "To make drunk. ": ["intoxicate", "intracellular", "intramural", "intrepid"]
    }, {
        "Occurring or situated within a cell. ": ["intracellular", "intramural", "intrepid", "intricacy"]
    }, {
        "Situated within the walls of a city. ": ["intramural", "intrepid", "intricacy", "intricate"]
    }, {
        "Fearless and bold. ": ["intrepid", "intricacy", "intricate", "intrigue"]
    }, {
        "Perplexity. ": ["intricacy", "intricate", "intrigue", "intrinsic"]
    }, {
        "Difficult to follow or understand. ": ["intricate", "intrigue", "intrinsic", "introductory"]
    }, {
        "A plot or scheme, usually complicated and intended to accomplish something by secret ways. ": ["intrigue", "intrinsic", "introductory", "introgression"]
    }, {
        "Inherent. ": ["intrinsic", "introductory", "introgression", "intromit"]
    }, {
        "Preliminary. ": ["introductory", "introgression", "intromit", "introspect"]
    }, {
        "Entrance. ": ["introgression", "intromit", "introspect", "introspection"]
    }, {
        "To insert. ": ["intromit", "introspect", "introspection", "introversion"]
    }, {
        "To look into. ": ["introspect", "introspection", "introversion", "introvert"]
    }, {
        "The act of observing and analyzing one's own thoughts and feelings. ": ["introspection", "introversion", "introvert", "intrude"]
    }, {
        "The act of turning or directing inward, physically or mentally. ": ["introversion", "introvert", "intrude", "intrusion"]
    }, {
        "To turn within. ": ["introvert", "intrude", "intrusion", "intuition"]
    }, {
        "To come in without leave or license. ": ["intrude", "intrusion", "intuition", "inundate"]
    }, {
        "The act of entering without warrant or invitation; encroachment. ": ["intrusion", "intuition", "inundate", "inundation"]
    }, {
        "Instinctive knowledge or feeling. ": ["intuition", "inundate", "inundation", "inure"]
    }, {
        "To fill with an overflowing abundance. ": ["inundate", "inundation", "inure", "invalid"]
    }, {
        "Flood. ": ["inundation", "inure", "invalid", "invalid"]
    }, {
        "To harden or toughen by use, exercise, or exposure. ": ["inure", "invalid", "invalid", "invalidate"]
    }, {
        "Having no force, weight, or cogency. ": ["invalid", "invalid", "invalidate", "invaluable"]
    }, {
        "One who is disabled by illness or injury. ": ["invalid", "invalidate", "invaluable", "invariable"]
    }, {
        "To render of no force or effect. ": ["invalidate", "invaluable", "invariable", "invasion"]
    }, {
        "Exceedingly precious. ": ["invaluable", "invariable", "invasion", "invective"]
    }, {
        "Unchangeable. ": ["invariable", "invasion", "invective", "inveigh"]
    }, {
        "Encroachment, as by an act of intrusion or trespass. ": ["invasion", "invective", "inveigh", "inventive"]
    }, {
        "An utterance intended to cast censure, or reproach. ": ["invective", "inveigh", "inventive", "inverse"]
    }, {
        "To utter vehement censure or invective. ": ["inveigh", "inventive", "inverse", "inversion"]
    }, {
        "Quick at contrivance. ": ["inventive", "inverse", "inversion", "invert"]
    }, {
        "Contrary in tendency or direction. ": ["inverse", "inversion", "invert", "investigator"]
    }, {
        "Change of order so that the first shall become last and the last first. ": ["inversion", "invert", "investigator", "investor"]
    }, {
        "To turn inside out, upside down, or in opposite direction. ": ["invert", "investigator", "investor", "inveterate"]
    }, {
        "One who investigates. ": ["investigator", "investor", "inveterate", "invidious"]
    }, {
        "One who invests money. ": ["investor", "inveterate", "invidious", "invigorate"]
    }, {
        "Habitual. ": ["inveterate", "invidious", "invigorate", "invincible"]
    }, {
        "Showing or feeling envy. ": ["invidious", "invigorate", "invincible", "inviolable"]
    }, {
        "To animate. ": ["invigorate", "invincible", "inviolable", "invoke"]
    }, {
        "Not to be conquered, subdued, or overcome. ": ["invincible", "inviolable", "invoke", "involuntary"]
    }, {
        "Incapable of being injured or disturbed. ": ["inviolable", "invoke", "involuntary", "involution"]
    }, {
        "To call on for assistance or protection. ": ["invoke", "involuntary", "involution", "involve"]
    }, {
        "Unwilling. ": ["involuntary", "involution", "involve", "invulnerable"]
    }, {
        "Complication. ": ["involution", "involve", "invulnerable", "inwardly"]
    }, {
        "To draw into entanglement, literally or figuratively. ": ["involve", "invulnerable", "inwardly", "iota"]
    }, {
        "That can not be wounded or hurt. ": ["invulnerable", "inwardly", "iota", "irascible"]
    }, {
        "With no outward manifestation. ": ["inwardly", "iota", "irascible", "irate"]
    }, {
        "A small or insignificant mark or part. ": ["iota", "irascible", "irate", "ire"]
    }, {
        "Prone to anger. ": ["irascible", "irate", "ire", "iridescence"]
    }, {
        "Moved to anger. ": ["irate", "ire", "iridescence", "iridescent"]
    }, {
        "Wrath. ": ["ire", "iridescence", "iridescent", "irk"]
    }, {
        "A many-colored appearance. ": ["iridescence", "iridescent", "irk", "irksome"]
    }, {
        "Exhibiting changing rainbow-colors due to the interference of the light. ": ["iridescent", "irk", "irksome", "irony"]
    }, {
        "To afflict with pain, vexation, or fatigue. ": ["irk", "irksome", "irony", "irradiance"]
    }, {
        "Wearisome. ": ["irksome", "irony", "irradiance", "irradiate"]
    }, {
        "Censure or ridicule under cover of praise or compliment. ": ["irony", "irradiance", "irradiate", "irrational"]
    }, {
        "Luster. ": ["irradiance", "irradiate", "irrational", "irreducible"]
    }, {
        "To render clear and intelligible. ": ["irradiate", "irrational", "irreducible", "irrefragable"]
    }, {
        "Not possessed of reasoning powers or understanding. ": ["irrational", "irreducible", "irrefragable", "irrefrangible"]
    }, {
        "That can not be lessened. ": ["irreducible", "irrefragable", "irrefrangible", "irrelevant"]
    }, {
        "That can not be refuted or disproved. ": ["irrefragable", "irrefrangible", "irrelevant", "irreligious"]
    }, {
        "That can not be broken or violated. ": ["irrefrangible", "irrelevant", "irreligious", "irreparable"]
    }, {
        "Inapplicable. ": ["irrelevant", "irreligious", "irreparable", "irrepressible"]
    }, {
        "Indifferent or opposed to religion. ": ["irreligious", "irreparable", "irrepressible", "irresistible"]
    }, {
        "That can not be rectified or made amends for. ": ["irreparable", "irrepressible", "irresistible", "irresponsible"]
    }, {
        "That can not be restrained or kept down. ": ["irrepressible", "irresistible", "irresponsible", "irreverence"]
    }, {
        "That can not be successfully withstood or opposed. ": ["irresistible", "irresponsible", "irreverence", "irreverent"]
    }, {
        "Careless of or unable to meet responsibilities. ": ["irresponsible", "irreverence", "irreverent", "irreverential"]
    }, {
        "The quality showing or expressing a deficiency of veneration, especially for sacred things. ": ["irreverence", "irreverent", "irreverential", "irreversible"]
    }, {
        "Showing or expressing a deficiency of veneration, especially for sacred things. ": ["irreverent", "irreverential", "irreversible", "irrigant"]
    }, {
        "Showing or expressing a deficiency of veneration, especially for sacred things. ": ["irreverential", "irreversible", "irrigant", "irrigate"]
    }, {
        "Irrevocable. ": ["irreversible", "irrigant", "irrigate", "irritable"]
    }, {
        "Serving to water lands by artificial means. ": ["irrigant", "irrigate", "irritable", "irritancy"]
    }, {
        "To water, as land, by ditches or other artificial means. ": ["irrigate", "irritable", "irritancy", "irritant"]
    }, {
        "Showing impatience or ill temper on little provocation. ": ["irritable", "irritancy", "irritant", "irritate"]
    }, {
        "The quality of producing vexation. ": ["irritancy", "irritant", "irritate", "irruption"]
    }, {
        "A mechanical, chemical, or pathological agent of inflammation, pain, or tension. ": ["irritant", "irritate", "irruption", "isle"]
    }, {
        "To excite ill temper or impatience in. ": ["irritate", "irruption", "isle", "islet"]
    }, {
        "Sudden invasion. ": ["irruption", "isle", "islet", "isobar"]
    }, {
        "An island. ": ["isle", "islet", "isobar", "isochronous"]
    }, {
        "A little island. ": ["islet", "isobar", "isochronous", "isolate"]
    }, {
        "A line joining points at which the barometric pressure is the same at a specified moment. ": ["isobar", "isochronous", "isolate", "isothermal"]
    }, {
        "Relating to or denoting equal intervals of time. ": ["isochronous", "isolate", "isothermal", "itinerant"]
    }, {
        "To separate from others of its kind. ": ["isolate", "isothermal", "itinerant", "itinerary"]
    }, {
        "Having or marking equality of temperature. ": ["isothermal", "itinerant", "itinerary", "itinerate"]
    }, {
        "Wandering. ": ["itinerant", "itinerary", "itinerate", "jargon"]
    }, {
        "A detailed account or diary of a journey. ": ["itinerary", "itinerate", "jargon", "jaundice"]
    }, {
        "To wander from place to place. ": ["itinerate", "jargon", "jaundice", "jeopardize"]
    }, {
        "Confused, unintelligible speech or highly technical speech. ": ["jargon", "jaundice", "jeopardize", "Jingo"]
    }, {
        "A morbid condition, due to obstructed excretion of bile or characterized by yellowing of the skin.": ["jaundice", "jeopardize", "Jingo", "jocose"]
    }, {
        "To imperil. ": ["jeopardize", "Jingo", "jocose", "jocular"]
    }, {
        "One of a party in Great Britain in favor of spirited and demonstrative foreign policy. ": ["Jingo", "jocose", "jocular", "joggle"]
    }, {
        "Done or made in jest. ": ["jocose", "jocular", "joggle", "journalize"]
    }, {
        "Inclined to joke. ": ["jocular", "joggle", "journalize", "jovial"]
    }, {
        "A sudden irregular shake or a push causing such a shake. ": ["joggle", "journalize", "jovial", "jubilation"]
    }, {
        "To keep a diary. ": ["journalize", "jovial", "jubilation", "judgment"]
    }, {
        "Merry. ": ["jovial", "jubilation", "judgment", "judicature"]
    }, {
        "Exultation. ": ["jubilation", "judgment", "judicature", "judicial"]
    }, {
        "The faculty by the exercise of which a deliberate conclusion is reached. ": ["judgment", "judicature", "judicial", "judiciary"]
    }, {
        "Distribution and administration of justice by trial and judgment. ": ["judicature", "judicial", "judiciary", "judicious"]
    }, {
        "Pertaining to the administration of justice. ": ["judicial", "judiciary", "judicious", "juggle"]
    }, {
        "That department of government which administers the law relating to civil and criminal justice. ": ["judiciary", "judicious", "juggle", "jugglery"]
    }, {
        "Prudent. ": ["judicious", "juggle", "jugglery", "jugular"]
    }, {
        "To play tricks of sleight of hand. ": ["juggle", "jugglery", "jugular", "juicy"]
    }, {
        "The art or practice of sleight of hand. ": ["jugglery", "jugular", "juicy", "junction"]
    }, {
        "Pertaining to the throat. ": ["jugular", "juicy", "junction", "juncture"]
    }, {
        "Succulent. ": ["juicy", "junction", "juncture", "junta"]
    }, {
        "The condition of being joined. ": ["junction", "juncture", "junta", "juridical"]
    }, {
        "An articulation, joint, or seam. ": ["juncture", "junta", "juridical", "jurisdiction"]
    }, {
        "A council or assembly that deliberates in secret upon the affairs of government. ": ["junta", "juridical", "jurisdiction", "jurisprudence"]
    }, {
        "Assumed by law to exist. ": ["juridical", "jurisdiction", "jurisprudence", "juror"]
    }, {
        "Lawful power or right to exercise official authority. ": ["jurisdiction", "jurisprudence", "juror", "joust"]
    }, {
        "The science of rights in accordance with positive law. ": ["jurisprudence", "juror", "joust", "justification"]
    }, {
        "One who serves on a jury or is sworn in for jury duty in a court of justice. ": ["juror", "joust", "justification", "juvenile"]
    }, {
        "To engage in a tilt with lances on horseback. ": ["joust", "justification", "juvenile", "juxtapose"]
    }, {
        "Vindication. ": ["justification", "juvenile", "juxtapose", "keepsake"]
    }, {
        "Characteristic of youth. ": ["juvenile", "juxtapose", "keepsake", "kerchief"]
    }, {
        "To place close together. ": ["juxtapose", "keepsake", "kerchief", "kernel"]
    }, {
        "Anything kept or given to be kept for the sake of the giver. ": ["keepsake", "kerchief", "kernel", "kiln"]
    }, {
        "A square of linen, silk, or other material, used as a covering for the head or neck. ": ["kerchief", "kernel", "kiln", "kiloliter"]
    }, {
        "A grain or seed. ": ["kernel", "kiln", "kiloliter", "kilometer"]
    }, {
        "An oven or furnace for baking, burning, or drying industrial products. ": ["kiln", "kiloliter", "kilometer", "kilowatt"]
    }, {
        "One thousand liters. ": ["kiloliter", "kilometer", "kilowatt", "kimono"]
    }, {
        "A length of 1,000 meters. ": ["kilometer", "kilowatt", "kimono", "kind-hearted"]
    }, {
        "One thousand watts. ": ["kilowatt", "kimono", "kind-hearted", "kingling"]
    }, {
        "A loose robe, fastening with a sash, the principal outer garment in Japan. ": ["kimono", "kind-hearted", "kingling", "kingship"]
    }, {
        "Having a kind and sympathetic nature. ": ["kind-hearted", "kingling", "kingship", "kinsfolk"]
    }, {
        "A petty king. ": ["kingling", "kingship", "kinsfolk", "knavery"]
    }, {
        "Royal state. ": ["kingship", "kinsfolk", "knavery", "knead"]
    }, {
        "pl. Relatives. ": ["kinsfolk", "knavery", "knead", "knickknack"]
    }, {
        "Deceitfulness in dealing. ": ["knavery", "knead", "knickknack", "knight errant"]
    }, {
        "To mix and work into a homogeneous mass, especially with the hands. ": ["knead", "knickknack", "knight errant", "knighthood"]
    }, {
        "A small article, more for ornament that use. ": ["knickknack", "knight errant", "knighthood", "laborious"]
    }, {
        "One of the wandering knights who in the middle ages went forth in search of adventure. ": ["knight errant", "knighthood", "laborious", "labyrinth"]
    }, {
        "Chivalry. ": ["knighthood", "laborious", "labyrinth", "lacerate"]
    }, {
        "Toilsome. ": ["laborious", "labyrinth", "lacerate", "lackadaisical"]
    }, {
        "A maze. ": ["labyrinth", "lacerate", "lackadaisical", "lactation"]
    }, {
        "To tear rudely or raggedly. ": ["lacerate", "lackadaisical", "lactation", "lacteal"]
    }, {
        "Listless. ": ["lackadaisical", "lactation", "lacteal", "lactic"]
    }, {
        "The secretion of milk. ": ["lactation", "lacteal", "lactic", "laddie"]
    }, {
        "Milky. ": ["lacteal", "lactic", "laddie", "ladle"]
    }, {
        "Pertaining to milk. ": ["lactic", "laddie", "ladle", "laggard"]
    }, {
        "A lad. ": ["laddie", "ladle", "laggard", "landholder"]
    }, {
        "A cup-shaped vessel with a long handle, intended for dipping up and pouring liquids. ": ["ladle", "laggard", "landholder", "landlord"]
    }, {
        "Falling behind. ": ["laggard", "landholder", "landlord", "landmark"]
    }, {
        "Landowner. ": ["landholder", "landlord", "landmark", "landscape"]
    }, {
        "A man who owns and lets a tenement or tenements. ": ["landlord", "landmark", "landscape", "languid"]
    }, {
        "A familiar object in the landscape serving as a guide to an area otherwise easily lost track of. ": ["landmark", "landscape", "languid", "languor"]
    }, {
        "A rural view, especially one of picturesque effect, as seen from a distance or an elevation. ": ["landscape", "languid", "languor", "lapse"]
    }, {
        "Relaxed. ": ["languid", "languor", "lapse", "lascivious"]
    }, {
        "Lassitude of body or depression. ": ["languor", "lapse", "lascivious", "lassie"]
    }, {
        "A slight deviation from what is right, proper, or just. ": ["lapse", "lascivious", "lassie", "latent"]
    }, {
        "Lustful. ": ["lascivious", "lassie", "latent", "latency"]
    }, {
        "A little lass. ": ["lassie", "latent", "latency", "later"]
    }, {
        "Dormant. ": ["latent", "latency", "later", "lateral"]
    }, {
        "The state of being dormant. ": ["latency", "later", "lateral", "latish"]
    }, {
        "At a subsequent time. ": ["later", "lateral", "latish", "lattice"]
    }, {
        "Directed toward the side. ": ["lateral", "latish", "lattice", "laud"]
    }, {
        "Rather late. ": ["latish", "lattice", "laud", "laudable"]
    }, {
        "Openwork of metal or wood, formed by crossing or interlacing strips or bars. ": ["lattice", "laud", "laudable", "laudation"]
    }, {
        "To praise in words or song. ": ["laud", "laudable", "laudation", "laudatory"]
    }, {
        "Praiseworthy. ": ["laudable", "laudation", "laudatory", "laundress"]
    }, {
        "High praise. ": ["laudation", "laudatory", "laundress", "laureate"]
    }, {
        "Pertaining to, expressing, or containing praise. ": ["laudatory", "laundress", "laureate", "lave"]
    }, {
        "Washerwoman. ": ["laundress", "laureate", "lave", "lawgiver"]
    }, {
        "Crowned with laurel, as a mark of distinction. ": ["laureate", "lave", "lawgiver", "lawmaker"]
    }, {
        "To wash or bathe. ": ["lave", "lawgiver", "lawmaker", "lax"]
    }, {
        "A legislator. ": ["lawgiver", "lawmaker", "lax", "laxative"]
    }, {
        "A legislator. ": ["lawmaker", "lax", "laxative", "lea"]
    }, {
        "Not stringent or energetic. ": ["lax", "laxative", "lea", "leaflet"]
    }, {
        "Having power to open or loosen the bowels. ": ["laxative", "lea", "leaflet", "leaven"]
    }, {
        "A field. ": ["lea", "leaflet", "leaven", "leeward"]
    }, {
        "A little leaf or a booklet. ": ["leaflet", "leaven", "leeward", "left-handed"]
    }, {
        "To make light by fermentation, as dough. ": ["leaven", "leeward", "left-handed", "legacy"]
    }, {
        "That side or direction toward which the wind blows. ": ["leeward", "left-handed", "legacy", "legalize"]
    }, {
        "Using the left hand or arm more dexterously than the right. ": ["left-handed", "legacy", "legalize", "legging"]
    }, {
        "A bequest. ": ["legacy", "legalize", "legging", "legible"]
    }, {
        "To give the authority of law to. ": ["legalize", "legging", "legible", "legionary"]
    }, {
        "A covering for the leg. ": ["legging", "legible", "legionary", "legislate"]
    }, {
        "That may be read with ease. ": ["legible", "legionary", "legislate", "legislative"]
    }, {
        "A member of an ancient Roman legion or of the modern French Legion of Honor. ": ["legionary", "legislate", "legislative", "legislator"]
    }, {
        "To make or enact a law or laws. ": ["legislate", "legislative", "legislator", "legitimacy"]
    }, {
        "That makes or enacts laws. ": ["legislative", "legislator", "legitimacy", "legitimate"]
    }, {
        "A lawgiver. ": ["legislator", "legitimacy", "legitimate", "leisure"]
    }, {
        "Accordance with law. ": ["legitimacy", "legitimate", "leisure", "leniency"]
    }, {
        "Having the sanction of law or established custom. ": ["legitimate", "leisure", "leniency", "lenient"]
    }, {
        "Spare time. ": ["leisure", "leniency", "lenient", "leonine"]
    }, {
        "Forbearance. ": ["leniency", "lenient", "leonine", "lethargy"]
    }, {
        "Not harsh. ": ["lenient", "leonine", "lethargy", "levee"]
    }, {
        "Like a lion. ": ["leonine", "lethargy", "levee", "lever"]
    }, {
        "Prolonged sluggishness of body or mind. ": ["lethargy", "levee", "lever", "leviathan"]
    }, {
        "An embankment beside a river or stream or an arm of the sea, to prevent overflow. ": ["levee", "lever", "leviathan", "levity"]
    }, {
        "That which exerts, or through which one may exert great power. ": ["lever", "leviathan", "levity", "levy"]
    }, {
        "Any large animal, as a whale. ": ["leviathan", "levity", "levy", "lewd"]
    }, {
        "Frivolity. ": ["levity", "levy", "lewd", "lexicographer"]
    }, {
        "To impose and collect by force or threat of force. ": ["levy", "lewd", "lexicographer", "lexicography"]
    }, {
        "Characterized by lust or lasciviousness. ": ["lewd", "lexicographer", "lexicography", "lexicon"]
    }, {
        "One who makes dictionaries. ": ["lexicographer", "lexicography", "lexicon", "liable"]
    }, {
        "The making of dictionaries. ": ["lexicography", "lexicon", "liable", "libel"]
    }, {
        "A dictionary. ": ["lexicon", "liable", "libel", "liberalism"]
    }, {
        "Justly or legally responsible. ": ["liable", "libel", "liberalism", "liberate"]
    }, {
        "Defamation. ": ["libel", "liberalism", "liberate", "licentious"]
    }, {
        "Opposition to conservatism. ": ["liberalism", "liberate", "licentious", "licit"]
    }, {
        "To set free or release from bondage. ": ["liberate", "licentious", "licit", "liege"]
    }, {
        "Wanton. ": ["licentious", "licit", "liege", "lien"]
    }, {
        "Lawful. ": ["licit", "liege", "lien", "lieu"]
    }, {
        "Sovereign. ": ["liege", "lien", "lieu", "lifelike"]
    }, {
        "A legal claim or hold on property, as security for a debt or charge. ": ["lien", "lieu", "lifelike", "lifelong"]
    }, {
        "Stead. ": ["lieu", "lifelike", "lifelong", "lifetime"]
    }, {
        "Realistic. ": ["lifelike", "lifelong", "lifetime", "ligament"]
    }, {
        "Lasting or continuous through life. ": ["lifelong", "lifetime", "ligament", "ligature"]
    }, {
        "The time that life continues. ": ["lifetime", "ligament", "ligature", "light-hearted"]
    }, {
        "That which binds objects together. ": ["ligament", "ligature", "light-hearted", "ligneous"]
    }, {
        "Anything that constricts, or serves for binding or tying. ": ["ligature", "light-hearted", "ligneous", "likelihood"]
    }, {
        "Free from care. ": ["light-hearted", "ligneous", "likelihood", "likely"]
    }, {
        "Having the texture of appearance of wood. ": ["ligneous", "likelihood", "likely", "liking"]
    }, {
        "A probability. ": ["likelihood", "likely", "liking", "limitation"]
    }, {
        "Plausible. ": ["likely", "liking", "limitation", "linear"]
    }, {
        "Fondness. ": ["liking", "limitation", "linear", "liner"]
    }, {
        "A restriction. ": ["limitation", "linear", "liner", "lingo"]
    }, {
        "Of the nature of a line. ": ["linear", "liner", "lingo", "lingua"]
    }, {
        "A vessel belonging to a steamship-line. ": ["liner", "lingo", "lingua", "lingual"]
    }, {
        "Language. ": ["lingo", "lingua", "lingual", "linguist"]
    }, {
        "The tongue. ": ["lingua", "lingual", "linguist", "linguistics"]
    }, {
        "Pertaining to the use of the tongue in utterance. ": ["lingual", "linguist", "linguistics", "liniment"]
    }, {
        "One who is acquainted with several languages. ": ["linguist", "linguistics", "liniment", "liquefacient"]
    }, {
        "The science of languages, or of the origin, history, and significance of words. ": ["linguistics", "liniment", "liquefacient", "liquefy"]
    }, {
        "A liquid preparation for rubbing on the skin in cases of bruises, inflammation, etc. ": ["liniment", "liquefacient", "liquefy", "liqueur"]
    }, {
        "Possessing a liquefying nature or power. ": ["liquefacient", "liquefy", "liqueur", "liquidate"]
    }, {
        "To convert into a liquid or into liquid form. ": ["liquefy", "liqueur", "liquidate", "liquor"]
    }, {
        "An alcoholic cordial sweetened and flavored with aromatic substances. ": ["liqueur", "liquidate", "liquor", "listless"]
    }, {
        "To deliver the amount or value of. ": ["liquidate", "liquor", "listless", "literacy"]
    }, {
        "Any alcoholic or intoxicating liquid. ": ["liquor", "listless", "literacy", "literal"]
    }, {
        "Inattentive. ": ["listless", "literacy", "literal", "literature"]
    }, {
        "The state or condition of knowing how to read and write. ": ["literacy", "literal", "literature", "lithe"]
    }, {
        "Following the exact words. ": ["literal", "literature", "lithe", "lithesome"]
    }, {
        "The written or printed productions of the human mind collectively. ": ["literature", "lithe", "lithesome", "lithograph"]
    }, {
        "Supple. ": ["lithe", "lithesome", "lithograph", "lithotype"]
    }, {
        "Nimble. ": ["lithesome", "lithograph", "lithotype", "litigant"]
    }, {
        "A print made by printing from stone. ": ["lithograph", "lithotype", "litigant", "litigate"]
    }, {
        "In engraving, an etched stone surface for printing. ": ["lithotype", "litigant", "litigate", "litigious"]
    }, {
        "A party to a lawsuit. ": ["litigant", "litigate", "litigious", "littoral"]
    }, {
        "To cause to become the subject-matter of a suit at law. ": ["litigate", "litigious", "littoral", "liturgy"]
    }, {
        "Quarrelsome. ": ["litigious", "littoral", "liturgy", "livelihood"]
    }, {
        "Of, pertaining to, or living on a shore. ": ["littoral", "liturgy", "livelihood", "livid"]
    }, {
        "A ritual. ": ["liturgy", "livelihood", "livid", "loam"]
    }, {
        "Means of subsistence. ": ["livelihood", "livid", "loam", "loath"]
    }, {
        "Black-and-blue, as contused flesh. ": ["livid", "loam", "loath", "loathe"]
    }, {
        "A non-coherent mixture of sand and clay. ": ["loam", "loath", "loathe", "locative"]
    }, {
        "Averse. ": ["loath", "loathe", "locative", "loch"]
    }, {
        "To abominate. ": ["loathe", "locative", "loch", "locomotion"]
    }, {
        "Indicating place, or the place where or wherein an action occurs. ": ["locative", "loch", "locomotion", "lode"]
    }, {
        "A lake. ": ["loch", "locomotion", "lode", "lodgment"]
    }, {
        "The act or power of moving from one place to another. ": ["locomotion", "lode", "lodgment", "logic"]
    }, {
        "A somewhat continuous unstratified metal- bearing vein. ": ["lode", "lodgment", "logic", "logical"]
    }, {
        "The act of furnishing with temporary quarters. ": ["lodgment", "logic", "logical", "logician"]
    }, {
        "The science of correct thinking. ": ["logic", "logical", "logician", "loiterer"]
    }, {
        "Capable of or characterized by clear reasoning. ": ["logical", "logician", "loiterer", "loneliness"]
    }, {
        "An expert reasoner. ": ["logician", "loiterer", "loneliness", "longevity"]
    }, {
        "One who consumes time idly. ": ["loiterer", "loneliness", "longevity", "loot"]
    }, {
        "Solitude. ": ["loneliness", "longevity", "loot", "loquacious"]
    }, {
        "Unusually prolonged life. ": ["longevity", "loot", "loquacious", "lordling"]
    }, {
        "To plunder. ": ["loot", "loquacious", "lordling", "lough"]
    }, {
        "Talkative. ": ["loquacious", "lordling", "lough", "louse"]
    }, {
        "A little lord. ": ["lordling", "lough", "louse", "lovable"]
    }, {
        "A lake or loch. ": ["lough", "louse", "lovable", "low-spirited"]
    }, {
        "A small insect parasitic on and sucking the blood of mammals. ": ["louse", "lovable", "low-spirited", "lowly"]
    }, {
        "Amiable. ": ["lovable", "low-spirited", "lowly", "lucid"]
    }, {
        "Despondent. ": ["low-spirited", "lowly", "lucid", "lucrative"]
    }, {
        "Rudely. ": ["lowly", "lucid", "lucrative", "ludicrous"]
    }, {
        "Mentally sound. ": ["lucid", "lucrative", "ludicrous", "luminary"]
    }, {
        "Highly profitable. ": ["lucrative", "ludicrous", "luminary", "luminescent"]
    }, {
        "Laughable. ": ["ludicrous", "luminary", "luminescent", "luminescence"]
    }, {
        "One of the heavenly bodies as a source of light. ": ["luminary", "luminescent", "luminescence", "luminosity"]
    }, {
        "Showing increase of light. ": ["luminescent", "luminescence", "luminosity", "luminous"]
    }, {
        "Showing increase. ": ["luminescence", "luminosity", "luminous", "lunacy"]
    }, {
        "The quality of giving or radiating light. ": ["luminosity", "luminous", "lunacy", "lunar"]
    }, {
        "Giving or radiating light. ": ["luminous", "lunacy", "lunar", "lunatic"]
    }, {
        "Mental unsoundness. ": ["lunacy", "lunar", "lunatic", "lune"]
    }, {
        "Pertaining to the moon. ": ["lunar", "lunatic", "lune", "lurid"]
    }, {
        "An insane person. ": ["lunatic", "lune", "lurid", "luscious"]
    }, {
        "The moon. ": ["lune", "lurid", "luscious", "lustrous"]
    }, {
        "Ghastly and sensational. ": ["lurid", "luscious", "lustrous", "luxuriance"]
    }, {
        "Rich, sweet, and delicious. ": ["luscious", "lustrous", "luxuriance", "luxuriant"]
    }, {
        "Shining. ": ["lustrous", "luxuriance", "luxuriant", "luxuriate"]
    }, {
        "Excessive or superfluous growth or quantity. ": ["luxuriance", "luxuriant", "luxuriate", "lying"]
    }, {
        "Abundant or superabundant in growth. ": ["luxuriant", "luxuriate", "lying", "lyre"]
    }, {
        "To live sumptuously. ": ["luxuriate", "lying", "lyre", "lyric"]
    }, {
        "Untruthfulness. ": ["lying", "lyre", "lyric", "macadamize"]
    }, {
        "One of the most ancient of stringed instruments of the harp class. ": ["lyre", "lyric", "macadamize", "machinery"]
    }, {
        "Fitted for expression in song. ": ["lyric", "macadamize", "machinery", "machinist"]
    }, {
        "To cover or pave, as a path or roadway, with small broken stone. ": ["macadamize", "machinery", "machinist", "macrocosm"]
    }, {
        "The parts of a machine or engine, taken collectively. ": ["machinery", "machinist", "macrocosm", "madden"]
    }, {
        "One who makes or repairs machines, or uses metal-working tools. ": ["machinist", "macrocosm", "madden", "Madonna"]
    }, {
        "The whole of any sphere or department of nature or knowledge to which man is related. ": ["macrocosm", "madden", "Madonna", "magician"]
    }, {
        "To inflame with passion. ": ["madden", "Madonna", "magician", "magisterial"]
    }, {
        "A painted or sculptured representation of the Virgin, usually with the infant Jesus. ": ["Madonna", "magician", "magisterial", "magistracy"]
    }, {
        "A sorcerer. ": ["magician", "magisterial", "magistracy", "magnanimous"]
    }, {
        "Having an air of authority. ": ["magisterial", "magistracy", "magnanimous", "magnate"]
    }, {
        "The office or dignity of a magistrate. ": ["magistracy", "magnanimous", "magnate", "magnet"]
    }, {
        "Generous in treating or judging others. ": ["magnanimous", "magnate", "magnet", "magnetize"]
    }, {
        "A person of rank or importance. ": ["magnate", "magnet", "magnetize", "magnificence"]
    }, {
        "A body possessing that peculiar form of polarity found in nature in the lodestone. ": ["magnet", "magnetize", "magnificence", "magnificent"]
    }, {
        "To make a magnet of, permanently, or temporarily. ": ["magnetize", "magnificence", "magnificent", "magnitude"]
    }, {
        "The exhibition of greatness of action, character, intellect, wealth, or power. ": ["magnificence", "magnificent", "magnitude", "maharaja"]
    }, {
        "Grand or majestic in appearance, quality, or action. ": ["magnificent", "magnitude", "maharaja", "maidenhood"]
    }, {
        "Importance. ": ["magnitude", "maharaja", "maidenhood", "maintain"]
    }, {
        "A great Hindu prince. ": ["maharaja", "maidenhood", "maintain", "maintenance"]
    }, {
        "Virginity. ": ["maidenhood", "maintain", "maintenance", "maize"]
    }, {
        "To hold or preserve in any particular state or condition. ": ["maintain", "maintenance", "maize", "makeup"]
    }, {
        "That which supports or sustains. ": ["maintenance", "maize", "makeup", "malady"]
    }, {
        "Indian corn: usually in the United States called simply corn. ": ["maize", "makeup", "malady", "malaria"]
    }, {
        "The arrangements or combination of the parts of which anything is composed. ": ["makeup", "malady", "malaria", "malcontent"]
    }, {
        "Any physical disease or disorder, especially a chronic or deep-seated one. ": ["malady", "malaria", "malcontent", "malediction"]
    }, {
        "A fever characterized by alternating chills, fever, and sweating. ": ["malaria", "malcontent", "malediction", "malefactor"]
    }, {
        "One who is dissatisfied with the existing state of affairs. ": ["malcontent", "malediction", "malefactor", "maleficent"]
    }, {
        "The calling down of a curse or curses. ": ["malediction", "malefactor", "maleficent", "malevolence"]
    }, {
        "One who injures another. ": ["malefactor", "maleficent", "malevolence", "malevolent"]
    }, {
        "Mischievous. ": ["maleficent", "malevolence", "malevolent", "malign"]
    }, {
        "Ill will. ": ["malevolence", "malevolent", "malign", "malignant"]
    }, {
        "Wishing evil to others. ": ["malevolent", "malign", "malignant", "malleable"]
    }, {
        "To speak evil of, especially to do so falsely and severely. ": ["malign", "malignant", "malleable", "mallet"]
    }, {
        "Evil in nature or tending to do great harm or mischief. ": ["malignant", "malleable", "mallet", "maltreat"]
    }, {
        "Pliant. ": ["malleable", "mallet", "maltreat", "man-trap"]
    }, {
        "A wooden hammer. ": ["mallet", "maltreat", "man-trap", "mandate"]
    }, {
        "To treat ill, unkindly, roughly, or abusively. ": ["maltreat", "man-trap", "mandate", "mandatory"]
    }, {
        "A place or structure dangerous to human life. ": ["man-trap", "mandate", "mandatory", "mane"]
    }, {
        "A command. ": ["mandate", "mandatory", "mane", "man-eater"]
    }, {
        "Expressive of positive command, as distinguished from merely directory. ": ["mandatory", "mane", "man-eater", "maneuver"]
    }, {
        "The long hair growing upon and about the neck of certain animals, as the horse and the lion. ": ["mane", "man-eater", "maneuver", "mania"]
    }, {
        "An animal that devours human beings. ": ["man-eater", "maneuver", "mania", "maniac"]
    }, {
        "To make adroit or artful moves: manage affairs by strategy. ": ["maneuver", "mania", "maniac", "manifesto"]
    }, {
        "Insanity. ": ["mania", "maniac", "manifesto", "manlike"]
    }, {
        "a person raving with madness. ": ["maniac", "manifesto", "manlike", "manliness"]
    }, {
        "A public declaration, making announcement, explanation or defense of intentions, or motives. ": ["manifesto", "manlike", "manliness", "mannerism"]
    }, {
        "Like a man. ": ["manlike", "manliness", "mannerism", "manor"]
    }, {
        "The qualities characteristic of a true man, as bravery, resolution, etc. ": ["manliness", "mannerism", "manor", "mantel"]
    }, {
        "Constant or excessive adherence to one manner, style, or peculiarity, as of action or conduct. ": ["mannerism", "manor", "mantel", "mantle"]
    }, {
        "The landed estate of a lord or nobleman. ": ["manor", "mantel", "mantle", "manufacturer"]
    }, {
        "The facing, sometimes richly ornamented, about a fireplace, including the usual shelf above it. ": ["mantel", "mantle", "manufacturer", "manumission"]
    }, {
        "A cloak. ": ["mantle", "manufacturer", "manumission", "manumit"]
    }, {
        "A person engaged in manufacturing as a business. ": ["manufacturer", "manumission", "manumit", "marine"]
    }, {
        "Emancipation. ": ["manumission", "manumit", "marine", "maritime"]
    }, {
        "To set free from bondage. ": ["manumit", "marine", "maritime", "maroon"]
    }, {
        "Of or pertaining to the sea or matters connected with the sea. ": ["marine", "maritime", "maroon", "martial"]
    }, {
        "Situated on or near the sea. ": ["maritime", "maroon", "martial", "Martian"]
    }, {
        "To put ashore and abandon (a person) on a desolate coast or island. ": ["maroon", "martial", "Martian", "martyrdom"]
    }, {
        "Pertaining to war or military operations. ": ["martial", "Martian", "martyrdom", "marvel"]
    }, {
        "Pertaining to Mars, either the Roman god of war or the planet. ": ["Martian", "martyrdom", "marvel", "masonry"]
    }, {
        "Submission to death or persecution for the sake of faith or principle. ": ["martyrdom", "marvel", "masonry", "masquerade"]
    }, {
        "To be astonished and perplexed because of (something). ": ["marvel", "masonry", "masquerade", "massacre"]
    }, {
        "The art or work of constructing, as buildings, walls, etc., with regularly arranged stones. ": ["masonry", "masquerade", "massacre", "massive"]
    }, {
        "A social party composed of persons masked and costumed so as to be disguised. ": ["masquerade", "massacre", "massive", "masterpiece"]
    }, {
        "The unnecessary and indiscriminate killing of human beings. ": ["massacre", "massive", "masterpiece", "mastery"]
    }, {
        "Of considerable bulk and weight. ": ["massive", "masterpiece", "mastery", "material"]
    }, {
        "A superior production. ": ["masterpiece", "mastery", "material", "materialize"]
    }, {
        "The attainment of superior skill. ": ["mastery", "material", "materialize", "maternal"]
    }, {
        "That of which anything is composed or may be constructed. ": ["material", "materialize", "maternal", "matinee"]
    }, {
        "To take perceptible or substantial form. ": ["materialize", "maternal", "matinee", "matricide"]
    }, {
        "Pertaining or peculiar to a mother or to motherhood. ": ["maternal", "matinee", "matricide", "matrimony"]
    }, {
        "An entertainment (especially theatrical) held in the daytime. ": ["matinee", "matricide", "matrimony", "matrix"]
    }, {
        "The killing, especially the murdering, of one's mother. ": ["matricide", "matrimony", "matrix", "matter of fact"]
    }, {
        "The union of a man and a woman in marriage. ": ["matrimony", "matrix", "matter of fact", "maudlin"]
    }, {
        "That which contains and gives shape or form to anything. ": ["matrix", "matter of fact", "maudlin", "mausoleum"]
    }, {
        "Something that has actual and undeniable existence or reality. ": ["matter of fact", "maudlin", "mausoleum", "mawkish"]
    }, {
        "Foolishly and tearfully affectionate. ": ["maudlin", "mausoleum", "mawkish", "maxim"]
    }, {
        "A tomb of more than ordinary size or architectural pretensions. ": ["mausoleum", "mawkish", "maxim", "maze"]
    }, {
        "Sickening or insipid. ": ["mawkish", "maxim", "maze", "mead"]
    }, {
        "A principle accepted as true and acted on as a rule or guide. ": ["maxim", "maze", "mead", "meager"]
    }, {
        "A labyrinth. ": ["maze", "mead", "meager", "mealy-mouthed"]
    }, {
        "A meadow. ": ["mead", "meager", "mealy-mouthed", "meander"]
    }, {
        "scanty. ": ["meager", "mealy-mouthed", "meander", "mechanics"]
    }, {
        "Afraid to express facts or opinions plainly. ": ["mealy-mouthed", "meander", "mechanics", "medallion"]
    }, {
        "To wind and turn while proceeding in a course. ": ["meander", "mechanics", "medallion", "meddlesome"]
    }, {
        "The branch of physics that treats the phenomena caused by the action of forces. ": ["mechanics", "medallion", "meddlesome", "medial"]
    }, {
        "A large medal. ": ["medallion", "meddlesome", "medial", "mediate"]
    }, {
        "Interfering. ": ["meddlesome", "medial", "mediate", "medicine"]
    }, {
        "Of or pertaining to the middle. ": ["medial", "mediate", "medicine", "medieval"]
    }, {
        "To effect by negotiating as an agent between parties. ": ["mediate", "medicine", "medieval", "mediocre"]
    }, {
        "A substance possessing or reputed to possess curative or remedial properties. ": ["medicine", "medieval", "mediocre", "meditation"]
    }, {
        "Belonging or relating to or descriptive of the middle ages. ": ["medieval", "mediocre", "meditation", "medley"]
    }, {
        "Ordinary. ": ["mediocre", "meditation", "medley", "meliorate"]
    }, {
        "The turning or revolving of a subject in the mind. ": ["meditation", "medley", "meliorate", "mellifluous"]
    }, {
        "A composition of different songs or parts of songs arranged to run as a continuous whole. ": ["medley", "meliorate", "mellifluous", "melodious"]
    }, {
        "To make better or improve, as in quality or social or physical condition. ": ["meliorate", "mellifluous", "melodious", "melodrama"]
    }, {
        "Sweetly or smoothly flowing. ": ["mellifluous", "melodious", "melodrama", "memento"]
    }, {
        "Characterized by a sweet succession of sounds. ": ["melodious", "melodrama", "memento", "memorable"]
    }, {
        "A drama with a romantic story or plot and sensational situation and incidents. ": ["melodrama", "memento", "memorable", "menace"]
    }, {
        "A souvenir. ": ["memento", "memorable", "menace", "menagerie"]
    }, {
        "Noteworthy. ": ["memorable", "menace", "menagerie", "mendacious"]
    }, {
        "A threat. ": ["menace", "menagerie", "mendacious", "mendicant"]
    }, {
        "A collection of wild animals, especially when kept for exhibition. ": ["menagerie", "mendacious", "mendicant", "mentality"]
    }, {
        "Untrue. ": ["mendacious", "mendicant", "mentality", "mentor"]
    }, {
        "A beggar. ": ["mendicant", "mentality", "mentor", "mercantile"]
    }, {
        "Intellectuality. ": ["mentality", "mentor", "mercantile", "mercenary"]
    }, {
        "A wise and faithful teacher, guide, and friend. ": ["mentor", "mercantile", "mercenary", "merciful"]
    }, {
        "Conducted or acting on business principles; commercial. ": ["mercantile", "mercenary", "merciful", "merciless"]
    }, {
        "Greedy ": ["mercenary", "merciful", "merciless", "meretricious"]
    }, {
        "Disposed to pity and forgive. ": ["merciful", "merciless", "meretricious", "mesmerize"]
    }, {
        "Cruel. ": ["merciless", "meretricious", "mesmerize", "messieurs"]
    }, {
        "Alluring by false or gaudy show. ": ["meretricious", "mesmerize", "messieurs", "metal"]
    }, {
        "To hypnotize. ": ["mesmerize", "messieurs", "metal", "metallurgy"]
    }, {
        "pl. Gentlemen. ": ["messieurs", "metal", "metallurgy", "metamorphosis"]
    }, {
        "An element that forms a base by combining with oxygen, is usually hard, heavy, and lustrous. ": ["metal", "metallurgy", "metamorphosis", "metaphor"]
    }, {
        "The art or science of extracting a metal from ores, as by smelting. ": ["metallurgy", "metamorphosis", "metaphor", "metaphysical"]
    }, {
        "A passing from one form or shape into another. ": ["metamorphosis", "metaphor", "metaphysical", "metaphysician"]
    }, {
        "A figure of speech in which one object is likened to another, by speaking as if the other. ": ["metaphor", "metaphysical", "metaphysician", "metaphysics"]
    }, {
        "Philosophical. ": ["metaphysical", "metaphysician", "metaphysics", "mete"]
    }, {
        "One skilled in metaphysics. ": ["metaphysician", "metaphysics", "mete", "metempsychosis"]
    }, {
        "The principles of philosophy as applied to explain the methods of any particular science. ": ["metaphysics", "mete", "metempsychosis", "meticulous"]
    }, {
        "To apportion. ": ["mete", "metempsychosis", "meticulous", "metonymy"]
    }, {
        "Transition of the soul of a human being at death into another body, whether human or beast. ": ["metempsychosis", "meticulous", "metonymy", "metric"]
    }, {
        "Over-cautious. ": ["meticulous", "metonymy", "metric", "metronome"]
    }, {
        "A figure of speech that consists in the naming of a thing by one of its attributes. ": ["metonymy", "metric", "metronome", "metropolis"]
    }, {
        "Relating to measurement. ": ["metric", "metronome", "metropolis", "metropolitan"]
    }, {
        "An instrument for indicating and marking exact time in music. ": ["metronome", "metropolis", "metropolitan", "mettle"]
    }, {
        "A chief city, either the capital or the largest or most important city of a state. ": ["metropolis", "metropolitan", "mettle", "mettlesome"]
    }, {
        "Pertaining to a chief city. ": ["metropolitan", "mettle", "mettlesome", "microcosm"]
    }, {
        "Courage. ": ["mettle", "mettlesome", "microcosm", "micrometer"]
    }, {
        "Having courage or spirit. ": ["mettlesome", "microcosm", "micrometer", "microphone"]
    }, {
        "The world or universe on a small scale. ": ["microcosm", "micrometer", "microphone", "microscope"]
    }, {
        "An instrument for measuring very small angles or dimensions. ": ["micrometer", "microphone", "microscope", "microscopic"]
    }, {
        "An apparatus for magnifying faint sounds. ": ["microphone", "microscope", "microscopic", "microscopy"]
    }, {
        "An instrument for assisting the eye in the vision of minute objects or features of objects. ": ["microscope", "microscopic", "microscopy", "midsummer"]
    }, {
        "Adapted to or characterized by minute observation. ": ["microscopic", "microscopy", "midsummer", "midwife"]
    }, {
        "The art of examing objects with the microscope. ": ["microscopy", "midsummer", "midwife", "mien"]
    }, {
        "The middle of the summer. ": ["midsummer", "midwife", "mien", "migrant"]
    }, {
        "A woman who makes a business of assisting at childbirth. ": ["midwife", "mien", "migrant", "migrate"]
    }, {
        "The external appearance or manner of a person. ": ["mien", "migrant", "migrate", "migratory"]
    }, {
        "Wandering. ": ["migrant", "migrate", "migratory", "mileage"]
    }, {
        "To remove or pass from one country, region, or habitat to another. ": ["migrate", "migratory", "mileage", "militant"]
    }, {
        "Wandering. ": ["migratory", "mileage", "militant", "militarism"]
    }, {
        "A distance in miles. ": ["mileage", "militant", "militarism", "militate"]
    }, {
        "Of a warlike or combative disposition or tendency. ": ["militant", "militarism", "militate", "militia"]
    }, {
        "A policy of maintaining great standing armies. ": ["militarism", "militate", "militia", "Milky Way"]
    }, {
        "To have weight or influence (in determining a question). ": ["militate", "militia", "Milky Way", "millet"]
    }, {
        "Those citizens, collectively, who are enrolled and drilled in temporary military organizations. ": ["militia", "Milky Way", "millet", "mimic"]
    }, {
        "The galaxy. ": ["Milky Way", "millet", "mimic", "miniature"]
    }, {
        "A grass cultivated for forage and cereal. ": ["millet", "mimic", "miniature", "minimize"]
    }, {
        "To imitate the speech or actions of. ": ["mimic", "miniature", "minimize", "minion"]
    }, {
        "Much smaller than reality or that the normal size. ": ["miniature", "minimize", "minion", "ministration"]
    }, {
        "To reduce to the smallest possible amount or degree. ": ["minimize", "minion", "ministration", "ministry"]
    }, {
        "A servile favorite. ": ["minion", "ministration", "ministry", "minority"]
    }, {
        "Any religious ceremonial. ": ["ministration", "ministry", "minority", "minute"]
    }, {
        "A service. ": ["ministry", "minority", "minute", "minutia"]
    }, {
        "The smaller in number of two portions into which a number or a group is divided. ": ["minority", "minute", "minutia", "mirage"]
    }, {
        "Exceedingly small in extent or quantity. ": ["minute", "minutia", "mirage", "misadventure"]
    }, {
        "A small or unimportant particular or detail. ": ["minutia", "mirage", "misadventure", "misanthropic"]
    }, {
        "An optical effect looking like a sheet of water in the desert. ": ["mirage", "misadventure", "misanthropic", "misanthropy"]
    }, {
        "An unlucky accident. ": ["misadventure", "misanthropic", "misanthropy", "misapprehend"]
    }, {
        "Hating mankind. ": ["misanthropic", "misanthropy", "misapprehend", "misbehave"]
    }, {
        "Hatred of mankind. ": ["misanthropy", "misapprehend", "misbehave", "misbehavior"]
    }, {
        "To misunderstand. ": ["misapprehend", "misbehave", "misbehavior", "mischievous"]
    }, {
        "To behave ill. ": ["misbehave", "misbehavior", "mischievous", "miscount"]
    }, {
        "Ill or improper behavior. ": ["misbehavior", "mischievous", "miscount", "miscreant"]
    }, {
        "Fond of tricks. ": ["mischievous", "miscount", "miscreant", "misdeed"]
    }, {
        "To make a mistake in counting. ": ["miscount", "miscreant", "misdeed", "misdemeanor"]
    }, {
        "A villain. ": ["miscreant", "misdeed", "misdemeanor", "miser"]
    }, {
        "A wrong or improper act. ": ["misdeed", "misdemeanor", "miser", "mishap"]
    }, {
        "Evil conduct, small crime. ": ["misdemeanor", "miser", "mishap", "misinterpret"]
    }, {
        "A person given to saving and hoarding unduly. ": ["miser", "mishap", "misinterpret", "mislay"]
    }, {
        "Misfortune. ": ["mishap", "misinterpret", "mislay", "mismanage"]
    }, {
        "To misunderstand. ": ["misinterpret", "mislay", "mismanage", "misnomer"]
    }, {
        "To misplace. ": ["mislay", "mismanage", "misnomer", "misogamy"]
    }, {
        "To manage badly, improperly, or unskillfully. ": ["mismanage", "misnomer", "misogamy", "misogyny"]
    }, {
        "A name wrongly or mistakenly applied. ": ["misnomer", "misogamy", "misogyny", "misplace"]
    }, {
        "Hatred of marriage. ": ["misogamy", "misogyny", "misplace", "misrepresent"]
    }, {
        "Hatred of women. ": ["misogyny", "misplace", "misrepresent", "misrule"]
    }, {
        "To put into a wrong place. ": ["misplace", "misrepresent", "misrule", "missal"]
    }, {
        "To give a wrong impression. ": ["misrepresent", "misrule", "missal", "missile"]
    }, {
        "To misgovern. ": ["misrule", "missal", "missile", "missive"]
    }, {
        "The book containing the service for the celebration of mass. ": ["missal", "missile", "missive", "mistrust"]
    }, {
        "Any object, especially a weapon, thrown or intended to be thrown. ": ["missile", "missive", "mistrust", "misty"]
    }, {
        "A message in writing. ": ["missive", "mistrust", "misty", "misunderstand"]
    }, {
        "To regard with suspicion or jealousy. ": ["mistrust", "misty", "misunderstand", "misuse"]
    }, {
        "Lacking clearness ": ["misty", "misunderstand", "misuse", "mite"]
    }, {
        "To Take in a wrong sense. ": ["misunderstand", "misuse", "mite", "miter"]
    }, {
        "To maltreat. ": ["misuse", "mite", "miter", "mitigate"]
    }, {
        "A very small amount, portion, or particle. ": ["mite", "miter", "mitigate", "mnemonics"]
    }, {
        "The junction of two bodies at an equally divided angle. ": ["miter", "mitigate", "mnemonics", "moat"]
    }, {
        "To make milder or more endurable. ": ["mitigate", "mnemonics", "moat", "mobocracy"]
    }, {
        "A system of principles and formulas designed to assist the recollection in certain instances. ": ["mnemonics", "moat", "mobocracy", "moccasin"]
    }, {
        "A ditch on the outside of a fortress wall. ": ["moat", "mobocracy", "moccasin", "mockery"]
    }, {
        "Lawless control of public affairs by the mob or populace. ": ["mobocracy", "moccasin", "mockery", "moderation"]
    }, {
        "A foot-covering made of soft leather or buckskin. ": ["moccasin", "mockery", "moderation", "moderator"]
    }, {
        "Ridicule. ": ["mockery", "moderation", "moderator", "modernity"]
    }, {
        "Temperance. ": ["moderation", "moderator", "modernity", "modernize"]
    }, {
        "The presiding officer of a meeting. ": ["moderator", "modernity", "modernize", "modification"]
    }, {
        "The state or character of being modern. ": ["modernity", "modernize", "modification", "modify"]
    }, {
        "To make characteristic of the present or of recent times. ": ["modernize", "modification", "modify", "modish"]
    }, {
        "A change. ": ["modification", "modify", "modish", "modulate"]
    }, {
        "To make somewhat different. ": ["modify", "modish", "modulate", "mollify"]
    }, {
        "Fashionable. ": ["modish", "modulate", "mollify", "molt"]
    }, {
        "To vary in tone, inflection, pitch or other quality of sound. ": ["modulate", "mollify", "molt", "momentary"]
    }, {
        "To soothe. ": ["mollify", "molt", "momentary", "momentous"]
    }, {
        "To cast off, as hair, feathers, etc. ": ["molt", "momentary", "momentous", "momentum"]
    }, {
        "Lasting but a short time. ": ["momentary", "momentous", "momentum", "monarchy"]
    }, {
        "Very significant. ": ["momentous", "momentum", "monarchy", "monastery"]
    }, {
        "An impetus. ": ["momentum", "monarchy", "monastery", "monetary"]
    }, {
        "Government by a single, sovereign ruler. ": ["monarchy", "monastery", "monetary", "mongrel"]
    }, {
        "A dwelling-place occupied in common by persons under religious vows of seclusion. ": ["monastery", "monetary", "mongrel", "monition"]
    }, {
        "Financial. ": ["monetary", "mongrel", "monition", "monitory"]
    }, {
        "The progeny resulting from the crossing of different breeds or varieties. ": ["mongrel", "monition", "monitory", "monocracy"]
    }, {
        "Friendly counsel given by way of warning and implying caution or reproof. ": ["monition", "monitory", "monocracy", "monogamy"]
    }, {
        "Admonition or warning. ": ["monitory", "monocracy", "monogamy", "monogram"]
    }, {
        "Government by a single person. ": ["monocracy", "monogamy", "monogram", "monograph"]
    }, {
        "The habit of pairing, or having but one mate. ": ["monogamy", "monogram", "monograph", "monolith"]
    }, {
        "A character consisting of two or more letters interwoven into one, usually initials of a name. ": ["monogram", "monograph", "monolith", "monologue"]
    }, {
        "A treatise discussing a single subject or branch of a subject. ": ["monograph", "monolith", "monologue", "monomania"]
    }, {
        "Any structure or sculpture in stone formed of a single piece. ": ["monolith", "monologue", "monomania", "monopoly"]
    }, {
        "A story or drama told or performed by one person. ": ["monologue", "monomania", "monopoly", "monosyllable"]
    }, {
        "The unreasonable pursuit of one idea. ": ["monomania", "monopoly", "monosyllable", "monotone"]
    }, {
        "The control of a thing, as a commodity, to enable a person to raise its price. ": ["monopoly", "monosyllable", "monotone", "monotonous"]
    }, {
        "A word of one syllable. ": ["monosyllable", "monotone", "monotonous", "monotony"]
    }, {
        "The sameness or monotony of utterance. ": ["monotone", "monotonous", "monotony", "monsieur"]
    }, {
        "Unchanging and tedious. ": ["monotonous", "monotony", "monsieur", "monstrosity"]
    }, {
        "A lack of variety. ": ["monotony", "monsieur", "monstrosity", "moonbeam"]
    }, {
        "A French title of respect, equivalent to Mr. and sir. ": ["monsieur", "monstrosity", "moonbeam", "morale"]
    }, {
        "Anything unnaturally huge or distorted. ": ["monstrosity", "moonbeam", "morale", "moralist"]
    }, {
        "A ray of moonlight. ": ["moonbeam", "morale", "moralist", "morality"]
    }, {
        "A state of mind with reference to confidence, courage, zeal, and the like. ": ["morale", "moralist", "morality", "moralize"]
    }, {
        "A writer on ethics. ": ["moralist", "morality", "moralize", "moratorium"]
    }, {
        "Virtue. ": ["morality", "moralize", "moratorium", "morbid"]
    }, {
        "To render virtuous. ": ["moralize", "moratorium", "morbid", "mordacious"]
    }, {
        "An emergency legislation authorizing a government suspend some action temporarily. ": ["moratorium", "morbid", "mordacious", "mordant"]
    }, {
        "Caused by or denoting a diseased or unsound condition of body or mind. ": ["morbid", "mordacious", "mordant", "moribund"]
    }, {
        "Biting or giving to biting. ": ["mordacious", "mordant", "moribund", "morose"]
    }, {
        "Biting. ": ["mordant", "moribund", "morose", "morphology"]
    }, {
        "On the point of dying. ": ["moribund", "morose", "morphology", "motley"]
    }, {
        "Gloomy. ": ["morose", "morphology", "motley", "motto"]
    }, {
        "the science of organic forms. ": ["morphology", "motley", "motto", "mountaineer"]
    }, {
        "Composed of heterogeneous or inharmonious elements. ": ["motley", "motto", "mountaineer", "mountainous"]
    }, {
        "An expressive word or pithy sentence enunciating some guiding rule of life, or faith. ": ["motto", "mountaineer", "mountainous", "mouthful"]
    }, {
        "One who travels among or climbs mountains for pleasure or exercise. ": ["mountaineer", "mountainous", "mouthful", "muddle"]
    }, {
        "Full of or abounding in mountains. ": ["mountainous", "mouthful", "muddle", "muffle"]
    }, {
        "As much as can be or is usually put into the or exercise. ": ["mouthful", "muddle", "muffle", "mulatto"]
    }, {
        "To confuse or becloud, especially with or as with drink. ": ["muddle", "muffle", "mulatto", "muleteer"]
    }, {
        "To deaden the sound of, as by wraps. ": ["muffle", "mulatto", "muleteer", "multiform"]
    }, {
        "The offspring of a white person and a black person. ": ["mulatto", "muleteer", "multiform", "multiplicity"]
    }, {
        "A mule-driver. ": ["muleteer", "multiform", "multiplicity", "mundane"]
    }, {
        "Having many shapes, or appearances. ": ["multiform", "multiplicity", "mundane", "municipal"]
    }, {
        "the condition of being manifold or very various. ": ["multiplicity", "mundane", "municipal", "municipality"]
    }, {
        "Worldly, as opposed to spiritual or celestial. ": ["mundane", "municipal", "municipality", "munificence"]
    }, {
        "Of or pertaining to a town or city, or to its corporate or local government. ": ["municipal", "municipality", "munificence", "munificent"]
    }, {
        "A district enjoying municipal government. ": ["municipality", "munificence", "munificent", "muster"]
    }, {
        "A giving characterized by generous motives and extraordinary liberality. ": ["munificence", "munificent", "muster", "mutation"]
    }, {
        "Extraordinarily generous. ": ["munificent", "muster", "mutation", "mutilate"]
    }, {
        "An assemblage or review of troops for parade or inspection, or for numbering off. ": ["muster", "mutation", "mutilate", "mutiny"]
    }, {
        "The act or process of change. ": ["mutation", "mutilate", "mutiny", "myriad"]
    }, {
        "To disfigure. ": ["mutilate", "mutiny", "myriad", "mystic"]
    }, {
        "Rebellion against lawful or constituted authority. ": ["mutiny", "myriad", "mystic", "mystification"]
    }, {
        "A vast indefinite number. ": ["myriad", "mystic", "mystification", "myth"]
    }, {
        "One who professes direct divine illumination, or relies upon meditation to acquire truth. ": ["mystic", "mystification", "myth", "mythology"]
    }, {
        "The act of artfully perplexing. ": ["mystification", "myth", "mythology", "nameless"]
    }, {
        "A fictitious narrative presented as historical, but without any basis of fact. ": ["myth", "mythology", "nameless", "naphtha"]
    }, {
        "The whole body of legends cherished by a race concerning gods and heroes. ": ["mythology", "nameless", "naphtha", "Narcissus"]
    }, {
        "Having no fame or reputation. ": ["nameless", "naphtha", "Narcissus", "narrate"]
    }, {
        "A light, colorless, volatile, inflammable oil used as a solvent, as in manufacture of paints. ": ["naphtha", "Narcissus", "narrate", "narration"]
    }, {
        "The son of the Athenian river-god Cephisus, fabled to have fallen in love with his reflection.": ["Narcissus", "narrate", "narration", "narrative"]
    }, {
        "To tell a story. ": ["narrate", "narration", "narrative", "narrator"]
    }, {
        "The act of recounting the particulars of an event in the order of time or occurrence. ": ["narration", "narrative", "narrator", "narrow-minded"]
    }, {
        "An orderly continuous account of the successive particulars of an event. ": ["narrative", "narrator", "narrow-minded", "nasal"]
    }, {
        "One who narrates anything. ": ["narrator", "narrow-minded", "nasal", "natal"]
    }, {
        "Characterized by illiberal views or sentiments. ": ["narrow-minded", "nasal", "natal", "nationality"]
    }, {
        "Pertaining to the nose. ": ["nasal", "natal", "nationality", "naturally"]
    }, {
        "Pertaining to one's birth. ": ["natal", "nationality", "naturally", "nausea"]
    }, {
        "A connection with a particular nation. ": ["nationality", "naturally", "nausea", "nauseate"]
    }, {
        "According to the usual order of things. ": ["naturally", "nausea", "nauseate", "nauseous"]
    }, {
        "An affection of the stomach producing dizziness and usually an impulse to vomit ": ["nausea", "nauseate", "nauseous", "nautical"]
    }, {
        "To cause to loathe. ": ["nauseate", "nauseous", "nautical", "naval"]
    }, {
        "Loathsome. ": ["nauseous", "nautical", "naval", "navel"]
    }, {
        "Pertaining to ships, seamen, or navigation. ": ["nautical", "naval", "navel", "navigable"]
    }, {
        "Pertaining to ships. ": ["naval", "navel", "navigable", "navigate"]
    }, {
        "The depression on the abdomen where the umbilical cord of the fetus was attached. ": ["navel", "navigable", "navigate", "nebula"]
    }, {
        "Capable of commercial navigation. ": ["navigable", "navigate", "nebula", "necessary"]
    }, {
        "To traverse by ship. ": ["navigate", "nebula", "necessary", "necessitate"]
    }, {
        "A gaseous body of unorganized stellar substance. ": ["nebula", "necessary", "necessitate", "necessity"]
    }, {
        "Indispensably requisite or absolutely needed to accomplish a desired result. ": ["necessary", "necessitate", "necessity", "necrology"]
    }, {
        "To render indispensable. ": ["necessitate", "necessity", "necrology", "necromancer"]
    }, {
        "That which is indispensably requisite to an end desired. ": ["necessity", "necrology", "necromancer", "necropolis"]
    }, {
        "A list of persons who have died in a certain place or time. ": ["necrology", "necromancer", "necropolis", "necrosis"]
    }, {
        "One who practices the art of foretelling the future by means of communication with the dead. ": ["necromancer", "necropolis", "necrosis", "nectar"]
    }, {
        "A city of the dead. ": ["necropolis", "necrosis", "nectar", "nectarine"]
    }, {
        "the death of part of the body. ": ["necrosis", "nectar", "nectarine", "needlework"]
    }, {
        "Any especially sweet and delicious drink. ": ["nectar", "nectarine", "needlework", "needy"]
    }, {
        "A variety of the peach. ": ["nectarine", "needlework", "needy", "nefarious"]
    }, {
        "Embroidery. ": ["needlework", "needy", "nefarious", "negate"]
    }, {
        "Being in need, want, or poverty. ": ["needy", "nefarious", "negate", "negation"]
    }, {
        "Wicked in the extreme. ": ["nefarious", "negate", "negation", "neglectful"]
    }, {
        "To deny. ": ["negate", "negation", "neglectful", "negligee"]
    }, {
        "The act of denying or of asserting the falsity of a proposition. ": ["negation", "neglectful", "negligee", "negligence"]
    }, {
        "Exhibiting or indicating omission. ": ["neglectful", "negligee", "negligence", "negligent"]
    }, {
        "A loose gown worn by women. ": ["negligee", "negligence", "negligent", "negligible"]
    }, {
        "Omission of that which ought to be done. ": ["negligence", "negligent", "negligible", "negotiable"]
    }, {
        "Apt to omit what ought to be done. ": ["negligent", "negligible", "negotiable", "Nemesis"]
    }, {
        "Transferable by assignment, endorsement, or delivery. ": ["negligible", "negotiable", "Nemesis", "neocracy"]
    }, {
        "To bargain with others for an agreement, as for a treaty or transfer of property. ": ["negotiable", "Nemesis", "neocracy", "neo-Darwinsim"]
    }, {
        "A goddess; divinity of chastisement and vengeance. ": ["Nemesis", "neocracy", "neo-Darwinsim", "neo-Latin"]
    }, {
        "Government administered by new or untried persons. ": ["neocracy", "neo-Darwinsim", "neo-Latin", "neopaganism"]
    }, {
        "Darwinism as modified and extended by more recent students. ": ["neo-Darwinsim", "neo-Latin", "neopaganism", "Neolithic"]
    }, {
        "Modernized Latin. ": ["neo-Latin", "neopaganism", "Neolithic", "neology"]
    }, {
        "A new or revived paganism. ": ["neopaganism", "Neolithic", "neology", "neophyte"]
    }, {
        "Pertaining to the later stone age. ": ["Neolithic", "neology", "neophyte", "nestle"]
    }, {
        "The coining or using of new words or new meanings of words. ": ["neology", "neophyte", "nestle", "nestling"]
    }, {
        "Having the character of a beginner. ": ["neophyte", "nestle", "nestling", "nettle"]
    }, {
        "To adjust cozily in snug quarters. ": ["nestle", "nestling", "nettle", "network"]
    }, {
        "Recently hatched. ": ["nestling", "nettle", "network", "neural"]
    }, {
        "To excite sensations of uneasiness or displeasure in. ": ["nettle", "network", "neural", "neurology"]
    }, {
        "Anything that presents a system of cross- lines. ": ["network", "neural", "neurology", "neuter"]
    }, {
        "Pertaining to the nerves or nervous system. ": ["neural", "neurology", "neuter", "neutral"]
    }, {
        "The science of the nervous system. ": ["neurology", "neuter", "neutral", "nevertheless"]
    }, {
        "Neither masculine nor feminine. ": ["neuter", "neutral", "nevertheless", "Newtonian"]
    }, {
        "Belonging to or under control of neither of two contestants. ": ["neutral", "nevertheless", "Newtonian", "niggardly"]
    }, {
        "Notwithstanding. ": ["nevertheless", "Newtonian", "niggardly", "nihilist"]
    }, {
        "Of or pertaining to Sir Isaac Newton, the English philosopher. ": ["Newtonian", "niggardly", "nihilist", "nil"]
    }, {
        "Stingy. (no longer acceptable to use) ": ["niggardly", "nihilist", "nil", "nimble"]
    }, {
        "An advocate of the doctrine that nothing either exists or can be known. ": ["nihilist", "nil", "nimble", "nit"]
    }, {
        "Nothing ": ["nil", "nimble", "nit", "nocturnal"]
    }, {
        "Light and quick in motion or action. ": ["nimble", "nit", "nocturnal", "noiseless"]
    }, {
        "The egg of a louse or some other insect. ": ["nit", "nocturnal", "noiseless", "noisome"]
    }, {
        "Of or pertaining to the night. ": ["nocturnal", "noiseless", "noisome", "noisy"]
    }, {
        "Silent. ": ["noiseless", "noisome", "noisy", "nomad"]
    }, {
        "Very offensive, particularly to the sense of smell. ": ["noisome", "noisy", "nomad", "nomic"]
    }, {
        "Clamorous. ": ["noisy", "nomad", "nomic", "nominal"]
    }, {
        "Having no fixed abode. ": ["nomad", "nomic", "nominal", "nominate"]
    }, {
        "Usual or customary. ": ["nomic", "nominal", "nominate", "nomination"]
    }, {
        "Trivial. ": ["nominal", "nominate", "nomination", "nominee"]
    }, {
        "To designate as a candidate for any office. ": ["nominate", "nomination", "nominee", "non-existent"]
    }, {
        "The act or ceremony of naming a man or woman for office. ": ["nomination", "nominee", "non-existent", "non-resident"]
    }, {
        "One who receives a nomination. ": ["nominee", "non-existent", "non-resident", "nonchalance"]
    }, {
        "That which does not exist. ": ["non-existent", "non-resident", "nonchalance", "non-combatant"]
    }, {
        "Not residing within a given jurisdiction. ": ["non-resident", "nonchalance", "non-combatant", "nondescript"]
    }, {
        "A state of mind indicating lack of interest. ": ["nonchalance", "non-combatant", "nondescript", "nonentity"]
    }, {
        "One attached to the army or navy, but having duties other than that of fighting. ": ["non-combatant", "nondescript", "nonentity", "nonpareil"]
    }, {
        "Indescribable. ": ["nondescript", "nonentity", "nonpareil", "norm"]
    }, {
        "A person or thing of little or no account. ": ["nonentity", "nonpareil", "norm", "normalcy"]
    }, {
        "One who or that which is of unequaled excellence. ": ["nonpareil", "norm", "normalcy", "Norman"]
    }, {
        "A model. ": ["norm", "normalcy", "Norman", "nostrum"]
    }, {
        "The state of being normal. ": ["normalcy", "Norman", "nostrum", "noticeable"]
    }, {
        "Of or peculiar to Normandy, in northern France. ": ["Norman", "nostrum", "noticeable", "notorious"]
    }, {
        "Any scheme or recipe of a charlatan character. ": ["nostrum", "noticeable", "notorious", "novellette"]
    }, {
        "Perceptible. ": ["noticeable", "notorious", "novellette", "novice"]
    }, {
        "Unfavorably known to the general public. ": ["notorious", "novellette", "novice", "nowadays"]
    }, {
        "A short novel. ": ["novellette", "novice", "nowadays", "nowhere"]
    }, {
        "A beginner in any business or occupation. ": ["novice", "nowadays", "nowhere", "noxious"]
    }, {
        "In the present time or age. ": ["nowadays", "nowhere", "noxious", "nuance"]
    }, {
        "In no place or state. ": ["nowhere", "noxious", "nuance", "nucleus"]
    }, {
        "Hurtful. ": ["noxious", "nuance", "nucleus", "nude"]
    }, {
        "A slight degree of difference in anything perceptible to the sense of the mind. ": ["nuance", "nucleus", "nude", "nugatory"]
    }, {
        "A central point or part about which matter is aggregated. ": ["nucleus", "nude", "nugatory", "nuisance"]
    }, {
        "Naked. ": ["nude", "nugatory", "nuisance", "numeration"]
    }, {
        "Having no power or force. ": ["nugatory", "nuisance", "numeration", "numerical"]
    }, {
        "That which annoys, vexes, or irritates. ": ["nuisance", "numeration", "numerical", "nunnery"]
    }, {
        "The act or art of reading or naming numbers. ": ["numeration", "numerical", "nunnery", "nuptial"]
    }, {
        "Of or pertaining to number. ": ["numerical", "nunnery", "nuptial", "nurture"]
    }, {
        "A convent for nuns. ": ["nunnery", "nuptial", "nurture", "nutriment"]
    }, {
        "Of or pertaining to marriage, especially to the marriage ceremony. ": ["nuptial", "nurture", "nutriment", "nutritive"]
    }, {
        "The process of fostering or promoting growth. ": ["nurture", "nutriment", "nutritive", "oaken"]
    }, {
        "That which nourishes. ": ["nutriment", "nutritive", "oaken", "oakum"]
    }, {
        "Having nutritious properties. ": ["nutritive", "oaken", "oakum", "obdurate"]
    }, {
        "Made of or from oak. ": ["oaken", "oakum", "obdurate", "obelisk"]
    }, {
        "Hemp-fiber obtained by untwisting and picking out loosely the yarns of old hemp rope. ": ["oakum", "obdurate", "obelisk", "obese"]
    }, {
        "Impassive to feelings of humanity or pity. ": ["obdurate", "obelisk", "obese", "obesity"]
    }, {
        "A square shaft with pyramidal top, usually monumental or commemorative. ": ["obelisk", "obese", "obesity", "obituary"]
    }, {
        "Exceedingly fat. ": ["obese", "obesity", "obituary", "objective"]
    }, {
        "Excessive fatness. ": ["obesity", "obituary", "objective", "objector"]
    }, {
        "A published notice of a death. ": ["obituary", "objective", "objector", "obligate"]
    }, {
        "Grasping and representing facts as they are. ": ["objective", "objector", "obligate", "obligatory"]
    }, {
        "One who objects, as to a proposition, measure, or ruling. ": ["objector", "obligate", "obligatory", "oblique"]
    }, {
        "To hold to the fulfillment of duty. ": ["obligate", "obligatory", "oblique", "obliterate"]
    }, {
        "Binding in law or conscience. ": ["obligatory", "oblique", "obliterate", "oblivion"]
    }, {
        "Slanting; said of lines. ": ["oblique", "obliterate", "oblivion", "oblong"]
    }, {
        "To cause to disappear. ": ["obliterate", "oblivion", "oblong", "obnoxious"]
    }, {
        "The state of having passed out of the memory or of being utterly forgotten. ": ["oblivion", "oblong", "obnoxious", "obsequies"]
    }, {
        "Longer than broad: applied most commonly to rectangular objects considerably elongated ": ["oblong", "obnoxious", "obsequies", "obsequious"]
    }, {
        "Detestable. ": ["obnoxious", "obsequies", "obsequious", "observance"]
    }, {
        "Funeral rites. ": ["obsequies", "obsequious", "observance", "observant"]
    }, {
        "Showing a servile readiness to fall in with the wishes or will of another. ": ["obsequious", "observance", "observant", "observatory"]
    }, {
        "A traditional form or customary act. ": ["observance", "observant", "observatory", "obsolescence"]
    }, {
        "Quick to notice. ": ["observant", "observatory", "obsolescence", "obsolescent"]
    }, {
        "A building designed for systematic astronomical observations. ": ["observatory", "obsolescence", "obsolescent", "obsolete"]
    }, {
        "The condition or process of gradually falling into disuse. ": ["obsolescence", "obsolescent", "obsolete", "obstetrician"]
    }, {
        "Passing out of use, as a word. ": ["obsolescent", "obsolete", "obstetrician", "obstetrics"]
    }, {
        "No longer practiced or accepted. ": ["obsolete", "obstetrician", "obstetrics", "obstinacy"]
    }, {
        "A practitioner of midwifery. ": ["obstetrician", "obstetrics", "obstinacy", "obstreperous"]
    }, {
        "The branch of medical science concerned with the treatment and care of women during pregnancy. ": ["obstetrics", "obstinacy", "obstreperous", "obstruct"]
    }, {
        "Stubborn adherence to opinion, arising from conceit or the desire to have one's own way. ": ["obstinacy", "obstreperous", "obstruct", "obstruction"]
    }, {
        "Boisterous. ": ["obstreperous", "obstruct", "obstruction", "obtrude"]
    }, {
        "To fill with impediments so as to prevent passage, either wholly or in part. ": ["obstruct", "obstruction", "obtrude", "obtrusive"]
    }, {
        "Hindrance. ": ["obstruction", "obtrude", "obtrusive", "obvert"]
    }, {
        "To be pushed or to push oneself into undue prominence. ": ["obtrude", "obtrusive", "obvert", "obviate"]
    }, {
        "Tending to be pushed or to push oneself into undue prominence. ": ["obtrusive", "obvert", "obviate", "occasion"]
    }, {
        "To turn the front or principal side of (a thing) toward any person or object. ": ["obvert", "obviate", "occasion", "Occident"]
    }, {
        "To clear away or provide for, as an objection or difficulty. ": ["obviate", "occasion", "Occident", "occlude"]
    }, {
        "An important event or celebration. ": ["occasion", "Occident", "occlude", "occult"]
    }, {
        "The countries lying west of Asia and the Turkish dominions. ": ["Occident", "occlude", "occult", "occupant"]
    }, {
        "To absorb, as a gas by a metal. ": ["occlude", "occult", "occupant", "occurrence"]
    }, {
        "Existing but not immediately perceptible. ": ["occult", "occupant", "occurrence", "octagon"]
    }, {
        "A tenant in possession of property, as distinguished from the actual owner. ": ["occupant", "occurrence", "octagon", "octave"]
    }, {
        "A happening. ": ["occurrence", "octagon", "octave", "octavo"]
    }, {
        "A figure with eight sides and eight angles. ": ["octagon", "octave", "octavo", "octogenarian"]
    }, {
        "A note at this interval above or below any other, considered in relation to that other. ": ["octave", "octavo", "octogenarian", "ocular"]
    }, {
        "A book, or collection of paper in which the sheets are so folded as to make eight leaves. ": ["octavo", "octogenarian", "ocular", "oculist"]
    }, {
        "A person of between eighty and ninety years. ": ["octogenarian", "ocular", "oculist", "oddity"]
    }, {
        "Of or pertaining to the eye. ": ["ocular", "oculist", "oddity", "ode"]
    }, {
        "One versed or skilled in treating diseases of the eye. ": ["oculist", "oddity", "ode", "odious"]
    }, {
        "An eccentricity. ": ["oddity", "ode", "odious", "odium"]
    }, {
        "The form of lyric poetry anciently intended to be sung. ": ["ode", "odious", "odium", "odoriferous"]
    }, {
        "Hateful. ": ["odious", "odium", "odoriferous", "odorous"]
    }, {
        "A feeling of extreme repugnance, or of dislike and disgust. ": ["odium", "odoriferous", "odorous", "off"]
    }, {
        "Having or diffusing an odor or scent, especially an agreeable one. ": ["odoriferous", "odorous", "off", "offhand"]
    }, {
        "Having an odor, especially a fragrant one. ": ["odorous", "off", "offhand", "officiate"]
    }, {
        "Farther or more distant. ": ["off", "offhand", "officiate", "officious"]
    }, {
        "Without preparation. ": ["offhand", "officiate", "officious", "offshoot"]
    }, {
        "To act as an officer or leader. ": ["officiate", "officious", "offshoot", "ogre"]
    }, {
        "Intermeddling with what is not one's concern. ": ["officious", "offshoot", "ogre", "ointment"]
    }, {
        "Something that branches off from the parent stock. ": ["offshoot", "ogre", "ointment", "olfactory"]
    }, {
        "A demon or monster that was supposed to devour human beings. ": ["ogre", "ointment", "olfactory", "olive-branch"]
    }, {
        "A fatty preparation with a butter-like consistency in which a medicinal substance exists.": ["ointment", "olfactory", "olive-branch", "ominous"]
    }, {
        "of or pertaining to the sense of smell. ": ["olfactory", "olive-branch", "ominous", "omission"]
    }, {
        "A branch of the olive-tree, as an emblem of peace. ": ["olive-branch", "ominous", "omission", "omnipotence"]
    }, {
        "Portentous. ": ["ominous", "omission", "omnipotence", "Omnipotent"]
    }, {
        "Exclusion. ": ["omission", "omnipotence", "Omnipotent", "omniscience"]
    }, {
        "Unlimited and universal power. ": ["omnipotence", "Omnipotent", "omniscience", "omniscient"]
    }, {
        "Possessed of unlimited and universal power. ": ["Omnipotent", "omniscience", "omniscient", "omnivorous"]
    }, {
        "Unlimited or infinite knowledge. ": ["omniscience", "omniscient", "omnivorous", "onerous"]
    }, {
        "Characterized by unlimited or infinite knowledge. ": ["omniscient", "omnivorous", "onerous", "onrush"]
    }, {
        "Eating or living upon food of all kinds indiscriminately. ": ["omnivorous", "onerous", "onrush", "onset"]
    }, {
        "Burdensome or oppressive. ": ["onerous", "onrush", "onset", "onslaught"]
    }, {
        "Onset. ": ["onrush", "onset", "onslaught", "onus"]
    }, {
        "An assault, especially of troops, upon an enemy or fortification. ": ["onset", "onslaught", "onus", "opalescence"]
    }, {
        "A violent onset. ": ["onslaught", "onus", "opalescence", "opaque"]
    }, {
        "A burden or responsibility. ": ["onus", "opalescence", "opaque", "operate"]
    }, {
        "The property of combined refraction and reflection of light, resulting in smoky tints. ": ["opalescence", "opaque", "operate", "operative"]
    }, {
        "Impervious to light. ": ["opaque", "operate", "operative", "operator"]
    }, {
        "To put in action and supervise the working of. ": ["operate", "operative", "operator", "operetta"]
    }, {
        "Active. ": ["operative", "operator", "operetta", "opinion"]
    }, {
        "One who works with or controls some machine or scientific apparatus. ": ["operator", "operetta", "opinion", "opponent"]
    }, {
        "A humorous play in dialogue and music, of more than one act. ": ["operetta", "opinion", "opponent", "opportune"]
    }, {
        "A conclusion or judgment held with confidence, but falling short of positive knowledge. ": ["opinion", "opponent", "opportune", "opportunist"]
    }, {
        "One who supports the opposite side in a debate, discussion, struggle, or sport. ": ["opponent", "opportune", "opportunist", "opportunity"]
    }, {
        "Especially fit as occurring, said, or done at the right moment. ": ["opportune", "opportunist", "opportunity", "opposite"]
    }, {
        "One who takes advantage of circumstances to gain his ends. ": ["opportunist", "opportunity", "opposite", "opprobrium"]
    }, {
        "Favorable or advantageous chance or opening. ": ["opportunity", "opposite", "opprobrium", "optic"]
    }, {
        "Radically different or contrary in action or movement. ": ["opposite", "opprobrium", "optic", "optician"]
    }, {
        "The state of being scornfully reproached or accused of evil. ": ["opprobrium", "optic", "optician", "optics"]
    }, {
        "Pertaining to the eye or vision. ": ["optic", "optician", "optics", "optimism"]
    }, {
        "One who makes or deals in optical instruments or eye-glasses. ": ["optician", "optics", "optimism", "option"]
    }, {
        "The science that treats of light and vision, and all that is connected with sight. ": ["optics", "optimism", "option", "optometry"]
    }, {
        "The view that everything in nature and the history of mankind is ordered for the best. ": ["optimism", "option", "optometry", "opulence"]
    }, {
        "The right, power, or liberty of choosing. ": ["option", "optometry", "opulence", "opulent"]
    }, {
        "Measurement of the powers of vision. ": ["optometry", "opulence", "opulent", "oral"]
    }, {
        "Affluence. ": ["opulence", "opulent", "oral", "orate"]
    }, {
        "Wealthy. ": ["opulent", "oral", "orate", "oration"]
    }, {
        "Uttered through the mouth. ": ["oral", "orate", "oration", "orator"]
    }, {
        "To deliver an elaborate or formal public speech. ": ["orate", "oration", "orator", "oratorio"]
    }, {
        "An elaborate or formal public speech. ": ["oration", "orator", "oratorio", "oratory"]
    }, {
        "One who delivers an elaborate or formal speech. ": ["orator", "oratorio", "oratory", "ordeal"]
    }, {
        "A composition for solo voices, chorus, and orchestra, generally taken from the Scriptures. ": ["oratorio", "oratory", "ordeal", "ordinal"]
    }, {
        "The art of public speaking. ": ["oratory", "ordeal", "ordinal", "ordination"]
    }, {
        "Anything that severely tests courage, strength, patience, conscience, etc. ": ["ordeal", "ordinal", "ordination", "ordnance"]
    }, {
        "That form of the numeral that shows the order of anything in a series, as first, second, third. ": ["ordinal", "ordination", "ordnance", "orgies"]
    }, {
        "A consecration to the ministry. ": ["ordination", "ordnance", "orgies", "origin"]
    }, {
        "A general name for all kinds of weapons and their appliances used in war. ": ["ordnance", "orgies", "origin", "original"]
    }, {
        "Wild or wanton revelry. ": ["orgies", "origin", "original", "originate"]
    }, {
        "The beginning of that which becomes or is made to be. ": ["origin", "original", "originate", "ornate"]
    }, {
        "Not copied nor produced by imitation. ": ["original", "originate", "ornate", "orthodox"]
    }, {
        "To cause or constitute the beginning or first stage of the existence of. ": ["originate", "ornate", "orthodox", "orthodoxy"]
    }, {
        "Ornamented to a marked degree. ": ["ornate", "orthodox", "orthodoxy", "orthogonal"]
    }, {
        "Holding the commonly accepted faith. ": ["orthodox", "orthodoxy", "orthogonal", "orthopedic"]
    }, {
        "Acceptance of the common faith. ": ["orthodoxy", "orthogonal", "orthopedic", "orthopedist"]
    }, {
        "Having or determined by right angles. ": ["orthogonal", "orthopedic", "orthopedist", "oscillate"]
    }, {
        "Relating to the correcting or preventing of deformity ": ["orthopedic", "orthopedist", "oscillate", "osculate"]
    }, {
        "One who practices the correcting or preventing of deformity ": ["orthopedist", "oscillate", "osculate", "ossify"]
    }, {
        "To swing back and forth. ": ["oscillate", "osculate", "ossify", "ostentation"]
    }, {
        "To kiss. ": ["osculate", "ossify", "ostentation", "ostracism"]
    }, {
        "to convert into bone. ": ["ossify", "ostentation", "ostracism", "ostracize"]
    }, {
        "A display dictated by vanity and intended to invite applause or flattery. ": ["ostentation", "ostracism", "ostracize", "ought"]
    }, {
        "Exclusion from intercourse or favor, as in society or politics. ": ["ostracism", "ostracize", "ought", "oust"]
    }, {
        "To exclude from public or private favor. ": ["ostracize", "ought", "oust", "out-and-out"]
    }, {
        "To be under moral obligation to be or do. ": ["ought", "oust", "out-and-out", "outbreak"]
    }, {
        "To eject. ": ["oust", "out-and-out", "outbreak", "outburst"]
    }, {
        "Genuinely. ": ["out-and-out", "outbreak", "outburst", "outcast"]
    }, {
        "A sudden and violent breaking forth, as of something that has been pent up or restrained. ": ["outbreak", "outburst", "outcast", "outcry"]
    }, {
        "A violent issue, especially of passion in an individual. ": ["outburst", "outcast", "outcry", "outdo"]
    }, {
        "One rejected and despised, especially socially. ": ["outcast", "outcry", "outdo", "outlandish"]
    }, {
        "A vehement or loud cry or clamor. ": ["outcry", "outdo", "outlandish", "outlast"]
    }, {
        "To surpass. ": ["outdo", "outlandish", "outlast", "outlaw"]
    }, {
        "Of barbarous, uncouth, and unfamiliar aspect or action. ": ["outlandish", "outlast", "outlaw", "outlive"]
    }, {
        "To last longer than. ": ["outlast", "outlaw", "outlive", "out-of-the-way"]
    }, {
        "A habitual lawbreaker. ": ["outlaw", "outlive", "out-of-the-way", "outpost"]
    }, {
        "To continue to exist after. ": ["outlive", "out-of-the-way", "outpost", "outrage"]
    }, {
        "Remotely situated. ": ["out-of-the-way", "outpost", "outrage", "outrageous"]
    }, {
        "A detachment of troops stationed at a distance from the main body to guard against surprise. ": ["outpost", "outrage", "outrageous", "outreach"]
    }, {
        "A gross infringement of morality or decency. ": ["outrage", "outrageous", "outreach", "outride"]
    }, {
        "Shocking in conduct. ": ["outrageous", "outreach", "outride", "outrigger"]
    }, {
        "To reach or go beyond. ": ["outreach", "outride", "outrigger", "outright"]
    }, {
        "To ride faster than. ": ["outride", "outrigger", "outright", "outskirt"]
    }, {
        "A part built or arranged to project beyond a natural outline for support. ": ["outrigger", "outright", "outskirt", "outstretch"]
    }, {
        "Entirely. ": ["outright", "outskirt", "outstretch", "outstrip"]
    }, {
        "A border region. ": ["outskirt", "outstretch", "outstrip", "outweigh"]
    }, {
        "To extend. ": ["outstretch", "outstrip", "outweigh", "overdo"]
    }, {
        "To go beyond. ": ["outstrip", "outweigh", "overdo", "overdose"]
    }, {
        "To surpass in importance or excellence. ": ["outweigh", "overdo", "overdose", "overeat"]
    }, {
        "To overtax the strength of. ": ["overdo", "overdose", "overeat", "overhang"]
    }, {
        "An excessive dose, usually so large a dose of a medicine that its effect is toxic. ": ["overdose", "overeat", "overhang", "overleap"]
    }, {
        "To eat to excess. ": ["overeat", "overhang", "overleap", "overlord"]
    }, {
        "A portion of a structure which projects or hangs over. ": ["overhang", "overleap", "overlord", "overpass"]
    }, {
        "To leap beyond. ": ["overleap", "overlord", "overpass", "overpay"]
    }, {
        "One who holds supremacy over another. ": ["overlord", "overpass", "overpay", "overpower"]
    }, {
        "To pass across or over, as a river. ": ["overpass", "overpay", "overpower", "overproduction"]
    }, {
        "To pay or reward in excess. ": ["overpay", "overpower", "overproduction", "overreach"]
    }, {
        "To gain supremacy or victory over by superior power. ": ["overpower", "overproduction", "overreach", "overrun"]
    }, {
        "Excessive production. ": ["overproduction", "overreach", "overrun", "oversee"]
    }, {
        "To stretch out too far. ": ["overreach", "overrun", "oversee", "overseer"]
    }, {
        "To infest or ravage. ": ["overrun", "oversee", "overseer", "overshadow"]
    }, {
        "To superintend. ": ["oversee", "overseer", "overshadow", "overstride"]
    }, {
        "A supervisor. ": ["overseer", "overshadow", "overstride", "overthrow"]
    }, {
        "To cast into the shade or render insignificant by comparison. ": ["overshadow", "overstride", "overthrow", "overtone"]
    }, {
        "To step beyond. ": ["overstride", "overthrow", "overtone", "overture"]
    }, {
        "To vanquish an established ruler or government. ": ["overthrow", "overtone", "overture", "overweight"]
    }, {
        "A harmonic. ": ["overtone", "overture", "overweight", "pacify"]
    }, {
        "An instrumental prelude to an opera, oratorio, or ballet. ": ["overture", "overweight", "pacify", "packet"]
    }, {
        "Preponderance. ": ["overweight", "pacify", "packet", "pact"]
    }, {
        "To bring into a peaceful state. ": ["pacify", "packet", "pact", "pagan"]
    }, {
        "A bundle, as of letters. ": ["packet", "pact", "pagan", "pageant"]
    }, {
        "A covenant. ": ["pact", "pagan", "pageant", "palate"]
    }, {
        "A worshiper of false gods. ": ["pagan", "pageant", "palate", "palatial"]
    }, {
        "A dramatic representation, especially a spectacular one. ": ["pageant", "palate", "palatial", "paleontology"]
    }, {
        "The roof of the mouth. ": ["palate", "palatial", "paleontology", "palette"]
    }, {
        "Magnificent. ": ["palatial", "paleontology", "palette", "palinode"]
    }, {
        "The branch of biology that treats of ancient life and fossil organisms. ": ["paleontology", "palette", "palinode", "pall"]
    }, {
        "A thin tablet, with a hole for the thumb, upon which artists lay their colors for painting. ": ["palette", "palinode", "pall", "palliate"]
    }, {
        "A retraction. ": ["palinode", "pall", "palliate", "pallid"]
    }, {
        "To make dull by satiety. ": ["pall", "palliate", "pallid", "palpable"]
    }, {
        "To cause to appear less guilty. ": ["palliate", "pallid", "palpable", "palsy"]
    }, {
        "Of a pale or wan appearance. ": ["pallid", "palpable", "palsy", "paly"]
    }, {
        "perceptible by feeling or touch. ": ["palpable", "palsy", "paly", "pamphlet"]
    }, {
        "Paralysis. ": ["palsy", "paly", "pamphlet", "pamphleteer"]
    }, {
        "Lacking color or brilliancy. ": ["paly", "pamphlet", "pamphleteer", "panacea"]
    }, {
        "A brief treatise or essay, usually on a subject of current interest. ": ["pamphlet", "pamphleteer", "panacea", "Pan-American"]
    }, {
        "To compose or issue pamphlets, especially controversial ones. ": ["pamphleteer", "panacea", "Pan-American", "pandemic"]
    }, {
        "A remedy or medicine proposed for or professing to cure all diseases. ": ["panacea", "Pan-American", "pandemic", "pandemonium"]
    }, {
        "Including or pertaining to the whole of America, both North and South. ": ["Pan-American", "pandemic", "pandemonium", "panegyric"]
    }, {
        "Affecting a whole people or all classes, as a disease. ": ["pandemic", "pandemonium", "panegyric", "panel"]
    }, {
        "A fiendish or riotous uproar. ": ["pandemonium", "panegyric", "panel", "panic"]
    }, {
        "A formal and elaborate eulogy, written or spoken, of a person or of an act. ": ["panegyric", "panel", "panic", "panoply"]
    }, {
        "A rectangular piece set in or as in a frame. ": ["panel", "panic", "panoply", "panorama"]
    }, {
        "A sudden, unreasonable, overpowering fear. ": ["panic", "panoply", "panorama", "pantheism"]
    }, {
        "A full set of armor. ": ["panoply", "panorama", "pantheism", "Pantheon"]
    }, {
        "A series of large pictures representing a continuous scene. ": ["panorama", "pantheism", "Pantheon", "pantomime"]
    }, {
        "The worship of nature for itself or its beauty. ": ["pantheism", "Pantheon", "pantomime", "pantoscope"]
    }, {
        "A circular temple at Rome with a fine Corinthian portico and a great domed roof. ": ["Pantheon", "pantomime", "pantoscope", "papacy"]
    }, {
        "Sign-language. ": ["pantomime", "pantoscope", "papacy", "papyrus"]
    }, {
        "A very wide-angled photographic lens. ": ["pantoscope", "papacy", "papyrus", "parable"]
    }, {
        "The official head of the Roman Catholic Church. ": ["papacy", "papyrus", "parable", "paradox"]
    }, {
        "The writing-paper of the ancient Egyptians, and later of the Romans. ": ["papyrus", "parable", "paradox", "paragon"]
    }, {
        "A brief narrative founded on real scenes or events usually with a moral. ": ["parable", "paradox", "paragon", "parallel"]
    }, {
        "A statement or doctrine seemingly in contradiction to the received belief. ": ["paradox", "paragon", "parallel", "parallelism"]
    }, {
        "A model of excellence. ": ["paragon", "parallel", "parallelism", "paralysis"]
    }, {
        "To cause to correspond or lie in the same direction and equidistant in all parts. ": ["parallel", "parallelism", "paralysis", "paralyze"]
    }, {
        "Essential likeness. ": ["parallelism", "paralysis", "paralyze", "paramount"]
    }, {
        "Loss of the power of contractility in the voluntary or involuntary muscles. ": ["paralysis", "paralyze", "paramount", "paramour"]
    }, {
        "To deprive of the power to act. ": ["paralyze", "paramount", "paramour", "paraphernalia"]
    }, {
        "Supreme in authority. ": ["paramount", "paramour", "paraphernalia", "paraphrase"]
    }, {
        "One who is unlawfully and immorally a lover or a mistress. ": ["paramour", "paraphernalia", "paraphrase", "pare"]
    }, {
        "Miscellaneous articles of equipment or adornment. ": ["paraphernalia", "paraphrase", "pare", "parentage"]
    }, {
        "Translate freely. ": ["paraphrase", "pare", "parentage", "Pariah"]
    }, {
        "To cut, shave, or remove (the outside) from anything. ": ["pare", "parentage", "Pariah", "parish"]
    }, {
        "The relation of parent to child, of the producer to the produced, or of cause to effect. ": ["parentage", "Pariah", "parish", "Parisian"]
    }, {
        "A member of a degraded class; a social outcast. ": ["Pariah", "parish", "Parisian", "parity"]
    }, {
        "The ecclesiastical district in charge of a pastor. ": ["parish", "Parisian", "parity", "parlance"]
    }, {
        "Of or pertaining to the city of Paris. ": ["Parisian", "parity", "parlance", "parley"]
    }, {
        "Equality, as of condition or rank. ": ["parity", "parlance", "parley", "parliament"]
    }, {
        "Mode of speech. ": ["parlance", "parley", "parliament", "parlor"]
    }, {
        "To converse in. ": ["parley", "parliament", "parlor", "parody"]
    }, {
        "A legislative body. ": ["parliament", "parlor", "parody", "paronymous"]
    }, {
        "A room for reception of callers or entertainment of guests. ": ["parlor", "parody", "paronymous", "paroxysm"]
    }, {
        "To render ludicrous by imitating the language of. ": ["parody", "paronymous", "paroxysm", "parricide"]
    }, {
        "Derived from the same root or primitive word. ": ["paronymous", "paroxysm", "parricide", "parse"]
    }, {
        "A sudden outburst of any kind of activity. ": ["paroxysm", "parricide", "parse", "parsimonious"]
    }, {
        "The murder of a parent. ": ["parricide", "parse", "parsimonious", "partible"]
    }, {
        "To describe, as a sentence, by separating it into its elements and describing each word. ": ["parse", "parsimonious", "partible", "participant"]
    }, {
        "Unduly sparing in the use or expenditure of money. ": ["parsimonious", "partible", "participant", "participate"]
    }, {
        "Separable. ": ["partible", "participant", "participate", "partition"]
    }, {
        "One having a share or part. ": ["participant", "participate", "partition", "partisan"]
    }, {
        "To receive or have a part or share of. ": ["participate", "partition", "partisan", "passible"]
    }, {
        "That which separates anything into distinct parts. ": ["partition", "partisan", "passible", "passive"]
    }, {
        "Characterized by or exhibiting undue or unreasoning devotion to a party. ": ["partisan", "passible", "passive", "pastoral"]
    }, {
        "Capable of feeling of suffering. ": ["passible", "passive", "pastoral", "paternal"]
    }, {
        "Unresponsive. ": ["passive", "pastoral", "paternal", "paternity"]
    }, {
        "Having the spirit or sentiment of rural life. ": ["pastoral", "paternal", "paternity", "pathos"]
    }, {
        "Fatherly. ": ["paternal", "paternity", "pathos", "patriarch"]
    }, {
        "Fatherhood. ": ["paternity", "pathos", "patriarch", "patrician"]
    }, {
        "The quality in any form of representation that rouses emotion or sympathy. ": ["pathos", "patriarch", "patrician", "patrimony"]
    }, {
        "The chief of a tribe or race who rules by paternal right. ": ["patriarch", "patrician", "patrimony", "patriotism"]
    }, {
        "Of senatorial or noble rank. ": ["patrician", "patrimony", "patriotism", "patronize"]
    }, {
        "An inheritance from an ancestor, especially from one's father. ": ["patrimony", "patriotism", "patronize", "patronymic"]
    }, {
        "Love and devotion to one's country. ": ["patriotism", "patronize", "patronymic", "patter"]
    }, {
        "To exercise an arrogant condescension toward. ": ["patronize", "patronymic", "patter", "paucity"]
    }, {
        "Formed after one's father's name. ": ["patronymic", "patter", "paucity", "pauper"]
    }, {
        "To mumble something over and over. ": ["patter", "paucity", "pauper", "pauperism"]
    }, {
        "Fewness. ": ["paucity", "pauper", "pauperism", "pavilion"]
    }, {
        "One without means of support. ": ["pauper", "pauperism", "pavilion", "payee"]
    }, {
        "Dependence on charity. ": ["pauperism", "pavilion", "payee", "peaceable"]
    }, {
        "An open structure for temporary shelter. ": ["pavilion", "payee", "peaceable", "peaceful"]
    }, {
        "A person to whom money has been or is to be paid. ": ["payee", "peaceable", "peaceful", "peccable"]
    }, {
        "Tranquil. ": ["peaceable", "peaceful", "peccable", "peccadillo"]
    }, {
        "Tranquil. ": ["peaceful", "peccable", "peccadillo", "peccant"]
    }, {
        "Capable of sinning. ": ["peccable", "peccadillo", "peccant", "pectoral"]
    }, {
        "A small breach of propriety or principle. ": ["peccadillo", "peccant", "pectoral", "pecuniary"]
    }, {
        "Guilty. ": ["peccant", "pectoral", "pecuniary", "pedagogics"]
    }, {
        "Pertaining to the breast or thorax. ": ["pectoral", "pecuniary", "pedagogics", "pedagogue"]
    }, {
        "Consisting of money. ": ["pecuniary", "pedagogics", "pedagogue", "pedagogy"]
    }, {
        "The science and art of teaching. ": ["pedagogics", "pedagogue", "pedagogy", "pedal"]
    }, {
        "A schoolmaster. ": ["pedagogue", "pedagogy", "pedal", "pedant"]
    }, {
        "The science and art of teaching ": ["pedagogy", "pedal", "pedant", "peddle"]
    }, {
        "A lever for the foot usually applied only to musical instruments, cycles, and other machines. ": ["pedal", "pedant", "peddle", "pedestal"]
    }, {
        "A scholar who makes needless and inopportune display of his learning. ": ["pedant", "peddle", "pedestal", "pedestrian"]
    }, {
        "To go about with a small stock of goods to sell. ": ["peddle", "pedestal", "pedestrian", "pediatrics"]
    }, {
        "A base or support as for a column, statue, or vase. ": ["pedestal", "pedestrian", "pediatrics", "pedigree"]
    }, {
        "One who journeys on foot. ": ["pedestrian", "pediatrics", "pedigree", "peddler"]
    }, {
        "The department of medical science that relates to the treatment of diseases of childhood. ": ["pediatrics", "pedigree", "peddler", "peerage"]
    }, {
        "One's line of ancestors. ": ["pedigree", "peddler", "peerage", "peerless"]
    }, {
        "One who travels from house to house with an assortment of goods for retail. ": ["peddler", "peerage", "peerless", "peevish"]
    }, {
        "The nobility. ": ["peerage", "peerless", "peevish", "pellucid"]
    }, {
        "Of unequaled excellence or worth. ": ["peerless", "peevish", "pellucid", "penalty"]
    }, {
        "Petulant. (irritable) ": ["peevish", "pellucid", "penalty", "penance"]
    }, {
        "Translucent. ": ["pellucid", "penalty", "penance", "penchant"]
    }, {
        "The consequences that follow the transgression of natural or divine law. ": ["penalty", "penance", "penchant", "pendant"]
    }, {
        "Punishment to which one voluntarily submits or subjects himself as an expression of penitence. ": ["penance", "penchant", "pendant", "pendulous"]
    }, {
        "A bias in favor of something. ": ["penchant", "pendant", "pendulous", "pendulum"]
    }, {
        "Anything that hangs from something else, either for ornament or for use. ": ["pendant", "pendulous", "pendulum", "penetrable"]
    }, {
        "Hanging, especially so as to swing by an attached end or part. ": ["pendulous", "pendulum", "penetrable", "penetrate"]
    }, {
        "A weight hung on a rod, serving by its oscillation to regulate the rate of a clock. ": ["pendulum", "penetrable", "penetrate", "penetration"]
    }, {
        "That may be pierced by physical, moral, or intellectual force. ": ["penetrable", "penetrate", "penetration", "peninsular"]
    }, {
        "To enter or force a way into the interior parts of. ": ["penetrate", "penetration", "peninsular", "penitence"]
    }, {
        "Discernment. ": ["penetration", "peninsular", "penitence", "penitential"]
    }, {
        "Pertaining to a piece of land almost surrounded by water. ": ["peninsular", "penitence", "penitential", "pennant"]
    }, {
        "Sorrow for sin with desire to amend and to atone. ": ["penitence", "penitential", "pennant", "pension"]
    }, {
        "Pertaining to sorrow for sin with desire to amend and to atone. ": ["penitential", "pennant", "pension", "pentagram"]
    }, {
        "A small flag. ": ["pennant", "pension", "pentagram", "pentavalent"]
    }, {
        "A periodical allowance to an individual on account of past service done by him/her. ": ["pension", "pentagram", "pentavalent", "pentad"]
    }, {
        "A figure having five points or lobes. ": ["pentagram", "pentavalent", "pentad", "pentagon"]
    }, {
        "Quinqeuvalent. ": ["pentavalent", "pentad", "pentagon", "pentahedron"]
    }, {
        "The number five. ": ["pentad", "pentagon", "pentahedron", "pentameter"]
    }, {
        "A figure, especially, with five angles and five sides. ": ["pentagon", "pentahedron", "pentameter", "pentathlon"]
    }, {
        "A solid bounded by five plane faces. ": ["pentahedron", "pentameter", "pentathlon", "penultimate"]
    }, {
        "In prosody, a line of verse containing five units or feet. ": ["pentameter", "pentathlon", "penultimate", "penurious"]
    }, {
        "The contest of five associated exercises in the great games and the same contestants. ": ["pentathlon", "penultimate", "penurious", "penury"]
    }, {
        "A syllable or member of a series that is last but one. ": ["penultimate", "penurious", "penury", "perambulate"]
    }, {
        "Excessively sparing in the use of money. ": ["penurious", "penury", "perambulate", "perceive"]
    }, {
        "Indigence. ": ["penury", "perambulate", "perceive", "perceptible"]
    }, {
        "To walk about. ": ["perambulate", "perceive", "perceptible", "perception"]
    }, {
        "To have knowledge of, or receive impressions concerning, through the medium of the body senses.": ["perceive", "perceptible", "perception", "percipience"]
    }, {
        "Cognizable. ": ["perceptible", "perception", "percipience", "percipient"]
    }, {
        "Knowledge through the senses of the existence and properties of matter or the external world. ": ["perception", "percipience", "percipient", "percolate"]
    }, {
        "The act of perceiving. ": ["percipience", "percipient", "percolate", "percolator"]
    }, {
        "One who or that which perceives. ": ["percipient", "percolate", "percolator", "percussion"]
    }, {
        "To filter. ": ["percolate", "percolator", "percussion", "peremptory"]
    }, {
        "A filter. ": ["percolator", "percussion", "peremptory", "perennial"]
    }, {
        "The sharp striking of one body against another. ": ["percussion", "peremptory", "perennial", "perfectible"]
    }, {
        "Precluding question or appeal. ": ["peremptory", "perennial", "perfectible", "perfidy"]
    }, {
        "Continuing though the year or through many years. ": ["perennial", "perfectible", "perfidy", "perforate"]
    }, {
        "Capable of being made perfect. ": ["perfectible", "perfidy", "perforate", "perform"]
    }, {
        "Treachery. ": ["perfidy", "perforate", "perform", "perfumery"]
    }, {
        "To make a hole or holes through. ": ["perforate", "perform", "perfumery", "perfunctory"]
    }, {
        "To accomplish. ": ["perform", "perfumery", "perfunctory", "perhaps"]
    }, {
        "The preparation of perfumes. ": ["perfumery", "perfunctory", "perhaps", "perigee"]
    }, {
        "Half-hearted. ": ["perfunctory", "perhaps", "perigee", "periodicity"]
    }, {
        "Possibly. ": ["perhaps", "perigee", "periodicity", "peripatetic"]
    }, {
        "The point in the orbit of the moon when it is nearest the earth. ": ["perigee", "periodicity", "peripatetic", "perjure"]
    }, {
        "The habit or characteristic of recurrence at regular intervals. ": ["periodicity", "peripatetic", "perjure", "perjury"]
    }, {
        "Walking about. ": ["peripatetic", "perjure", "perjury", "permanence"]
    }, {
        "To swear falsely to. ": ["perjure", "perjury", "permanence", "permanent"]
    }, {
        "A solemn assertion of a falsity. ": ["perjury", "permanence", "permanent", "permeate"]
    }, {
        "A continuance in the same state, or without any change that destroys the essential form or nature.": ["permanence", "permanent", "permeate", "permissible"]
    }, {
        "Durable. ": ["permanent", "permeate", "permissible", "permutation"]
    }, {
        "To pervade. ": ["permeate", "permissible", "permutation", "pernicious"]
    }, {
        "That may be allowed. ": ["permissible", "permutation", "pernicious", "perpendicular"]
    }, {
        "Reciprocal change, different ordering of same items. ": ["permutation", "pernicious", "perpendicular", "perpetrator"]
    }, {
        "Tending to kill or hurt. ": ["pernicious", "perpendicular", "perpetrator", "perpetuate"]
    }, {
        "Straight up and down. ": ["perpendicular", "perpetrator", "perpetuate", "perquisite"]
    }, {
        "The doer of a wrong or a criminal act. ": ["perpetrator", "perpetuate", "perquisite", "persecution"]
    }, {
        "To preserve from extinction or oblivion. ": ["perpetuate", "perquisite", "persecution", "perseverance"]
    }, {
        "Any profit from service beyond the amount fixed as salary or wages. ": ["perquisite", "persecution", "perseverance", "persevere"]
    }, {
        "Harsh or malignant oppression. ": ["persecution", "perseverance", "persevere", "persiflage"]
    }, {
        "A persistence in purpose and effort. ": ["perseverance", "persevere", "persiflage", "persist"]
    }, {
        "To continue striving in spite of discouragements. ": ["persevere", "persiflage", "persist", "persistence"]
    }, {
        "Banter. ": ["persiflage", "persist", "persistence", "personage"]
    }, {
        "To continue steadfast against opposition. ": ["persist", "persistence", "personage", "personal"]
    }, {
        "A fixed adherence to a resolve, course of conduct, or the like. ": ["persistence", "personage", "personal", "personality"]
    }, {
        "A man or woman as an individual, especially one of rank or high station. ": ["personage", "personal", "personality", "personnel"]
    }, {
        "Not general or public. ": ["personal", "personality", "personnel", "perspective"]
    }, {
        "The attributes, taken collectively, that make up the character and nature of an individual. ": ["personality", "personnel", "perspective", "perspicacious"]
    }, {
        "The force of persons collectively employed in some service. ": ["personnel", "perspective", "perspicacious", "perspicacity"]
    }, {
        "The relative importance of facts or matters from any special point of view. ": ["perspective", "perspicacious", "perspicacity", "perspicuous"]
    }, {
        "Astute. ": ["perspicacious", "perspicacity", "perspicuous", "perspiration"]
    }, {
        "Acuteness or discernment. ": ["perspicacity", "perspicuous", "perspiration", "perspire"]
    }, {
        "Lucid. ": ["perspicuous", "perspiration", "perspire", "persuade"]
    }, {
        "Sweat. ": ["perspiration", "perspire", "persuade", "persuadable"]
    }, {
        "To excrete through the pores of the skin. ": ["perspire", "persuade", "persuadable", "pertinacious"]
    }, {
        "To win the mind of by argument, eloquence, evidence, or reflection. ": ["persuade", "persuadable", "pertinacious", "pertinacity"]
    }, {
        "capable of influencing to action by entreaty, statement, or anything that moves the feelings. ": ["persuadable", "pertinacious", "pertinacity", "pertinent"]
    }, {
        "Persistent or unyielding. ": ["pertinacious", "pertinacity", "pertinent", "perturb"]
    }, {
        "Unyielding adherence. ": ["pertinacity", "pertinent", "perturb", "perturbation"]
    }, {
        "Relevant. ": ["pertinent", "perturb", "perturbation", "perusal"]
    }, {
        "To disturb greatly. ": ["perturb", "perturbation", "perusal", "pervade"]
    }, {
        "Mental excitement or confusion. ": ["perturbation", "perusal", "pervade", "pervasion"]
    }, {
        "The act of reading carefully or thoughtfully. ": ["perusal", "pervade", "pervasion", "pervasive"]
    }, {
        "To pass or spread through every part. ": ["pervade", "pervasion", "pervasive", "perverse"]
    }, {
        "The state of spreading through every part. ": ["pervasion", "pervasive", "perverse", "perversion"]
    }, {
        "Thoroughly penetrating or permeating. ": ["pervasive", "perverse", "perversion", "perversity"]
    }, {
        "Unreasonable. ": ["perverse", "perversion", "perversity", "pervert"]
    }, {
        "Diversion from the true meaning or proper purpose. ": ["perversion", "perversity", "pervert", "pervious"]
    }, {
        "Wickedness. ": ["perversity", "pervert", "pervious", "pestilence"]
    }, {
        "One who has forsaken a doctrine regarded as true for one esteemed false. ": ["pervert", "pervious", "pestilence", "pestilent"]
    }, {
        "Admitting the entrance or passage of another substance. ": ["pervious", "pestilence", "pestilent", "pestilential"]
    }, {
        "A raging epidemic. ": ["pestilence", "pestilent", "pestilential", "peter"]
    }, {
        "Having a malign influence or effect. ": ["pestilent", "pestilential", "peter", "petrify"]
    }, {
        "having the nature of or breeding pestilence. ": ["pestilential", "peter", "petrify", "petulance"]
    }, {
        "To fail or lose power, efficiency, or value. ": ["peter", "petrify", "petulance", "petulant"]
    }, {
        "To convert into a substance of stony hardness and character. ": ["petrify", "petulance", "petulant", "pharmacopoeia"]
    }, {
        "The character or condition of being impatient, capricious or petulant. ": ["petulance", "petulant", "pharmacopoeia", "pharmacy"]
    }, {
        "Displaying impatience. ": ["petulant", "pharmacopoeia", "pharmacy", "phenomenal"]
    }, {
        "A book containing the formulas and methods of preparation of medicines for the use of druggists.": ["pharmacopoeia", "pharmacy", "phenomenal", "phenomenon"]
    }, {
        "The art or business of compounding and dispensing medicines. ": ["pharmacy", "phenomenal", "phenomenon", "philander"]
    }, {
        "Extraordinary or marvelous. ": ["phenomenal", "phenomenon", "philander", "philanthropic"]
    }, {
        "Any unusual occurrence. ": ["phenomenon", "philander", "philanthropic", "philanthropist"]
    }, {
        "To play at courtship with a woman. ": ["philander", "philanthropic", "philanthropist", "philanthropy"]
    }, {
        "Benevolent. ": ["philanthropic", "philanthropist", "philanthropy", "philately"]
    }, {
        "One who endeavors to help his fellow men. ": ["philanthropist", "philanthropy", "philately", "philharmonic"]
    }, {
        "Active humanitarianism. ": ["philanthropy", "philately", "philharmonic", "philogynist"]
    }, {
        "The study and collection of stamps.": ["philately", "philharmonic", "philogynist", "philologist"]
    }, {
        "Fond of music. ": ["philharmonic", "philogynist", "philologist", "philology"]
    }, {
        "One who is fond of women. ": ["philogynist", "philologist", "philology", "philosophize"]
    }, {
        "An expert in linguistics. ": ["philologist", "philology", "philosophize", "philosophy"]
    }, {
        "The study of language in connection with history and literature. ": ["philology", "philosophize", "philosophy", "phlegmatic"]
    }, {
        "To seek ultimate causes and principles. ": ["philosophize", "philosophy", "phlegmatic", "phonetic"]
    }, {
        "The general principles, laws, or causes that furnish the rational explanation of anything. ": ["philosophy", "phlegmatic", "phonetic", "phonic"]
    }, {
        "Not easily roused to feeling or action. ": ["phlegmatic", "phonetic", "phonic", "phonogram"]
    }, {
        "Representing articulate sounds or speech. ": ["phonetic", "phonic", "phonogram", "phonology"]
    }, {
        "Pertaining to the nature of sound. ": ["phonic", "phonogram", "phonology", "phosphorescence"]
    }, {
        "A graphic character symbolizing an articulate sound. ": ["phonogram", "phonology", "phosphorescence", "photoelectric"]
    }, {
        "The science of human vocal sounds. ": ["phonology", "phosphorescence", "photoelectric", "photometer"]
    }, {
        "The property of emitting light. ": ["phosphorescence", "photoelectric", "photometer", "photometry"]
    }, {
        "Pertaining to the combined action of light and electricity. ": ["photoelectric", "photometer", "photometry", "physicist"]
    }, {
        "Any instrument for measuring the intensity of light or comparing the intensity of two lights. ": ["photometer", "photometry", "physicist", "physics"]
    }, {
        "The art of measuring the intensity of light. ": ["photometry", "physicist", "physics", "physiocracy"]
    }, {
        "A specialist in the science that treats of the phenomena associated with matter and energy. ": ["physicist", "physics", "physiocracy", "physiognomy"]
    }, {
        "The science that treats of the phenomena associated with matter and energy. ": ["physics", "physiocracy", "physiognomy", "physiography"]
    }, {
        "The doctrine that land and its products are the only true wealth. ": ["physiocracy", "physiognomy", "physiography", "physiology"]
    }, {
        "The external appearance merely. ": ["physiognomy", "physiography", "physiology", "physique"]
    }, {
        "Description of nature. ": ["physiography", "physiology", "physique", "picayune"]
    }, {
        "The science of organic functions. ": ["physiology", "physique", "picayune", "piccolo"]
    }, {
        "The physical structure or organization of a person. ": ["physique", "picayune", "piccolo", "piece"]
    }, {
        "Of small value. ": ["picayune", "piccolo", "piece", "piecemeal"]
    }, {
        "A small flute. ": ["piccolo", "piece", "piecemeal", "pillage"]
    }, {
        "A loose or separated part, as distinguished from the whole or the mass. ": ["piece", "piecemeal", "pillage", "pillory"]
    }, {
        "Gradually. ": ["piecemeal", "pillage", "pillory", "pincers"]
    }, {
        "Open robbery, as in war. ": ["pillage", "pillory", "pincers", "pinchers"]
    }, {
        "A wooden framework in which an offender is fastened to boards and is exposed to public scorn.": ["pillory", "pincers", "pinchers", "pinnacle"]
    }, {
        "An instrument having two lever-handles and two jaws working on a pivot. ": ["pincers", "pinchers", "pinnacle", "pioneer"]
    }, {
        "An instrument having two jaws working on a pivot. ": ["pinchers", "pinnacle", "pioneer", "pious"]
    }, {
        "A high or topmost point, as a mountain-peak. ": ["pinnacle", "pioneer", "pious", "pique"]
    }, {
        "One among the first to explore a country. ": ["pioneer", "pious", "pique", "piteous"]
    }, {
        "Religious. ": ["pious", "pique", "piteous", "pitiable"]
    }, {
        "To excite a slight degree of anger in. ": ["pique", "piteous", "pitiable", "pitiful"]
    }, {
        "Compassionate. ": ["piteous", "pitiable", "pitiful", "pitiless"]
    }, {
        "Contemptible. ": ["pitiable", "pitiful", "pitiless", "pittance"]
    }, {
        "Wretched. ": ["pitiful", "pitiless", "pittance", "placate"]
    }, {
        "Hard-hearted. ": ["pitiless", "pittance", "placate", "placid"]
    }, {
        "Any small portion or meager allowance. ": ["pittance", "placate", "placid", "plagiarism"]
    }, {
        "To bring from a state of angry or hostile feeling to one of patience or friendliness. ": ["placate", "placid", "plagiarism", "planisphere"]
    }, {
        "Serene. ": ["placid", "plagiarism", "planisphere", "plasticity"]
    }, {
        "The stealing of passages from the writings of another and publishing them as one's own. ": ["plagiarism", "planisphere", "plasticity", "platitude"]
    }, {
        "A polar projection of the heavens on a chart. ": ["planisphere", "plasticity", "platitude", "plaudit"]
    }, {
        "The property of some substances through which the form of the mass can readily be changed. ": ["plasticity", "platitude", "plaudit", "plausible"]
    }, {
        "A written or spoken statement that is flat, dull, or commonplace. ": ["platitude", "plaudit", "plausible", "playful"]
    }, {
        "An expression of applause. ": ["plaudit", "plausible", "playful", "playwright"]
    }, {
        "Seeming likely to be true, though open to doubt. ": ["plausible", "playful", "playwright", "plea"]
    }, {
        "Frolicsome. ": ["playful", "playwright", "plea", "pleasant"]
    }, {
        "A maker of plays for the stage. ": ["playwright", "plea", "pleasant", "pleasurable"]
    }, {
        "An argument to obtain some desired action. ": ["plea", "pleasant", "pleasurable", "plebeian"]
    }, {
        "Agreeable. ": ["pleasant", "pleasurable", "plebeian", "pledgee"]
    }, {
        "Affording gratification. ": ["pleasurable", "plebeian", "pledgee", "pledgeor"]
    }, {
        "Common. ": ["plebeian", "pledgee", "pledgeor", "plenary"]
    }, {
        "The person to whom anything is pledged. ": ["pledgee", "pledgeor", "plenary", "plenipotentiary"]
    }, {
        "One who gives a pledge. ": ["pledgeor", "plenary", "plenipotentiary", "plenitude"]
    }, {
        "Entire. ": ["plenary", "plenipotentiary", "plenitude", "plenteous"]
    }, {
        "A person fully empowered to transact any business. ": ["plenipotentiary", "plenitude", "plenteous", "plumb"]
    }, {
        "Abundance. ": ["plenitude", "plenteous", "plumb", "plummet"]
    }, {
        "Abundant. ": ["plenteous", "plumb", "plummet", "pluperfect"]
    }, {
        "A weight suspended by a line to test the verticality of something. ": ["plumb", "plummet", "pluperfect", "plural"]
    }, {
        "A piece of lead for making soundings, adjusting walls to the vertical. ": ["plummet", "pluperfect", "plural", "plurality"]
    }, {
        "Expressing past time or action prior to some other past time or action. ": ["pluperfect", "plural", "plurality", "plutocracy"]
    }, {
        "Containing or consisting of more than one. ": ["plural", "plurality", "plutocracy", "pneumatic"]
    }, {
        "A majority. ": ["plurality", "plutocracy", "pneumatic", "poesy"]
    }, {
        "A wealthy class in a political community who control the government by means of their money. ": ["plutocracy", "pneumatic", "poesy", "poetaster"]
    }, {
        "Pertaining to or consisting of air or gas. ": ["pneumatic", "poesy", "poetaster", "poetic"]
    }, {
        "Poetry. ": ["poesy", "poetaster", "poetic", "poetics"]
    }, {
        "An inferior poet. ": ["poetaster", "poetic", "poetics", "poignancy"]
    }, {
        "Pertaining to poetry. ": ["poetic", "poetics", "poignancy", "poignant"]
    }, {
        "The rules and principles of poetry. ": ["poetics", "poignancy", "poignant", "poise"]
    }, {
        "Severity or acuteness, especially of pain or grief. ": ["poignancy", "poignant", "poise", "polar"]
    }, {
        "Severely painful or acute to the spirit. ": ["poignant", "poise", "polar", "polemics"]
    }, {
        "Equilibrium. ": ["poise", "polar", "polemics", "pollen"]
    }, {
        "Pertaining to the poles of a sphere, especially of the earth. ": ["polar", "polemics", "pollen", "pollute"]
    }, {
        "The art of controversy or disputation. ": ["polemics", "pollen", "pollute", "polyarchy"]
    }, {
        "The fine dust-like grains or powder formed within the anther of a flowering plant. ": ["pollen", "pollute", "polyarchy", "polycracy"]
    }, {
        "To contaminate. ": ["pollute", "polyarchy", "polycracy", "polygamy"]
    }, {
        "Government by several or many persons of what- ever class. ": ["polyarchy", "polycracy", "polygamy", "polyglot"]
    }, {
        "The rule of many. ": ["polycracy", "polygamy", "polyglot", "polygon"]
    }, {
        "the fact or condition of having more than one wife or husband at once. ": ["polygamy", "polyglot", "polygon", "polyhedron"]
    }, {
        "Speaking several tongues. ": ["polyglot", "polygon", "polyhedron", "polysyllable"]
    }, {
        "A figure having many angles. ": ["polygon", "polyhedron", "polysyllable", "polytechnic"]
    }, {
        "A solid bounded by plane faces, especially by more than four. ": ["polyhedron", "polysyllable", "polytechnic", "polytheism"]
    }, {
        "Having several syllables, especially more than three syllables. ": ["polysyllable", "polytechnic", "polytheism", "pommel"]
    }, {
        "Pertaining to, embracing, or practicing many arts. ": ["polytechnic", "polytheism", "pommel", "pomposity"]
    }, {
        "The doctrine or belief that there are more gods than one. ": ["polytheism", "pommel", "pomposity", "pompous"]
    }, {
        "To beat with something thick or bulky. ": ["pommel", "pomposity", "pompous", "ponder"]
    }, {
        "The quality of being marked by an assumed stateliness and impressiveness of manner. ": ["pomposity", "pompous", "ponder", "ponderous"]
    }, {
        "Marked by an assumed stateliness and impressiveness of manner. ": ["pompous", "ponder", "ponderous", "pontiff"]
    }, {
        "To meditate or reflect upon. ": ["ponder", "ponderous", "pontiff", "populace"]
    }, {
        "Unusually weighty or forcible. ": ["ponderous", "pontiff", "populace", "populous"]
    }, {
        "The Pope. ": ["pontiff", "populace", "populous", "portend"]
    }, {
        "The common people. ": ["populace", "populous", "portend", "portent"]
    }, {
        "Containing many inhabitants, especially in proportion to the territory. ": ["populous", "portend", "portent", "portfolio"]
    }, {
        "To indicate as being about to happen, especially by previous signs. ": ["portend", "portent", "portfolio", "posit"]
    }, {
        "Anything that indicates what is to happen. ": ["portent", "portfolio", "posit", "position"]
    }, {
        "A portable case for holding writing-materials, drawings, etc. ": ["portfolio", "posit", "position", "positive"]
    }, {
        "To present in an orderly manner. ": ["posit", "position", "positive", "posse"]
    }, {
        "The manner in which a thing is placed. ": ["position", "positive", "posse", "possess"]
    }, {
        "Free from doubt or hesitation. ": ["positive", "posse", "possess", "possession"]
    }, {
        "A force of men. ": ["posse", "possess", "possession", "possessive"]
    }, {
        "To own. ": ["possess", "possession", "possessive", "possessor"]
    }, {
        "The having, holding, or detention of property in one's power or command. ": ["possession", "possessive", "possessor", "possible"]
    }, {
        "Pertaining to the having, holding, or detention of property in one's power or command. ": ["possessive", "possessor", "possible", "postdate"]
    }, {
        "One who owns, enjoys, or controls anything, as property. ": ["possessor", "possible", "postdate", "posterior"]
    }, {
        "Being not beyond the reach of power natural, moral, or supernatural. ": ["possible", "postdate", "posterior", "postgraduate"]
    }, {
        "To make the date of any writing later than the real date. ": ["postdate", "posterior", "postgraduate", "postscript"]
    }, {
        "The hinder part. ": ["posterior", "postgraduate", "postscript", "potency"]
    }, {
        "Pertaining to studies that are pursued after receiving a degree. ": ["postgraduate", "postscript", "potency", "potent"]
    }, {
        "Something added to a letter after the writer's signature. ": ["postscript", "potency", "potent", "potentate"]
    }, {
        "Power. ": ["potency", "potent", "potentate", "potential"]
    }, {
        "Physically powerful. ": ["potent", "potentate", "potential", "potion"]
    }, {
        "One possessed of great power or sway. ": ["potentate", "potential", "potion", "powerless"]
    }, {
        "Anything that may be possible. ": ["potential", "potion", "powerless", "practicable"]
    }, {
        "A dose of liquid medicine. ": ["potion", "powerless", "practicable", "prate"]
    }, {
        "Impotent. ": ["powerless", "practicable", "prate", "prattle"]
    }, {
        "Feasible. ": ["practicable", "prate", "prattle", "preamble"]
    }, {
        "To talk about vainly or foolishly. ": ["prate", "prattle", "preamble", "precarious"]
    }, {
        "To utter in simple or childish talk. ": ["prattle", "preamble", "precarious", "precaution"]
    }, {
        "A statement introductory to and explanatory of what follows. ": ["preamble", "precarious", "precaution", "precede"]
    }, {
        "Perilous. ": ["precarious", "precaution", "precede", "precedence"]
    }, {
        "A provision made in advance for some possible emergency or danger. ": ["precaution", "precede", "precedence", "precedent"]
    }, {
        "To happen first. ": ["precede", "precedence", "precedent", "precedential"]
    }, {
        "Priority in place, time, or rank. ": ["precedence", "precedent", "precedential", "precession"]
    }, {
        "An instance that may serve as a guide or basis for a rule. ": ["precedent", "precedential", "precession", "precipice"]
    }, {
        "Of the nature of an instance that may serve as a guide or basis for a rule. ": ["precedential", "precession", "precipice", "precipitant"]
    }, {
        "The act of going forward. ": ["precession", "precipice", "precipitant", "precipitate"]
    }, {
        "A high and very steep or approximately vertical cliff. ": ["precipice", "precipitant", "precipitate", "precise"]
    }, {
        "Moving onward quickly and heedlessly. ": ["precipitant", "precipitate", "precise", "precision"]
    }, {
        "To force forward prematurely. ": ["precipitate", "precise", "precision", "preclude"]
    }, {
        "Exact. ": ["precise", "precision", "preclude", "precocious"]
    }, {
        "Accuracy of limitation, definition, or adjustment. ": ["precision", "preclude", "precocious", "precursor"]
    }, {
        "To prevent. ": ["preclude", "precocious", "precursor", "predatory"]
    }, {
        "Having the mental faculties prematurely developed. ": ["precocious", "precursor", "predatory", "predecessor"]
    }, {
        "A forerunner or herald. ": ["precursor", "predatory", "predecessor", "predicament"]
    }, {
        "Prone to pillaging. ": ["predatory", "predecessor", "predicament", "predicate"]
    }, {
        "An incumbent of a given office previous to another. ": ["predecessor", "predicament", "predicate", "predict"]
    }, {
        "A difficult, trying situation or plight. ": ["predicament", "predicate", "predict", "prediction"]
    }, {
        "To state as belonging to something. ": ["predicate", "predict", "prediction", "predominance"]
    }, {
        "To foretell. ": ["predict", "prediction", "predominance", "predominant"]
    }, {
        "A prophecy. ": ["prediction", "predominance", "predominant", "predominate"]
    }, {
        "Ascendancy or preponderance. ": ["predominance", "predominant", "predominate", "preeminence"]
    }, {
        "Superior in power, influence, effectiveness, number, or degree. ": ["predominant", "predominate", "preeminence", "preempt"]
    }, {
        "To be chief in importance, quantity, or degree. ": ["predominate", "preeminence", "preempt", "preemption"]
    }, {
        "Special eminence. ": ["preeminence", "preempt", "preemption", "preengage"]
    }, {
        "To secure the right of preference in the purchase of public land. ": ["preempt", "preemption", "preengage", "preestablish"]
    }, {
        "The right or act of purchasing before others. ": ["preemption", "preengage", "preestablish", "preexist"]
    }, {
        "To preoccupy. ": ["preengage", "preestablish", "preexist", "preexistence"]
    }, {
        "To settle or arrange beforehand. ": ["preestablish", "preexist", "preexistence", "preface"]
    }, {
        "To exist at a period or in a state earlier than something else. ": ["preexist", "preexistence", "preface", "prefatory"]
    }, {
        "Existence antecedent to something. ": ["preexistence", "preface", "prefatory", "prefer"]
    }, {
        "A brief explanation or address to the reader, at the beginning of a book. ": ["preface", "prefatory", "prefer", "preferable"]
    }, {
        "Pertaining to a brief explanation to the reader at the beginning of a book. ": ["prefatory", "prefer", "preferable", "preference"]
    }, {
        "To hold in higher estimation. ": ["prefer", "preferable", "preference", "preferential"]
    }, {
        "More desirable than others. ": ["preferable", "preference", "preferential", "preferment"]
    }, {
        "An object of favor or choice. ": ["preference", "preferential", "preferment", "prefix"]
    }, {
        "Possessing, giving, or constituting preference or priority. ": ["preferential", "preferment", "prefix", "prehensible"]
    }, {
        "Preference. ": ["preferment", "prefix", "prehensible", "prehensile"]
    }, {
        "To attach at the beginning. ": ["prefix", "prehensible", "prehensile", "prehension"]
    }, {
        "Capable of being grasped. ": ["prehensible", "prehensile", "prehension", "prejudice"]
    }, {
        "Adapted for grasping or holding. ": ["prehensile", "prehension", "prejudice", "prelacy"]
    }, {
        "The act of laying hold of or grasping. ": ["prehension", "prejudice", "prelacy", "prelate"]
    }, {
        "A judgment or opinion formed without due examination of the facts. ": ["prejudice", "prelacy", "prelate", "prelude"]
    }, {
        "A system of church government. ": ["prelacy", "prelate", "prelude", "premature"]
    }, {
        "One of a higher order of clergy having direct authority over other clergy. ": ["prelate", "prelude", "premature", "premier"]
    }, {
        "An introductory or opening performance. ": ["prelude", "premature", "premier", "premise"]
    }, {
        "Coming too soon. ": ["premature", "premier", "premise", "premonition"]
    }, {
        "First in rank or position. ": ["premier", "premise", "premonition", "preoccupation"]
    }, {
        "A judgment as a conclusion. ": ["premise", "premonition", "preoccupation", "preoccupy"]
    }, {
        "Foreboding. ": ["premonition", "preoccupation", "preoccupy", "preordain"]
    }, {
        "The state of having the mind, attention, or inclination preoccupied. ": ["preoccupation", "preoccupy", "preordain", "preparation"]
    }, {
        "To fill the mind of a person to the exclusion of other subjects. ": ["preoccupy", "preordain", "preparation", "preparatory"]
    }, {
        "To foreordain. ": ["preordain", "preparation", "preparatory", "preponderant"]
    }, {
        "An act or proceeding designed to bring about some event. ": ["preparation", "preparatory", "preponderant", "preponderate"]
    }, {
        "Having to do with what is preliminary. ": ["preparatory", "preponderant", "preponderate", "prepossession"]
    }, {
        "Prevalent. ": ["preponderant", "preponderate", "prepossession", "preposterous"]
    }, {
        "To exceed in influence or power. ": ["preponderate", "prepossession", "preposterous", "prerogative"]
    }, {
        "A preconceived liking. ": ["prepossession", "preposterous", "prerogative", "presage"]
    }, {
        "Utterly ridiculous or absurd. ": ["preposterous", "prerogative", "presage", "prescience"]
    }, {
        "Having superior rank or precedence. ": ["prerogative", "presage", "prescience", "prescient"]
    }, {
        "To foretell. ": ["presage", "prescience", "prescient", "prescript"]
    }, {
        "Knowledge of events before they take place. ": ["prescience", "prescient", "prescript", "prescriptible"]
    }, {
        "Foreknowing. ": ["prescient", "prescript", "prescriptible", "prescription"]
    }, {
        "Prescribed as a rule or model. ": ["prescript", "prescriptible", "prescription", "presentient"]
    }, {
        "Derived from authoritative direction. ": ["prescriptible", "prescription", "presentient", "presentiment"]
    }, {
        "An authoritative direction. ": ["prescription", "presentient", "presentiment", "presentment"]
    }, {
        "Perceiving or feeling beforehand. ": ["presentient", "presentiment", "presentment", "preservation"]
    }, {
        "Foreboding. ": ["presentiment", "presentment", "preservation", "presumption"]
    }, {
        "Semblance. ": ["presentment", "preservation", "presumption", "presumptuous"]
    }, {
        "Conservation. ": ["preservation", "presumption", "presumptuous", "pretension"]
    }, {
        "That which may be logically assumed to be true until disproved. ": ["presumption", "presumptuous", "pretension", "pretentious"]
    }, {
        "Assuming too much. ": ["presumptuous", "pretension", "pretentious", "preternatural"]
    }, {
        "A bold or presumptuous assertion. ": ["pretension", "pretentious", "preternatural", "pretext"]
    }, {
        "Marked by pretense, conceit, or display. ": ["pretentious", "preternatural", "pretext", "prevalence"]
    }, {
        "Extraordinary. ": ["preternatural", "pretext", "prevalence", "prevalent"]
    }, {
        "A fictitious reason or motive. ": ["pretext", "prevalence", "prevalent", "prevaricate"]
    }, {
        "Frequency. ": ["prevalence", "prevalent", "prevaricate", "prevention"]
    }, {
        "Of wide extent or frequent occurrence. ": ["prevalent", "prevaricate", "prevention", "prickle"]
    }, {
        "To use ambiguous or evasive language for the purpose of deceiving or diverting attention. ": ["prevaricate", "prevention", "prickle", "priggish"]
    }, {
        "Thwarting. ": ["prevention", "prickle", "priggish", "prim"]
    }, {
        "To puncture slightly with fine, sharp points. ": ["prickle", "priggish", "prim", "prima"]
    }, {
        "Conceited. ": ["priggish", "prim", "prima", "primer"]
    }, {
        "Stiffly proper. ": ["prim", "prima", "primer", "primeval"]
    }, {
        "First. ": ["prima", "primer", "primeval", "primitive"]
    }, {
        "An elementary reading-book for children. ": ["primer", "primeval", "primitive", "principal"]
    }, {
        "Belonging to the first ages. ": ["primeval", "primitive", "principal", "principality"]
    }, {
        "Pertaining to the beginning or early times. ": ["primitive", "principal", "principality", "principle"]
    }, {
        "Most important. ": ["principal", "principality", "principle", "priory"]
    }, {
        "The territory of a reigning prince. ": ["principality", "principle", "priory", "pristine"]
    }, {
        "A general truth or proposition. ": ["principle", "priory", "pristine", "privateer"]
    }, {
        "A monastic house. ": ["priory", "pristine", "privateer", "privilege"]
    }, {
        "Primitive. ": ["pristine", "privateer", "privilege", "privity"]
    }, {
        "A vessel owned and officered by private persons, but carrying on maritime war. ": ["privateer", "privilege", "privity", "privy"]
    }, {
        "A right or immunity not enjoyed by all, or that may be enjoyed only under special conditions. ": ["privilege", "privity", "privy", "probate"]
    }, {
        "Knowledge shared with another or others regarding a private matter. ": ["privity", "privy", "probate", "probation"]
    }, {
        "Participating with another or others in the knowledge of a secret transaction. ": ["privy", "probate", "probation", "probe"]
    }, {
        "Relating to making proof, as of a will. ": ["probate", "probation", "probe", "probity"]
    }, {
        "Any proceeding designed to ascertain or test character, qualification, or the like. ": ["probation", "probe", "probity", "procedure"]
    }, {
        "To search through and through. ": ["probe", "probity", "procedure", "proceed"]
    }, {
        "Virtue or integrity tested and confirmed. ": ["probity", "procedure", "proceed", "proclamation"]
    }, {
        "A manner or method of acting. ": ["procedure", "proceed", "proclamation", "procrastinate"]
    }, {
        "To renew motion or action, as after rest or interruption. ": ["proceed", "proclamation", "procrastinate", "procrastination"]
    }, {
        "Any announcement made in a public manner. ": ["proclamation", "procrastinate", "procrastination", "proctor"]
    }, {
        "To put off till tomorrow or till a future time. ": ["procrastinate", "procrastination", "proctor", "prodigal"]
    }, {
        "Delay. ": ["procrastination", "proctor", "prodigal", "prodigious"]
    }, {
        "An agent acting for another. ": ["proctor", "prodigal", "prodigious", "prodigy"]
    }, {
        "One wasteful or extravagant, especially in the use of money or property. ": ["prodigal", "prodigious", "prodigy", "productive"]
    }, {
        "Immense. ": ["prodigious", "prodigy", "productive", "profession"]
    }, {
        "A person or thing of very remarkable gifts or qualities. ": ["prodigy", "productive", "profession", "professor"]
    }, {
        "Yielding in abundance. ": ["productive", "profession", "professor", "proffer"]
    }, {
        "Any calling or occupation involving special mental or other special disciplines. ": ["profession", "professor", "proffer", "proficiency"]
    }, {
        "A public teacher of the highest grade in a university or college. ": ["professor", "proffer", "proficiency", "proficient"]
    }, {
        "To offer to another for acceptance. ": ["proffer", "proficiency", "proficient", "profile"]
    }, {
        "An advanced state of acquirement, as in some knowledge, art, or science. ": ["proficiency", "proficient", "profile", "profiteer"]
    }, {
        "Possessing ample and ready knowledge or of skill in any art, science, or industry. ": ["proficient", "profile", "profiteer", "profligacy"]
    }, {
        "An outline or contour. ": ["profile", "profiteer", "profligacy", "profligate"]
    }, {
        "One who profits. ": ["profiteer", "profligacy", "profligate", "profuse"]
    }, {
        "Shameless viciousness. ": ["profligacy", "profligate", "profuse", "progeny"]
    }, {
        "Abandoned to vice. ": ["profligate", "profuse", "progeny", "progression"]
    }, {
        "Produced or displayed in overabundance. ": ["profuse", "progeny", "progression", "prohibition"]
    }, {
        "Offspring. ": ["progeny", "progression", "prohibition", "prohibitionist"]
    }, {
        "A moving forward or proceeding in course. ": ["progression", "prohibition", "prohibitionist", "prohibitory"]
    }, {
        "A decree or an order forbidding something. ": ["prohibition", "prohibitionist", "prohibitory", "projection"]
    }, {
        "One who favors the prohibition by law of the manufacture and sale of alcoholic beverages. ": ["prohibitionist", "prohibitory", "projection", "proletarian"]
    }, {
        "Involving or equivalent to prohibition, especially of the sale of alcoholic beverages. ": ["prohibitory", "projection", "proletarian", "prolific"]
    }, {
        "A prominence. ": ["projection", "proletarian", "prolific", "prolix"]
    }, {
        "A person of the lowest or poorest class. ": ["proletarian", "prolific", "prolix", "prologue"]
    }, {
        "Producing offspring or fruit. ": ["prolific", "prolix", "prologue", "prolong"]
    }, {
        "Verbose. ": ["prolix", "prologue", "prolong", "promenade"]
    }, {
        "A prefatory statement or explanation to a poem, discourse, or performance. ": ["prologue", "prolong", "promenade", "prominence"]
    }, {
        "To extend in time or duration. ": ["prolong", "promenade", "prominence", "prominent"]
    }, {
        "To walk for amusement or exercise. ": ["promenade", "prominence", "prominent", "promiscuous"]
    }, {
        "The quality of being noticeable or distinguished. ": ["prominence", "prominent", "promiscuous", "promissory"]
    }, {
        "Conspicuous in position, character, or importance. ": ["prominent", "promiscuous", "promissory", "promontory"]
    }, {
        "Brought together without order, distinction, or design (for sex). ": ["promiscuous", "promissory", "promontory", "promoter"]
    }, {
        "Expressing an engagement to pay. ": ["promissory", "promontory", "promoter", "promulgate"]
    }, {
        "A high point of land extending outward from the coastline into the sea. ": ["promontory", "promoter", "promulgate", "propaganda"]
    }, {
        "A furtherer, forwarder, or encourager. ": ["promoter", "promulgate", "propaganda", "propagate"]
    }, {
        "To proclaim. ": ["promulgate", "propaganda", "propagate", "propel"]
    }, {
        "Any institution or systematic scheme for propagating a doctrine or system. ": ["propaganda", "propagate", "propel", "propellant"]
    }, {
        "To spread abroad or from person to person. ": ["propagate", "propel", "propellant", "propeller"]
    }, {
        "To drive or urge forward. ": ["propel", "propellant", "propeller", "prophecy"]
    }, {
        "Propelling. ": ["propellant", "propeller", "prophecy", "prophesy"]
    }, {
        "One who or that which propels. ": ["propeller", "prophecy", "prophesy", "propitious"]
    }, {
        "Any prediction or foretelling. ": ["prophecy", "prophesy", "propitious", "proportionate"]
    }, {
        "To predict or foretell, especially under divine inspiration and guidance. ": ["prophesy", "propitious", "proportionate", "propriety"]
    }, {
        "Kindly disposed. ": ["propitious", "proportionate", "propriety", "propulsion"]
    }, {
        "Being in proportion. ": ["proportionate", "propriety", "propulsion", "prosaic"]
    }, {
        "Accordance with recognized usage, custom, or principles. ": ["propriety", "propulsion", "prosaic", "proscenium"]
    }, {
        "A driving onward or forward. ": ["propulsion", "prosaic", "proscenium", "proscribe"]
    }, {
        "Unimaginative. ": ["prosaic", "proscenium", "proscribe", "proscription"]
    }, {
        "That part of the stage between the curtain and the orchestra. ": ["proscenium", "proscribe", "proscription", "proselyte"]
    }, {
        "To reject, as a teaching or a practice, with condemnation or denunciation. ": ["proscribe", "proscription", "proselyte", "prosody"]
    }, {
        "Any act of condemnation and rejection from favor and privilege. ": ["proscription", "proselyte", "prosody", "prospector"]
    }, {
        "One who has been won over from one religious belief to another. ": ["proselyte", "prosody", "prospector", "prospectus"]
    }, {
        "The science of poetical forms. ": ["prosody", "prospector", "prospectus", "prostrate"]
    }, {
        "One who makes exploration, search, or examination, especially for minerals. ": ["prospector", "prospectus", "prostrate", "protagonist"]
    }, {
        "A paper or pamphlet containing information of a proposed undertaking. ": ["prospectus", "prostrate", "protagonist", "protection"]
    }, {
        "Lying prone, or with the head to the ground. ": ["prostrate", "protagonist", "protection", "protective"]
    }, {
        "A leader in any enterprise or contest. ": ["protagonist", "protection", "protective", "protector"]
    }, {
        "Preservation from harm, danger, annoyance, or any other evil. ": ["protection", "protective", "protector", "protege"]
    }, {
        "Sheltering. ": ["protective", "protector", "protege", "Protestant"]
    }, {
        "A defender. ": ["protector", "protege", "Protestant", "protomartyr"]
    }, {
        "One specially cared for and favored by another usually older person. ": ["protege", "Protestant", "protomartyr", "protocol"]
    }, {
        "A Christian who denies the authority of the Pope and holds the right of special judgment. ": ["Protestant", "protomartyr", "protocol", "protoplasm"]
    }, {
        "The earliest victim in any cause. ": ["protomartyr", "protocol", "protoplasm", "prototype"]
    }, {
        "A declaration or memorandum of agreement less solemn and formal than a treaty. ": ["protocol", "protoplasm", "prototype", "protract"]
    }, {
        "The substance that forms the principal portion of an animal or vegetable cell. ": ["protoplasm", "prototype", "protract", "protrude"]
    }, {
        "A work, original in character, afterward imitated in form or spirit. ": ["prototype", "protract", "protrude", "protrusion"]
    }, {
        "To prolong. ": ["protract", "protrude", "protrusion", "protuberance"]
    }, {
        "To push out or thrust forth. ": ["protrude", "protrusion", "protuberance", "protuberant"]
    }, {
        "The act of protruding. ": ["protrusion", "protuberance", "protuberant", "protuberate"]
    }, {
        "Something that swells out from a surrounding surface. ": ["protuberance", "protuberant", "protuberate", "proverb"]
    }, {
        "Bulging. ": ["protuberant", "protuberate", "proverb", "provident"]
    }, {
        "To swell or bulge beyond the surrounding surface. ": ["protuberate", "proverb", "provident", "providential"]
    }, {
        "A brief, pithy saying, condensing in witty or striking form the wisdom of experience. ": ["proverb", "provident", "providential", "provincial"]
    }, {
        "Anticipating and making ready for future wants or emergencies. ": ["provident", "providential", "provincial", "proviso"]
    }, {
        "Effected by divine guidance. ": ["providential", "provincial", "proviso", "provocation"]
    }, {
        "Uncultured in thought and manner. ": ["provincial", "proviso", "provocation", "prowess"]
    }, {
        "A clause in a contract, will, etc., by which its operation is rendered conditional. ": ["proviso", "provocation", "prowess", "proximately"]
    }, {
        "An action or mode of conduct that excites resentment. ": ["provocation", "prowess", "proximately", "proxy"]
    }, {
        "Strength, skill, and intrepidity in battle. ": ["prowess", "proximately", "proxy", "prudence"]
    }, {
        "Immediately. ": ["proximately", "proxy", "prudence", "prudential"]
    }, {
        "A person who is empowered by another to represent him or her in a given matter. ": ["proxy", "prudence", "prudential", "prudery"]
    }, {
        "Caution. ": ["prudence", "prudential", "prudery", "prurient"]
    }, {
        "Proceeding or marked by caution. ": ["prudential", "prudery", "prurient", "pseudapostle"]
    }, {
        "An undue display of modesty or delicacy. ": ["prudery", "prurient", "pseudapostle", "pseudonym"]
    }, {
        "Inclined to lascivious thoughts and desires. ": ["prurient", "pseudapostle", "pseudonym", "pseudonymity"]
    }, {
        "A pretended or false apostle. ": ["pseudapostle", "pseudonym", "pseudonymity", "psychiatry"]
    }, {
        "A fictitious name, especially when assumed by a writer. ": ["pseudonym", "pseudonymity", "psychiatry", "psychic"]
    }, {
        "The state or character of using a fictitious name. ": ["pseudonymity", "psychiatry", "psychic", "psychopathic"]
    }, {
        "The branch of medicine that relates to mental disease. ": ["psychiatry", "psychic", "psychopathic", "psychotherapy"]
    }, {
        "Pertaining to the mind or soul. ": ["psychic", "psychopathic", "psychotherapy", "pudgy"]
    }, {
        "Morally irresponsible. ": ["psychopathic", "psychotherapy", "pudgy", "puerile"]
    }, {
        "The treatment of mental disease. ": ["psychotherapy", "pudgy", "puerile", "pugnacious"]
    }, {
        "Small and fat. ": ["pudgy", "puerile", "pugnacious", "puissant"]
    }, {
        "Childish. ": ["puerile", "pugnacious", "puissant", "pulmonary"]
    }, {
        "Quarrelsome. ": ["pugnacious", "puissant", "pulmonary", "punctilious"]
    }, {
        "Possessing strength. ": ["puissant", "pulmonary", "punctilious", "punctual"]
    }, {
        "Pertaining to the lungs. ": ["pulmonary", "punctilious", "punctual", "pungent"]
    }, {
        "Strictly observant of the rules or forms prescribed by law or custom. ": ["punctilious", "punctual", "pungent", "pungency"]
    }, {
        "Observant and exact in points of time. ": ["punctual", "pungent", "pungency", "punitive"]
    }, {
        "Affecting the sense of smell. ": ["pungent", "pungency", "punitive", "pupilage"]
    }, {
        "The quality of affecting the sense of smell. ": ["pungency", "punitive", "pupilage", "purgatory"]
    }, {
        "Pertaining to punishment. ": ["punitive", "pupilage", "purgatory", "purl"]
    }, {
        "The state or period of being a student. ": ["pupilage", "purgatory", "purl", "purloin"]
    }, {
        "An intermediate state where souls are made fit for paradise or heaven by expiatory suffering. ": ["purgatory", "purl", "purloin", "purport"]
    }, {
        "To cause to whirl, as in an eddy. ": ["purl", "purloin", "purport", "purveyor"]
    }, {
        "To steal. ": ["purloin", "purport", "purveyor", "pusillanimous"]
    }, {
        "Intent. ": ["purport", "purveyor", "pusillanimous", "putrescent"]
    }, {
        "one who supplies ": ["purveyor", "pusillanimous", "putrescent", "pyre"]
    }, {
        "Without spirit or bravery. ": ["pusillanimous", "putrescent", "pyre", "pyromania"]
    }, {
        "Undergoing decomposition of animal or vegetable matter accompanied by fetid odors. ": ["putrescent", "pyre", "pyromania", "pyrotechnic"]
    }, {
        "A heap of combustibles arranged for burning a dead body. ": ["pyre", "pyromania", "pyrotechnic", "pyx"]
    }, {
        "An insane propensity to set things on fire. ": ["pyromania", "pyrotechnic", "pyx", "quackery"]
    }, {
        "Pertaining to fireworks or their manufacture. ": ["pyrotechnic", "pyx", "quackery", "quadrate"]
    }, {
        "A vessel or casket, usually of precious metal, in which the host is preserved. ": ["pyx", "quackery", "quadrate", "quadruple"]
    }, {
        "Charlatanry ": ["quackery", "quadrate", "quadruple", "qualification"]
    }, {
        "To divide into quarters. ": ["quadrate", "quadruple", "qualification", "qualify"]
    }, {
        "To multiply by four. ": ["quadruple", "qualification", "qualify", "qualm"]
    }, {
        "A requisite for an employment, position, right, or privilege. ": ["qualification", "qualify", "qualm", "quandary"]
    }, {
        "To endow or furnish with requisite ability, character, knowledge, skill, or possessions. ": ["qualify", "qualm", "quandary", "quantity"]
    }, {
        "A fit of nausea. ": ["qualm", "quandary", "quantity", "quarantine"]
    }, {
        "A puzzling predicament. ": ["quandary", "quantity", "quarantine", "quarrelsome"]
    }, {
        "Magnitude. ": ["quantity", "quarantine", "quarrelsome", "quarter"]
    }, {
        "The enforced isolation of any person or place infected with contagious disease. ": ["quarantine", "quarrelsome", "quarter", "quarterly"]
    }, {
        "Irascible. ": ["quarrelsome", "quarter", "quarterly", "quartet"]
    }, {
        "One of four equal parts into which anything is or may be divided. ": ["quarter", "quarterly", "quartet", "quarto"]
    }, {
        "Occurring or made at intervals of three months. ": ["quarterly", "quartet", "quarto", "quay"]
    }, {
        "A composition for four voices or four instruments. ": ["quartet", "quarto", "quay", "querulous"]
    }, {
        "An eight-page newspaper of any size. ": ["quarto", "quay", "querulous", "query"]
    }, {
        "A wharf or artificial landing-place on the shore of a harbor or projecting into it. ": ["quay", "querulous", "query", "queue"]
    }, {
        "Habitually complaining. ": ["querulous", "query", "queue", "quibble"]
    }, {
        "To make inquiry. ": ["query", "queue", "quibble", "quiescence"]
    }, {
        "A file of persons waiting in order of their arrival, as for admittance. ": ["queue", "quibble", "quiescence", "quiescent"]
    }, {
        "An utterly trivial distinction or objection. ": ["quibble", "quiescence", "quiescent", "quiet"]
    }, {
        "Quiet. ": ["quiescence", "quiescent", "quiet", "quietus"]
    }, {
        "Being in a state of repose or inaction. ": ["quiescent", "quiet", "quietus", "quintessence"]
    }, {
        "Making no noise. ": ["quiet", "quietus", "quintessence", "quintet"]
    }, {
        "A silencing, suppressing, or ending. ": ["quietus", "quintessence", "quintet", "quite"]
    }, {
        "The most essential part of anything. ": ["quintessence", "quintet", "quite", "Quixotic"]
    }, {
        "Musical composition arranged for five voices or instruments. ": ["quintet", "quite", "Quixotic", "rabid"]
    }, {
        "Fully. ": ["quite", "Quixotic", "rabid", "racy"]
    }, {
        "Chivalrous or romantic to a ridiculous or extravagant degree. ": ["Quixotic", "rabid", "racy", "radiance"]
    }, {
        "Affected with rabies or hydrophobia. ": ["rabid", "racy", "radiance", "radiate"]
    }, {
        "Exciting or exhilarating to the mind. ": ["racy", "radiance", "radiate", "radical"]
    }, {
        "Brilliant or sparkling luster. ": ["radiance", "radiate", "radical", "radix"]
    }, {
        "To extend in all directions, as from a source or focus. ": ["radiate", "radical", "radix", "raillery"]
    }, {
        "One who holds extreme views or advocates extreme measures. ": ["radical", "radix", "raillery", "ramify"]
    }, {
        "That from or on which something is developed. ": ["radix", "raillery", "ramify", "ramose"]
    }, {
        "Good-humored satire. ": ["raillery", "ramify", "ramose", "rampant"]
    }, {
        "To divide or subdivide into branches or subdivisions. ": ["ramify", "ramose", "rampant", "rampart"]
    }, {
        "Branch-like. ": ["ramose", "rampant", "rampart", "rancor"]
    }, {
        "Growing, climbing, or running without check or restraint. ": ["rampant", "rampart", "rancor", "rankle"]
    }, {
        "A bulwark or construction to oppose assault or hostile entry. ": ["rampart", "rancor", "rankle", "rapacious"]
    }, {
        "Malice. ": ["rancor", "rankle", "rapacious", "rapid"]
    }, {
        "To produce irritation or festering. ": ["rankle", "rapacious", "rapid", "rapine"]
    }, {
        "Disposed to seize by violence or by unlawful or greedy methods. ": ["rapacious", "rapid", "rapine", "rapt"]
    }, {
        "Having great speed. ": ["rapid", "rapine", "rapt", "raptorial"]
    }, {
        "The act of seizing and carrying off property by superior force, as in war. ": ["rapine", "rapt", "raptorial", "ration"]
    }, {
        "Enraptured. ": ["rapt", "raptorial", "ration", "rationalism"]
    }, {
        "Seizing and devouring living prey. ": ["raptorial", "ration", "rationalism", "raucous"]
    }, {
        "To provide with a fixed allowance or portion, especially of food. ": ["ration", "rationalism", "raucous", "ravage"]
    }, {
        "The formation of opinions by relying upon reason alone, independently of authority. ": ["rationalism", "raucous", "ravage", "ravenous"]
    }, {
        "Harsh. ": ["raucous", "ravage", "ravenous", "ravine"]
    }, {
        "To lay waste by pillage, rapine, devouring, or other destructive methods. ": ["ravage", "ravenous", "ravine", "reaction"]
    }, {
        "Furiously voracious or hungry. ": ["ravenous", "ravine", "reaction", "reactionary"]
    }, {
        "A deep gorge or hollow, especially one worn by a stream or flow of water. ": ["ravine", "reaction", "reactionary", "readily"]
    }, {
        "Tendency towards a former, or opposite state of things, as after reform, revolution, or inflation.": ["reaction", "reactionary", "readily", "readjust"]
    }, {
        "Pertaining to, of the nature of, causing, or favoring reaction. ": ["reactionary", "readily", "readjust", "ready"]
    }, {
        "Without objection or reluctance. ": ["readily", "readjust", "ready", "realism"]
    }, {
        "To put in order after disarrangement. ": ["readjust", "ready", "realism", "rearrange"]
    }, {
        "In a state of preparedness for any given purpose or occasion. ": ["ready", "realism", "rearrange", "reassure"]
    }, {
        "The principle and practice of depicting persons and scenes as they are believed really to exist. ": ["realism", "rearrange", "reassure", "rebellious"]
    }, {
        "To arrange again or in a different order. ": ["rearrange", "reassure", "rebellious", "rebuff"]
    }, {
        "To give new confidence. ": ["reassure", "rebellious", "rebuff", "rebuild"]
    }, {
        "Insubordinate. ": ["rebellious", "rebuff", "rebuild", "rebut"]
    }, {
        "A peremptory or unexpected rejection of advances or approaches. ": ["rebuff", "rebuild", "rebut", "recant"]
    }, {
        "To build again or anew. ": ["rebuild", "rebut", "recant", "recapitulate"]
    }, {
        "To oppose by argument or a sufficient answer. ": ["rebut", "recant", "recapitulate", "recapture"]
    }, {
        "To withdraw formally one's belief (in something previously believed or maintained). ": ["recant", "recapitulate", "recapture", "recede"]
    }, {
        "To repeat again the principal points of. ": ["recapitulate", "recapture", "recede", "receivable"]
    }, {
        "To capture again. ": ["recapture", "recede", "receivable", "receptive"]
    }, {
        "To move back or away. ": ["recede", "receivable", "receptive", "recessive"]
    }, {
        "Capable of being or fit to be received - often money. ": ["receivable", "receptive", "recessive", "recidivist"]
    }, {
        "Having the capacity, quality, or ability of receiving, as truths or impressions. ": ["receptive", "recessive", "recidivist", "reciprocal"]
    }, {
        "Having a tendency to go back. ": ["recessive", "recidivist", "reciprocal", "reciprocate"]
    }, {
        "A confirmed criminal. ": ["recidivist", "reciprocal", "reciprocate", "reciprocity"]
    }, {
        "Mutually interchangeable or convertible. ": ["reciprocal", "reciprocate", "reciprocity", "recitation"]
    }, {
        "To give and take mutually. ": ["reciprocate", "reciprocity", "recitation", "reck"]
    }, {
        "Equal mutual rights and benefits granted and enjoyed. ": ["reciprocity", "recitation", "reck", "reckless"]
    }, {
        "The act of reciting or repeating, especially in public and from memory. ": ["recitation", "reck", "reckless", "reclaim"]
    }, {
        "To have a care or thought for. ": ["reck", "reckless", "reclaim", "recline"]
    }, {
        "Foolishly headless of danger. ": ["reckless", "reclaim", "recline", "recluse"]
    }, {
        "To demand or to obtain the return or restoration of. ": ["reclaim", "recline", "recluse", "reclusory"]
    }, {
        "To cause to assume a leaning or recumbent attitude or position. ": ["recline", "recluse", "reclusory", "recognizance"]
    }, {
        "One who lives in retirement or seclusion. ": ["recluse", "reclusory", "recognizance", "recognize"]
    }, {
        "A hermitage. ": ["reclusory", "recognizance", "recognize", "recoil"]
    }, {
        "An acknowledgment entered into before a court with condition to do some particular act. ": ["recognizance", "recognize", "recoil", "recollect"]
    }, {
        "To recall the identity of (a person or thing). ": ["recognize", "recoil", "recollect", "reconcilable"]
    }, {
        "To start back as in dismay, loathing, or dread. ": ["recoil", "recollect", "reconcilable", "reconnoiter"]
    }, {
        "To recall the knowledge of. ": ["recollect", "reconcilable", "reconnoiter", "reconsider"]
    }, {
        "Capable of being adjusted or harmonized. ": ["reconcilable", "reconnoiter", "reconsider", "reconstruct"]
    }, {
        "To make a preliminary examination of for military, surveying, or geological purposes. ": ["reconnoiter", "reconsider", "reconstruct", "recourse"]
    }, {
        "To review with care, especially with a view to a reversal of previous action. ": ["reconsider", "reconstruct", "recourse", "recover"]
    }, {
        "To rebuild. ": ["reconstruct", "recourse", "recover", "recreant"]
    }, {
        "Resort to or application for help in exigency or trouble. ": ["recourse", "recover", "recreant", "recreate"]
    }, {
        "To regain. ": ["recover", "recreant", "recreate", "recrudescence"]
    }, {
        "A cowardly or faithless person. ": ["recreant", "recreate", "recrudescence", "recrudescent"]
    }, {
        "To refresh after labor. ": ["recreate", "recrudescence", "recrudescent", "recruit"]
    }, {
        "The state of becoming raw or sore again. ": ["recrudescence", "recrudescent", "recruit", "rectify"]
    }, {
        "Becoming raw or sore again. ": ["recrudescent", "recruit", "rectify", "rectitude"]
    }, {
        "To enlist men for military or naval service. ": ["recruit", "rectify", "rectitude", "recuperate"]
    }, {
        "To correct. ": ["rectify", "rectitude", "recuperate", "recur"]
    }, {
        "The quality of being upright in principles and conduct. ": ["rectitude", "recuperate", "recur", "recure"]
    }, {
        "To recover. ": ["recuperate", "recur", "recure", "recurrent"]
    }, {
        "To happen again or repeatedly, especially at regular intervals. ": ["recur", "recure", "recurrent", "redemption"]
    }, {
        "To cure again. ": ["recure", "recurrent", "redemption", "redolent"]
    }, {
        "Returning from time to time, especially at regular or stated intervals. ": ["recurrent", "redemption", "redolent", "redolence"]
    }, {
        "The recovery of what is mortgaged or pledged, by paying the debt. ": ["redemption", "redolent", "redolence", "redoubtable"]
    }, {
        "Smelling sweet and agreeable. ": ["redolent", "redolence", "redoubtable", "redound"]
    }, {
        "Smelling sweet and agreeable. ": ["redolence", "redoubtable", "redound", "redress"]
    }, {
        "Formidable. ": ["redoubtable", "redound", "redress", "reducible"]
    }, {
        "Rebound. ": ["redound", "redress", "reducible", "redundance"]
    }, {
        "To set right, as a wrong by compensation or the punishment of the wrong-doer. ": ["redress", "reducible", "redundance", "redundant"]
    }, {
        "That may be reduced. ": ["reducible", "redundance", "redundant", "reestablish"]
    }, {
        "Excess. ": ["redundance", "redundant", "reestablish", "refer"]
    }, {
        "Constituting an excess. ": ["redundant", "reestablish", "refer", "referrer"]
    }, {
        "To restore. ": ["reestablish", "refer", "referrer", "referable"]
    }, {
        "To direct or send for information or other purpose. ": ["refer", "referrer", "referable", "referee"]
    }, {
        "One who refers. ": ["referrer", "referable", "referee", "refinery"]
    }, {
        "Ascribable. ": ["referable", "referee", "refinery", "reflectible"]
    }, {
        "An umpire. ": ["referee", "refinery", "reflectible", "reflection"]
    }, {
        "A place where some crude material, as sugar or petroleum, is purified. ": ["refinery", "reflectible", "reflection", "reflector"]
    }, {
        "Capable of being turned back. ": ["reflectible", "reflection", "reflector", "reflexible"]
    }, {
        "The throwing off or back of light, heat, sound, or any form of energy that travels in waves. ": ["reflection", "reflector", "reflexible", "reform"]
    }, {
        "A mirror, as of metal, for reflecting light, heat, or sound in a particular direction. ": ["reflector", "reflexible", "reform", "reformer"]
    }, {
        "Capable of being reflected. ": ["reflexible", "reform", "reformer", "refract"]
    }, {
        "Change for the better. ": ["reform", "reformer", "refract", "refractory"]
    }, {
        "One who carries out a reform. ": ["reformer", "refract", "refractory", "refragable"]
    }, {
        "To bend or turn from a direct course. ": ["refract", "refractory", "refragable", "refringency"]
    }, {
        "Not amenable to control. ": ["refractory", "refragable", "refringency", "refringent"]
    }, {
        "Capable of being refuted. ": ["refragable", "refringency", "refringent", "refusal"]
    }, {
        "Power to refract. ": ["refringency", "refringent", "refusal", "refute"]
    }, {
        "Having the power to refract. ": ["refringent", "refusal", "refute", "regale"]
    }, {
        "Denial of what is asked. ": ["refusal", "refute", "regale", "regalia"]
    }, {
        "To prove to be wrong. ": ["refute", "regale", "regalia", "regality"]
    }, {
        "To give unusual pleasure. ": ["regale", "regalia", "regality", "regenerate"]
    }, {
        "pl. The emblems of royalty. ": ["regalia", "regality", "regenerate", "regent"]
    }, {
        "Royalty. ": ["regality", "regenerate", "regent", "regicide"]
    }, {
        "To reproduce. ": ["regenerate", "regent", "regicide", "regime"]
    }, {
        "One who is lawfully deputized to administer the government for the time being in the name of the ruler.": ["regent", "regicide", "regime", "regimen"]
    }, {
        "The killing of a king or sovereign. ": ["regicide", "regime", "regimen", "regiment"]
    }, {
        "Particular conduct or administration of affairs. ": ["regime", "regimen", "regiment", "regnant"]
    }, {
        "A systematized order or course of living with reference to food, clothing and personal habits. ": ["regimen", "regiment", "regnant", "regress"]
    }, {
        "A body of soldiers. ": ["regiment", "regnant", "regress", "regretful"]
    }, {
        "Exercising royal authority in one's own right. ": ["regnant", "regress", "regretful", "rehabilitate"]
    }, {
        "To return to a former place or condition. ": ["regress", "regretful", "rehabilitate", "reign"]
    }, {
        "Feeling, expressive of, or full of regret. ": ["regretful", "rehabilitate", "reign", "reimburse"]
    }, {
        "To restore to a former status, capacity, right rank, or privilege. ": ["rehabilitate", "reign", "reimburse", "rein"]
    }, {
        "To hold and exercise sovereign power. ": ["reign", "reimburse", "rein", "reinstate"]
    }, {
        "To pay back as an equivalent of what has been expended. ": ["reimburse", "rein", "reinstate", "reiterate"]
    }, {
        "A step attached to the bit for controlling a horse or other draft-animal. ": ["rein", "reinstate", "reiterate", "rejoin"]
    }, {
        "To restore to a former state, station, or authority. ": ["reinstate", "reiterate", "rejoin", "rejuvenate"]
    }, {
        "To say or do again and again. ": ["reiterate", "rejoin", "rejuvenate", "rejuvenescence"]
    }, {
        "To reunite after separation. ": ["rejoin", "rejuvenate", "rejuvenescence", "relapse"]
    }, {
        "To restore to youth. ": ["rejuvenate", "rejuvenescence", "relapse", "relegate"]
    }, {
        "A renewal of youth. ": ["rejuvenescence", "relapse", "relegate", "relent"]
    }, {
        "To suffer a return of a disease after partial recovery. ": ["relapse", "relegate", "relent", "relevant"]
    }, {
        "To send off or consign, as to an obscure position or remote destination. ": ["relegate", "relent", "relevant", "reliance"]
    }, {
        "To yield. ": ["relent", "relevant", "reliance", "reliant"]
    }, {
        "Bearing upon the matter in hand. ": ["relevant", "reliance", "reliant", "relinquish"]
    }, {
        "Dependence. ": ["reliance", "reliant", "relinquish", "reliquary"]
    }, {
        "Having confidence. ": ["reliant", "relinquish", "reliquary", "relish"]
    }, {
        "To give up using or having. ": ["relinquish", "reliquary", "relish", "reluctance"]
    }, {
        "A casket, coffer, or repository in which relics are kept. ": ["reliquary", "relish", "reluctance", "reluctant"]
    }, {
        "To like the taste or savor of. ": ["relish", "reluctance", "reluctant", "remembrance"]
    }, {
        "Unwillingness. ": ["reluctance", "reluctant", "remembrance", "reminiscence"]
    }, {
        "Unwilling. ": ["reluctant", "remembrance", "reminiscence", "reminiscent"]
    }, {
        "Recollection. ": ["remembrance", "reminiscence", "reminiscent", "remiss"]
    }, {
        "The calling to mind of incidents within the range of personal knowledge or experience. ": ["reminiscence", "reminiscent", "remiss", "remission"]
    }, {
        "Pertaining to the recollection of matters of personal interest. ": ["reminiscent", "remiss", "remission", "remodel"]
    }, {
        "Negligent. ": ["remiss", "remission", "remodel", "remonstrance"]
    }, {
        "Temporary diminution of a disease. ": ["remission", "remodel", "remonstrance", "remonstrant"]
    }, {
        "Reconstruct. ": ["remodel", "remonstrance", "remonstrant", "remonstrate"]
    }, {
        "Reproof. ": ["remonstrance", "remonstrant", "remonstrate", "remunerate"]
    }, {
        "Having the character of a reproof. ": ["remonstrant", "remonstrate", "remunerate", "remuneration"]
    }, {
        "To present a verbal or written protest to those who have power to right or prevent a wrong. ": ["remonstrate", "remunerate", "remuneration", "Renaissance"]
    }, {
        "To pay or pay for. ": ["remunerate", "remuneration", "Renaissance", "rendezvous"]
    }, {
        "Compensation. ": ["remuneration", "Renaissance", "rendezvous", "rendition"]
    }, {
        "The revival of letters, and then of art, which marks the transition from medieval to modern time.": ["Renaissance", "rendezvous", "rendition", "renovate"]
    }, {
        "A prearranged place of meeting. ": ["rendezvous", "rendition", "renovate", "renunciation"]
    }, {
        "Interpretation. ": ["rendition", "renovate", "renunciation", "reorganize"]
    }, {
        "To restore after deterioration, as a building. ": ["renovate", "renunciation", "reorganize", "reparable"]
    }, {
        "An explicit disclaimer of a right or privilege. ": ["renunciation", "reorganize", "reparable", "reparation"]
    }, {
        "To change to a more satisfactory form of organization. ": ["reorganize", "reparable", "reparation", "repartee"]
    }, {
        "Capable of repair. ": ["reparable", "reparation", "repartee", "repeal"]
    }, {
        "The act of making amends, as for an injury, loss, or wrong. ": ["reparation", "repartee", "repeal", "repel"]
    }, {
        "A ready, witty, or apt reply. ": ["repartee", "repeal", "repel", "repellent"]
    }, {
        "To render of no further effect. ": ["repeal", "repel", "repellent", "repentance"]
    }, {
        "To force or keep back in a manner, physically or mentally. ": ["repel", "repellent", "repentance", "repertory"]
    }, {
        "Having power to force back in a manner, physically or mentally. ": ["repellent", "repentance", "repertory", "repetition"]
    }, {
        "Sorrow for something done or left undone, with desire to make things right by undoing the wrong. ": ["repentance", "repertory", "repetition", "repine"]
    }, {
        "A place where things are stored or gathered together. ": ["repertory", "repetition", "repine", "replenish"]
    }, {
        "The act of repeating. ": ["repetition", "repine", "replenish", "replete"]
    }, {
        "To indulge in fretfulness and faultfinding. ": ["repine", "replenish", "replete", "replica"]
    }, {
        "To fill again, as something that has been emptied. ": ["replenish", "replete", "replica", "repository"]
    }, {
        "Full to the uttermost. ": ["replete", "replica", "repository", "reprehend"]
    }, {
        "A duplicate executed by the artist himself, and regarded, equally with the first, as an original. ": ["replica", "repository", "reprehend", "reprehensible"]
    }, {
        "A place in which goods are stored. ": ["repository", "reprehend", "reprehensible", "reprehension"]
    }, {
        "To find fault with. ": ["reprehend", "reprehensible", "reprehension", "repress"]
    }, {
        "Censurable. ": ["reprehensible", "reprehension", "repress", "repressible"]
    }, {
        "Expression of blame. ": ["reprehension", "repress", "repressible", "reprieve"]
    }, {
        "To keep under restraint or control. ": ["repress", "repressible", "reprieve", "reprimand"]
    }, {
        "Able to be kept under restraint or control. ": ["repressible", "reprieve", "reprimand", "reprisal"]
    }, {
        "To grant a respite from punishment to. ": ["reprieve", "reprimand", "reprisal", "reprobate"]
    }, {
        "To chide or rebuke for a fault. ": ["reprimand", "reprisal", "reprobate", "reproduce"]
    }, {
        "Any infliction or act by way of retaliation on an enemy. ": ["reprisal", "reprobate", "reproduce", "reproduction"]
    }, {
        "One abandoned to depravity and sin. ": ["reprobate", "reproduce", "reproduction", "reproof"]
    }, {
        "To make a copy of. ": ["reproduce", "reproduction", "reproof", "repudiate"]
    }, {
        "The process by which an animal or plant gives rise to another of its kind. ": ["reproduction", "reproof", "repudiate", "repugnance"]
    }, {
        "An expression of disapproval or blame personally addressed to one censured. ": ["reproof", "repudiate", "repugnance", "repugnant"]
    }, {
        "To refuse to have anything to do with. ": ["repudiate", "repugnance", "repugnant", "repulse"]
    }, {
        "Thorough dislike. ": ["repugnance", "repugnant", "repulse", "repulsive"]
    }, {
        "Offensive to taste and feeling. ": ["repugnant", "repulse", "repulsive", "repute"]
    }, {
        "The act of beating or driving back, as an attacking or advancing enemy. ": ["repulse", "repulsive", "repute", "requiem"]
    }, {
        "Grossly offensive. ": ["repulsive", "repute", "requiem", "requisite"]
    }, {
        "To hold in general opinion. ": ["repute", "requiem", "requisite", "requital"]
    }, {
        "A solemn mass sung for the repose of the souls of the dead. ": ["requiem", "requisite", "requital", "requite"]
    }, {
        "Necessary. ": ["requisite", "requital", "requite", "rescind"]
    }, {
        "Adequate return for good or ill. ": ["requital", "requite", "rescind", "reseat"]
    }, {
        "To repay either good or evil to, as to a person. ": ["requite", "rescind", "reseat", "resemblance"]
    }, {
        "To make void, as an act, by the enacting authority or a superior authority. ": ["rescind", "reseat", "resemblance", "resent"]
    }, {
        "To place in position of office again. ": ["reseat", "resemblance", "resent", "reservoir"]
    }, {
        "Similarity in quality or form. ": ["resemblance", "resent", "reservoir", "residue"]
    }, {
        "To be indignant at, as an injury or insult. ": ["resent", "reservoir", "residue", "resilience"]
    }, {
        "A receptacle where a quantity of some material, especially of a liquid or gas, may be kept. ": ["reservoir", "residue", "resilience", "resilient"]
    }, {
        "A remainder or surplus after a part has been separated or otherwise treated. ": ["residue", "resilience", "resilient", "resistance"]
    }, {
        "The power of springing back to a former position ": ["resilience", "resilient", "resistance", "resistant"]
    }, {
        "Having the quality of springing back to a former position. ": ["resilient", "resistance", "resistant", "resistive"]
    }, {
        "The exertion of opposite effort or effect. ": ["resistance", "resistant", "resistive", "resistless"]
    }, {
        "Offering or tending to produce resistance. ": ["resistant", "resistive", "resistless", "resonance"]
    }, {
        "Having or exercising the power of resistance. ": ["resistive", "resistless", "resonance", "resonance"]
    }, {
        "Powerless. ": ["resistless", "resonance", "resonance", "resonate"]
    }, {
        "The quality of being able to reinforce sound by sympathetic vibrations. ": ["resonance", "resonance", "resonate", "resource"]
    }, {
        "Able to reinforce sound by sympathetic vibrations. ": ["resonance", "resonate", "resource", "respite"]
    }, {
        "To have or produce resonance. ": ["resonate", "resource", "respite", "resplendent"]
    }, {
        "That which is restored to, relied upon, or made available for aid or support. ": ["resource", "respite", "resplendent", "respondent"]
    }, {
        "Interval of rest. ": ["respite", "resplendent", "respondent", "restitution"]
    }, {
        "Very bright. ": ["resplendent", "respondent", "restitution", "resumption"]
    }, {
        "Answering. ": ["respondent", "restitution", "resumption", "resurgent"]
    }, {
        "Restoration of anything to the one to whom it properly belongs. ": ["restitution", "resumption", "resurgent", "resurrection"]
    }, {
        "The act of taking back, or taking again. ": ["resumption", "resurgent", "resurrection", "resuscitate"]
    }, {
        "Surging back or again. ": ["resurgent", "resurrection", "resuscitate", "retaliate"]
    }, {
        "A return from death to life ": ["resurrection", "resuscitate", "retaliate", "retch"]
    }, {
        "To restore from apparent death. ": ["resuscitate", "retaliate", "retch", "retention"]
    }, {
        "To repay evil with a similar evil. ": ["retaliate", "retch", "retention", "reticence"]
    }, {
        "To make an effort to vomit. ": ["retch", "retention", "reticence", "reticent"]
    }, {
        "The keeping of a thing within one's power or possession. ": ["retention", "reticence", "reticent", "retinue"]
    }, {
        "The quality of habitually keeping silent or being reserved in utterance. ": ["reticence", "reticent", "retinue", "retort"]
    }, {
        "Habitually keeping silent or being reserved in utterance. ": ["reticent", "retinue", "retort", "retouch"]
    }, {
        "The body of persons who attend a person of importance in travel or public appearance. ": ["retinue", "retort", "retouch", "retrace"]
    }, {
        "A retaliatory speech. ": ["retort", "retouch", "retrace", "retract"]
    }, {
        "To modify the details of. ": ["retouch", "retrace", "retract", "retrench"]
    }, {
        "To follow backward or toward the place of beginning, as a track or marking. ": ["retrace", "retract", "retrench", "retrieve"]
    }, {
        "To recall or take back (something that one has said). ": ["retract", "retrench", "retrieve", "retroactive"]
    }, {
        "To cut down or reduce in extent or quantity. ": ["retrench", "retrieve", "retroactive", "retrograde"]
    }, {
        "To recover something by searching. ": ["retrieve", "retroactive", "retrograde", "retrogression"]
    }, {
        "Operative on, affecting, or having reference to past events, transactions, responsibilities. ": ["retroactive", "retrograde", "retrogression", "retrospect"]
    }, {
        "To cause to deteriorate or to move backward. ": ["retrograde", "retrogression", "retrospect", "retrospective"]
    }, {
        "A going or moving backward or in a reverse direction. ": ["retrogression", "retrospect", "retrospective", "reunite"]
    }, {
        "A view or contemplation of something past. ": ["retrospect", "retrospective", "reunite", "revelation"]
    }, {
        "Looking back on the past. ": ["retrospective", "reunite", "revelation", "revere"]
    }, {
        "To unite or join again, as after separation. ": ["reunite", "revelation", "revere", "reverent"]
    }, {
        "A disclosing, discovering, or making known of what was before secret, private, or unknown. ": ["revelation", "revere", "reverent", "reversion"]
    }, {
        "To regard with worshipful veneration. ": ["revere", "reverent", "reversion", "revert"]
    }, {
        "Humble. ": ["reverent", "reversion", "revert", "revile"]
    }, {
        "A return to or toward some former state or condition. ": ["reversion", "revert", "revile", "revisal"]
    }, {
        "To return, or turn or look back, as toward a former position or the like. ": ["revert", "revile", "revisal", "revise"]
    }, {
        "To heap approach or abuse upon. ": ["revile", "revisal", "revise", "revocation"]
    }, {
        "Revision. ": ["revisal", "revise", "revocation", "revoke"]
    }, {
        "To examine for the correction of errors, or for the purpose of making changes. ": ["revise", "revocation", "revoke", "rhapsody"]
    }, {
        "Repeal. ": ["revocation", "revoke", "rhapsody", "rhetoric"]
    }, {
        "To rescind. ": ["revoke", "rhapsody", "rhetoric", "rhetorician"]
    }, {
        "Rapt or rapturous utterance. ": ["rhapsody", "rhetoric", "rhetorician", "ribald"]
    }, {
        "The art of discourse. ": ["rhetoric", "rhetorician", "ribald", "riddance"]
    }, {
        "A showy writer or speaker. ": ["rhetorician", "ribald", "riddance", "ridicule"]
    }, {
        "Indulging in or manifesting coarse indecency or obscenity. ": ["ribald", "riddance", "ridicule", "ridiculous"]
    }, {
        "The act or ridding or delivering from something undesirable. ": ["riddance", "ridicule", "ridiculous", "rife"]
    }, {
        "Looks or acts expressing amused contempt. ": ["ridicule", "ridiculous", "rife", "righteousness"]
    }, {
        "Laughable and contemptible. ": ["ridiculous", "rife", "righteousness", "rightful"]
    }, {
        "Abundant. ": ["rife", "righteousness", "rightful", "rigmarole"]
    }, {
        "Rectitude. ": ["righteousness", "rightful", "rigmarole", "rigor"]
    }, {
        "Conformed to a just claim according to established laws or usage. ": ["rightful", "rigmarole", "rigor", "rigorous"]
    }, {
        "Nonsense. ": ["rigmarole", "rigor", "rigorous", "ripplet"]
    }, {
        "Inflexibility. ": ["rigor", "rigorous", "ripplet", "risible"]
    }, {
        "Uncompromising. ": ["rigorous", "ripplet", "risible", "rivulet"]
    }, {
        "A small ripple, as of water. ": ["ripplet", "risible", "rivulet", "robust"]
    }, {
        "capable of exciting laughter. ": ["risible", "rivulet", "robust", "rondo"]
    }, {
        "A small stream or brook. ": ["rivulet", "robust", "rondo", "rookery"]
    }, {
        "Characterized by great strength or power of endurance. ": ["robust", "rondo", "rookery", "rotary"]
    }, {
        "A musical composition during which the first part or subject is repeated several times. ": ["rondo", "rookery", "rotary", "rotate"]
    }, {
        "A place where crows congregate to breed. ": ["rookery", "rotary", "rotate", "rote"]
    }, {
        "Turning around its axis, like a wheel, or so constructed as to turn thus. ": ["rotary", "rotate", "rote", "rotund"]
    }, {
        "To cause to turn on or as on its axis, as a wheel. ": ["rotate", "rote", "rotund", "rudimentary"]
    }, {
        "Repetition of words or sounds as a means of learning them, with slight attention. ": ["rote", "rotund", "rudimentary", "rue"]
    }, {
        "Round from fullness or plumpness. ": ["rotund", "rudimentary", "rue", "ruffian"]
    }, {
        "Being in an initial, early, or incomplete stage of development. ": ["rudimentary", "rue", "ruffian", "ruminant"]
    }, {
        "To regret extremely. ": ["rue", "ruffian", "ruminant", "ruminate"]
    }, {
        "A lawless or recklessly brutal fellow. ": ["ruffian", "ruminant", "ruminate", "rupture"]
    }, {
        "Chewing the cud. ": ["ruminant", "ruminate", "rupture", "rustic"]
    }, {
        "To chew over again, as food previously swallowed and regurgitated. ": ["ruminate", "rupture", "rustic", "ruth"]
    }, {
        "To separate the parts of by violence. ": ["rupture", "rustic", "ruth", "sacrifice"]
    }, {
        "Characteristic of dwelling in the country. ": ["rustic", "ruth", "sacrifice", "sacrificial"]
    }, {
        "Sorrow for another's misery. ": ["ruth", "sacrifice", "sacrificial", "sacrilege"]
    }, {
        "To make an offering of to deity, especially by presenting on an altar. ": ["sacrifice", "sacrificial", "sacrilege", "sacrilegious"]
    }, {
        "Offering or offered as an atonement for sin. ": ["sacrificial", "sacrilege", "sacrilegious", "safeguard"]
    }, {
        "The act of violating or profaning anything sacred. ": ["sacrilege", "sacrilegious", "safeguard", "sagacious"]
    }, {
        "Impious. ": ["sacrilegious", "safeguard", "sagacious", "salacious"]
    }, {
        "To protect. ": ["safeguard", "sagacious", "salacious", "salience"]
    }, {
        "Able to discern and distinguish with wise perception. ": ["sagacious", "salacious", "salience", "salient"]
    }, {
        "Having strong sexual desires. ": ["salacious", "salience", "salient", "saline"]
    }, {
        "The condition of standing out distinctly. ": ["salience", "salient", "saline", "salutary"]
    }, {
        "Standing out prominently. ": ["salient", "saline", "salutary", "salutation"]
    }, {
        "Constituting or consisting of salt. ": ["saline", "salutary", "salutation", "salutatory"]
    }, {
        "Beneficial. ": ["salutary", "salutation", "salutatory", "salvage"]
    }, {
        "Any form of greeting, hailing, or welcome, whether by word or act. ": ["salutation", "salutatory", "salvage", "salvo"]
    }, {
        "The opening oration at the commencement in American colleges. ": ["salutatory", "salvage", "salvo", "sanctimonious"]
    }, {
        "Any act of saving property. ": ["salvage", "salvo", "sanctimonious", "sanction"]
    }, {
        "A salute given by firing all the guns, as at the funeral of an officer. ": ["salvo", "sanctimonious", "sanction", "sanctity"]
    }, {
        "Making an ostentatious display or hypocritical pretense of holiness or piety. ": ["sanctimonious", "sanction", "sanctity", "sanguinary"]
    }, {
        "To approve authoritatively. ": ["sanction", "sanctity", "sanguinary", "sanguine"]
    }, {
        "Holiness. ": ["sanctity", "sanguinary", "sanguine", "sanguineous"]
    }, {
        "Bloody. ": ["sanguinary", "sanguine", "sanguineous", "sapid"]
    }, {
        "Having the color of blood. ": ["sanguine", "sanguineous", "sapid", "sapience"]
    }, {
        "Consisting of blood. ": ["sanguineous", "sapid", "sapience", "sapient"]
    }, {
        "Affecting the sense of taste. ": ["sapid", "sapience", "sapient", "sapiential"]
    }, {
        "Deep wisdom or knowledge. ": ["sapience", "sapient", "sapiential", "saponaceous"]
    }, {
        "Possessing wisdom. ": ["sapient", "sapiential", "saponaceous", "sarcasm"]
    }, {
        "Possessing wisdom. ": ["sapiential", "saponaceous", "sarcasm", "sarcophagus"]
    }, {
        "Having the nature or quality of soap. ": ["saponaceous", "sarcasm", "sarcophagus", "sardonic"]
    }, {
        "Cutting and reproachful language. ": ["sarcasm", "sarcophagus", "sardonic", "satiate"]
    }, {
        "A stone coffin or a chest-like tomb. ": ["sarcophagus", "sardonic", "satiate", "satire"]
    }, {
        "Scornfully or bitterly sarcastic. ": ["sardonic", "satiate", "satire", "satiric"]
    }, {
        "To satisfy fully the appetite or desire of. ": ["satiate", "satire", "satiric", "satirize"]
    }, {
        "The employment of sarcasm, irony, or keenness of wit in ridiculing vices. ": ["satire", "satiric", "satirize", "satyr"]
    }, {
        "Resembling poetry, in which vice, incapacity ,or corruption is held up to ridicule. ": ["satiric", "satirize", "satyr", "savage"]
    }, {
        "To treat with sarcasm or derisive wit. ": ["satirize", "satyr", "savage", "savor"]
    }, {
        "A very lascivious person. ": ["satyr", "savage", "savor", "scabbard"]
    }, {
        "A wild and uncivilized human being. ": ["savage", "savor", "scabbard", "scarcity"]
    }, {
        "To perceive by taste or smell. ": ["savor", "scabbard", "scarcity", "scholarly"]
    }, {
        "The sheath of a sword or similar bladed weapon. ": ["scabbard", "scarcity", "scholarly", "scholastic"]
    }, {
        "Insufficiency of supply for needs or ordinary demands. ": ["scarcity", "scholarly", "scholastic", "scintilla"]
    }, {
        "Characteristic of an erudite person. ": ["scholarly", "scholastic", "scintilla", "scintillate"]
    }, {
        "Pertaining to education or schools. ": ["scholastic", "scintilla", "scintillate", "scope"]
    }, {
        "The faintest ray. ": ["scintilla", "scintillate", "scope", "scoundrel"]
    }, {
        "To emit or send forth sparks or little flashes of light. ": ["scintillate", "scope", "scoundrel", "scribble"]
    }, {
        "A range of action or view. ": ["scope", "scoundrel", "scribble", "scribe"]
    }, {
        "A man without principle. ": ["scoundrel", "scribble", "scribe", "script"]
    }, {
        "Hasty, careless writing. ": ["scribble", "scribe", "script", "Scriptural"]
    }, {
        "One who writes or is skilled in writing. ": ["scribe", "script", "Scriptural", "scruple"]
    }, {
        "Writing or handwriting of the ordinary cursive form. ": ["script", "Scriptural", "scruple", "scrupulous"]
    }, {
        "Pertaining to, contained in, or warranted by the Holy Scriptures. ": ["Scriptural", "scruple", "scrupulous", "scurrilous"]
    }, {
        "Doubt or uncertainty regarding a question of moral right or duty. ": ["scruple", "scrupulous", "scurrilous", "scuttle"]
    }, {
        "Cautious in action for fear of doing wrong. ": ["scrupulous", "scurrilous", "scuttle", "scythe"]
    }, {
        "Grossly indecent or vulgar. ": ["scurrilous", "scuttle", "scythe", "seance"]
    }, {
        "To sink (a ship) by making holes in the bottom. ": ["scuttle", "scythe", "seance", "sear"]
    }, {
        "A long curved blade for mowing, reaping, etc. ": ["scythe", "seance", "sear", "sebaceous"]
    }, {
        "A meeting of spirituals for consulting spirits. ": ["seance", "sear", "sebaceous", "secant"]
    }, {
        "To burn on the surface. ": ["sear", "sebaceous", "secant", "secede"]
    }, {
        "Pertaining to or appearing like fat. ": ["sebaceous", "secant", "secede", "secession"]
    }, {
        "Cutting, especially into two parts. ": ["secant", "secede", "secession", "seclude"]
    }, {
        "To withdraw from union or association, especially from a political or religious body. ": ["secede", "secession", "seclude", "seclusion"]
    }, {
        "Voluntary withdrawal from fellowship, especially from political or religious bodies. ": ["secession", "seclude", "seclusion", "secondary"]
    }, {
        "To place, keep, or withdraw from the companionship of others. ": ["seclude", "seclusion", "secondary", "secondly"]
    }, {
        "Solitude. ": ["seclusion", "secondary", "secondly", "second-rate"]
    }, {
        "Less important or effective than that which is primary. ": ["secondary", "secondly", "second-rate", "secrecy"]
    }, {
        "In the second place in order or succession. ": ["secondly", "second-rate", "secrecy", "secretary"]
    }, {
        "Second in quality, size, rank, importance, etc. ": ["second-rate", "secrecy", "secretary", "secretive"]
    }, {
        "Concealment. ": ["secrecy", "secretary", "secretive", "sedate"]
    }, {
        "One who attends to correspondence, keeps records. or does other writing for others. ": ["secretary", "secretive", "sedate", "sedentary"]
    }, {
        "Having a tendency to conceal. ": ["secretive", "sedate", "sedentary", "sediment"]
    }, {
        "Even-tempered. ": ["sedate", "sedentary", "sediment", "sedition"]
    }, {
        "Involving or requiring much sitting. ": ["sedentary", "sediment", "sedition", "seditious"]
    }, {
        "Matter that settles to the bottom of a liquid. ": ["sediment", "sedition", "seditious", "seduce"]
    }, {
        "Conduct directed against public order and the tranquillity of the state. ": ["sedition", "seditious", "seduce", "sedulous"]
    }, {
        "Promotive of conduct directed against public order and the tranquillity of the state. ": ["seditious", "seduce", "sedulous", "seer"]
    }, {
        "To entice to surrender chastity. ": ["seduce", "sedulous", "seer", "seethe"]
    }, {
        "Persevering in effort or endeavor. ": ["sedulous", "seer", "seethe", "seignior"]
    }, {
        "A prophet. ": ["seer", "seethe", "seignior", "seismograph"]
    }, {
        "To be violently excited or agitated. ": ["seethe", "seignior", "seismograph", "seize"]
    }, {
        "A title of honor or respectful address, equivalent to sir. ": ["seignior", "seismograph", "seize", "selective"]
    }, {
        "An instrument for recording the phenomena of earthquakes. ": ["seismograph", "seize", "selective", "self-respect"]
    }, {
        "To catch or take hold of suddenly and forcibly. ": ["seize", "selective", "self-respect", "semblance"]
    }, {
        "Having the power of choice. ": ["selective", "self-respect", "semblance", "semicivilized"]
    }, {
        "Rational self-esteem. ": ["self-respect", "semblance", "semicivilized", "semiconscious"]
    }, {
        "Outward appearance. ": ["semblance", "semicivilized", "semiconscious", "semiannual"]
    }, {
        "Half-civilized. ": ["semicivilized", "semiconscious", "semiannual", "semicircle"]
    }, {
        "Partially conscious. ": ["semiconscious", "semiannual", "semicircle", "seminar"]
    }, {
        "Recurring at intervals of six months. ": ["semiannual", "semicircle", "seminar", "seminary"]
    }, {
        "A half-circle. ": ["semicircle", "seminar", "seminary", "senile"]
    }, {
        "Any assemblage of pupils for real research in some specific study under a teacher. ": ["seminar", "seminary", "senile", "sensation"]
    }, {
        "A special school, as of theology or pedagogics. ": ["seminary", "senile", "sensation", "sense"]
    }, {
        "Peculiar to or proceeding from the weakness or infirmity of old age. ": ["senile", "sensation", "sense", "sensibility"]
    }, {
        "A condition of mind resulting from spiritual or inherent feeling. ": ["sensation", "sense", "sensibility", "sensitive"]
    }, {
        "The signification conveyed by some word, phrase, or action. ": ["sense", "sensibility", "sensitive", "sensorium"]
    }, {
        "Power to perceive or feel. ": ["sensibility", "sensitive", "sensorium", "sensual"]
    }, {
        "Easily affected by outside operations or influences. ": ["sensitive", "sensorium", "sensual", "sensuous"]
    }, {
        "The sensory apparatus. ": ["sensorium", "sensual", "sensuous", "sentence"]
    }, {
        "Pertaining to the body or the physical senses. ": ["sensual", "sensuous", "sentence", "sentience"]
    }, {
        "Having a warm appreciation of the beautiful or of the refinements of luxury. ": ["sensuous", "sentence", "sentience", "sentient"]
    }, {
        "A related group of words containing a subject and a predicate and expressing a complete thought.": ["sentence", "sentience", "sentient", "sentinel"]
    }, {
        "Capacity for sensation or sense-perception. ": ["sentience", "sentient", "sentinel", "separable"]
    }, {
        "Possessing the power of sense or sense-perception. ": ["sentient", "sentinel", "separable", "separate"]
    }, {
        "Any guard or watch stationed for protection. ": ["sentinel", "separable", "separate", "separatist"]
    }, {
        "Capable of being disjoined or divided. ": ["separable", "separate", "separatist", "septennial"]
    }, {
        "To take apart. ": ["separate", "separatist", "septennial", "sepulcher"]
    }, {
        "A seceder. ": ["separatist", "septennial", "sepulcher", "sequacious"]
    }, {
        "Recurring every seven years. ": ["septennial", "sepulcher", "sequacious", "sequel"]
    }, {
        "A burial-place. ": ["sepulcher", "sequacious", "sequel", "sequence"]
    }, {
        "Ready to be led. ": ["sequacious", "sequel", "sequence", "sequent"]
    }, {
        "That which follows in consequence of what has previously happened. ": ["sequel", "sequence", "sequent", "sequester"]
    }, {
        "The order in which a number or persons, things, or events follow one another in space or time. ": ["sequence", "sequent", "sequester", "sequestrate"]
    }, {
        "Following in the order of time. ": ["sequent", "sequester", "sequestrate", "sergeant"]
    }, {
        "To cause to withdraw or retire, as from society or public life. ": ["sequester", "sequestrate", "sergeant", "sergeant-at-arms"]
    }, {
        "To confiscate. ": ["sequestrate", "sergeant", "sergeant-at-arms", "sergeant-major"]
    }, {
        "A non-commissioned military officer ranking next above a corporal. ": ["sergeant", "sergeant-at-arms", "sergeant-major", "service"]
    }, {
        "An executive officer in legislative bodies who enforces the orders of the presiding officer. ": ["sergeant-at-arms", "sergeant-major", "service", "serviceable"]
    }, {
        "The highest non-commissioned officer in a regiment. ": ["sergeant-major", "service", "serviceable", "servitude"]
    }, {
        "Any work done for the benefit of another. ": ["service", "serviceable", "servitude", "severance"]
    }, {
        "Durable. ": ["serviceable", "servitude", "severance", "severely"]
    }, {
        "Slavery. ": ["servitude", "severance", "severely", "sextet"]
    }, {
        "Separation. ": ["severance", "severely", "sextet", "sextuple"]
    }, {
        "Extremely. ": ["severely", "sextet", "sextuple", "sheer"]
    }, {
        "A band of six singers or players. ": ["sextet", "sextuple", "sheer", "shiftless"]
    }, {
        "Multiplied by six. ": ["sextuple", "sheer", "shiftless", "shrewd"]
    }, {
        "Absolute. ": ["sheer", "shiftless", "shrewd", "shriek"]
    }, {
        "Wanting in resource, energy, or executive ability. ": ["shiftless", "shrewd", "shriek", "shrinkage"]
    }, {
        "Characterized by skill at understanding and profiting by circumstances. ": ["shrewd", "shriek", "shrinkage", "shrivel"]
    }, {
        "A sharp, shrill outcry or scream, caused by agony or terror. ": ["shriek", "shrinkage", "shrivel", "shuffle"]
    }, {
        "A contraction of any material into less bulk or dimension. ": ["shrinkage", "shrivel", "shuffle", "sibilance"]
    }, {
        "To draw or be drawn into wrinkles. ": ["shrivel", "shuffle", "sibilance", "sibilant"]
    }, {
        "A mixing or changing the order of things. ": ["shuffle", "sibilance", "sibilant", "sibilate"]
    }, {
        "A hissing sound. ": ["sibilance", "sibilant", "sibilate", "sidelong"]
    }, {
        "Made with a hissing sound. ": ["sibilant", "sibilate", "sidelong", "sidereal"]
    }, {
        "To give a hissing sound to, as in pronouncing the letter s. ": ["sibilate", "sidelong", "sidereal", "siege"]
    }, {
        "Inclining or tending to one side. ": ["sidelong", "sidereal", "siege", "significance"]
    }, {
        "Pertaining to stars or constellations. ": ["sidereal", "siege", "significance", "significant"]
    }, {
        "A beleaguerment. ": ["siege", "significance", "significant", "signification"]
    }, {
        "Importance. ": ["significance", "significant", "signification", "similar"]
    }, {
        "Important, especially as pointing something out. ": ["significant", "signification", "similar", "simile"]
    }, {
        "The meaning conveyed by language, actions, or signs. ": ["signification", "similar", "simile", "similitude"]
    }, {
        "Bearing resemblance to one another or to something else. ": ["similar", "simile", "similitude", "simplify"]
    }, {
        "A comparison which directs the mind to the representative object itself. ": ["simile", "similitude", "simplify", "simulate"]
    }, {
        "Similarity. ": ["similitude", "simplify", "simulate", "simultaneous"]
    }, {
        "To make less complex or difficult. ": ["simplify", "simulate", "simultaneous", "sinecure"]
    }, {
        "Imitate. ": ["simulate", "simultaneous", "sinecure", "singe"]
    }, {
        "Occurring, done, or existing at the same time. ": ["simultaneous", "sinecure", "singe", "sinister"]
    }, {
        "Any position having emoluments with few or no duties. ": ["sinecure", "singe", "sinister", "sinuosity"]
    }, {
        "To burn slightly or superficially. ": ["singe", "sinister", "sinuosity", "sinuous"]
    }, {
        "Evil. ": ["sinister", "sinuosity", "sinuous", "sinus"]
    }, {
        "The quality of curving in and out. ": ["sinuosity", "sinuous", "sinus", "siren"]
    }, {
        "Curving in and out. ": ["sinuous", "sinus", "siren", "sirocco"]
    }, {
        "An opening or cavity. ": ["sinus", "siren", "sirocco", "sisterhood"]
    }, {
        "A sea-nymph, described by Homer as dwelling between the island of Circe and Scylla. ": ["siren", "sirocco", "sisterhood", "skeptic"]
    }, {
        "hot winds from Africa. ": ["sirocco", "sisterhood", "skeptic", "skepticism"]
    }, {
        "A body of sisters united by some bond of sympathy or by a religious vow. ": ["sisterhood", "skeptic", "skepticism", "skiff"]
    }, {
        "One who doubts any statements. ": ["skeptic", "skepticism", "skiff", "skirmish"]
    }, {
        "The entertainment of doubt concerning something. ": ["skepticism", "skiff", "skirmish", "sleight"]
    }, {
        "Usually, a small light boat propelled by oars. ": ["skiff", "skirmish", "sleight", "slight"]
    }, {
        "Desultory fighting between advanced detachments of two armies. ": ["skirmish", "sleight", "slight", "slothful"]
    }, {
        "A trick or feat so deftly done that the manner of performance escapes observation. ": ["sleight", "slight", "slothful", "sluggard"]
    }, {
        "Of a small importance or significance. ": ["slight", "slothful", "sluggard", "sociable"]
    }, {
        "Lazy. ": ["slothful", "sluggard", "sociable", "socialism"]
    }, {
        "A person habitually lazy or idle. ": ["sluggard", "sociable", "socialism", "socialist"]
    }, {
        "Inclined to seek company. ": ["sociable", "socialism", "socialist", "sociology"]
    }, {
        "A theory of civil polity that aims to secure the reconstruction of society. ": ["socialism", "socialist", "sociology", "Sol"]
    }, {
        "One who advocates reconstruction of society by collective ownership of land and capital. ": ["socialist", "sociology", "Sol", "solace"]
    }, {
        "The philosophical study of society. ": ["sociology", "Sol", "solace", "solar"]
    }, {
        "The sun. ": ["Sol", "solace", "solar", "solder"]
    }, {
        "Comfort in grief, trouble, or calamity. ": ["solace", "solar", "solder", "soldier"]
    }, {
        "Pertaining to the sun. ": ["solar", "solder", "soldier", "solecism"]
    }, {
        "A fusible alloy used for joining metallic surfaces or margins. ": ["solder", "soldier", "solecism", "solicitor"]
    }, {
        "A person engaged in military service. ": ["soldier", "solecism", "solicitor", "solicitude"]
    }, {
        "Any violation of established rules or customs. ": ["solecism", "solicitor", "solicitude", "soliloquy"]
    }, {
        "One who represents a client in court of justice; an attorney. ": ["solicitor", "solicitude", "soliloquy", "solstice"]
    }, {
        "Uneasiness of mind occasioned by desire, anxiety, or fear. ": ["solicitude", "soliloquy", "solstice", "soluble"]
    }, {
        "A monologue. ": ["soliloquy", "solstice", "soluble", "solvent"]
    }, {
        "The time of year when the sun is at its greatest declination. ": ["solstice", "soluble", "solvent", "somber"]
    }, {
        "Capable of being dissolved, as in a fluid. ": ["soluble", "solvent", "somber", "somniferous"]
    }, {
        "Having sufficient funds to pay all debts. ": ["solvent", "somber", "somniferous", "somnolence"]
    }, {
        "Gloomy. ": ["somber", "somniferous", "somnolence", "somnolent"]
    }, {
        "Tending to produce sleep. ": ["somniferous", "somnolence", "somnolent", "sonata"]
    }, {
        "Oppressive drowsiness. ": ["somnolence", "somnolent", "sonata", "sonnet"]
    }, {
        "Sleepy. ": ["somnolent", "sonata", "sonnet", "sonorous"]
    }, {
        "An instrumental composition. ": ["sonata", "sonnet", "sonorous", "soothsayer"]
    }, {
        "A poem of fourteen decasyllabic or octosyllabiclines expressing two successive phrases. ": ["sonnet", "sonorous", "soothsayer", "sophism"]
    }, {
        "Resonant. ": ["sonorous", "soothsayer", "sophism", "sophistical"]
    }, {
        "One who claims to have supernatural insight or foresight. ": ["soothsayer", "sophism", "sophistical", "sophisticate"]
    }, {
        "A false argument understood to be such by the reasoner himself and intentionally used to deceive": ["sophism", "sophistical", "sophisticate", "sophistry"]
    }, {
        "Fallacious. ": ["sophistical", "sophisticate", "sophistry", "soprano"]
    }, {
        "To deprive of simplicity of mind or manner. ": ["sophisticate", "sophistry", "soprano", "sorcery"]
    }, {
        "Reasoning sound in appearance only, especially when designedly deceptive. ": ["sophistry", "soprano", "sorcery", "sordid"]
    }, {
        "A woman's or boy's voice of high range. ": ["soprano", "sorcery", "sordid", "souvenir"]
    }, {
        "Witchcraft. ": ["sorcery", "sordid", "souvenir", "sparse"]
    }, {
        "Of degraded character or nature. ": ["sordid", "souvenir", "sparse", "Spartan"]
    }, {
        "A token of remembrance. ": ["souvenir", "sparse", "Spartan", "spasmodic"]
    }, {
        "Thinly diffused. ": ["sparse", "Spartan", "spasmodic", "specialize"]
    }, {
        "Exceptionally brave; rigorously severe. ": ["Spartan", "spasmodic", "specialize", "specialty"]
    }, {
        "Convulsive. ": ["spasmodic", "specialize", "specialty", "specie"]
    }, {
        "To assume an individual or specific character, or adopt a singular or special course. ": ["specialize", "specialty", "specie", "species"]
    }, {
        "An employment limited to one particular line of work. ": ["specialty", "specie", "species", "specimen"]
    }, {
        "A coin or coins of gold, silver, copper, or other metal. ": ["specie", "species", "specimen", "specious"]
    }, {
        "A classificatory group of animals or plants subordinate to a genus. ": ["species", "specimen", "specious", "spectator"]
    }, {
        "One of a class of persons or things regarded as representative of the class. ": ["specimen", "specious", "spectator", "specter"]
    }, {
        "Plausible. ": ["specious", "spectator", "specter", "spectrum"]
    }, {
        "One who beholds or looks on. ": ["spectator", "specter", "spectrum", "speculate"]
    }, {
        "Apparition. ": ["specter", "spectrum", "speculate", "speculator"]
    }, {
        "An image formed by rays of light or other radiant energy. ": ["spectrum", "speculate", "speculator", "sphericity"]
    }, {
        "To pursue inquiries and form conjectures. ": ["speculate", "speculator", "sphericity", "spheroid"]
    }, {
        "One who makes an investment that involves a risk of loss, but also a chance of profit. ": ["speculator", "sphericity", "spheroid", "spherometer"]
    }, {
        "The state or condition of being a sphere. ": ["sphericity", "spheroid", "spherometer", "spinous"]
    }, {
        "A body having nearly the form of a sphere. ": ["spheroid", "spherometer", "spinous", "spinster"]
    }, {
        "An instrument for measuring curvature or radii of spherical surfaces. ": ["spherometer", "spinous", "spinster", "spontaneous"]
    }, {
        "Having spines. ": ["spinous", "spinster", "spontaneous", "sprightly"]
    }, {
        "A woman who has never been married. ": ["spinster", "spontaneous", "sprightly", "spurious"]
    }, {
        "Arising from inherent qualities or tendencies without external efficient cause. ": ["spontaneous", "sprightly", "spurious", "squabble"]
    }, {
        "Vivacious. ": ["sprightly", "spurious", "squabble", "squalid"]
    }, {
        "Not genuine. ": ["spurious", "squabble", "squalid", "squatter"]
    }, {
        "To quarrel. ": ["squabble", "squalid", "squatter", "stagnant"]
    }, {
        "Having a dirty, mean, poverty-stricken appearance. ": ["squalid", "squatter", "stagnant", "stagnate"]
    }, {
        "One who settles on land without permission or right. ": ["squatter", "stagnant", "stagnate", "stagnation"]
    }, {
        "Not flowing: said of water, as in a pool. ": ["stagnant", "stagnate", "stagnation", "stagy"]
    }, {
        "To become dull or inert. ": ["stagnate", "stagnation", "stagy", "staid"]
    }, {
        "The condition of not flowing or not changing. ": ["stagnation", "stagy", "staid", "stallion"]
    }, {
        "Having a theatrical manner. ": ["stagy", "staid", "stallion", "stanchion"]
    }, {
        "Of a steady and sober character. ": ["staid", "stallion", "stanchion", "stanza"]
    }, {
        "An uncastrated male horse, commonly one kept for breeding. ": ["stallion", "stanchion", "stanza", "statecraft"]
    }, {
        "A vertical bar, or a pair of bars, used to confine cattle in a stall. ": ["stanchion", "stanza", "statecraft", "static"]
    }, {
        "A group of rimed lines, usually forming one of a series of similar divisions in a poem. ": ["stanza", "statecraft", "static", "statics"]
    }, {
        "The art of conducting state affairs. ": ["statecraft", "static", "statics", "stationary"]
    }, {
        "Pertaining to or designating bodies at rest or forces in equilibrium. ": ["static", "statics", "stationary", "statistician"]
    }, {
        "The branch of mechanics that treats of the relations that subsist among forces in order. ": ["statics", "stationary", "statistician", "statuesque"]
    }, {
        "Not moving. ": ["stationary", "statistician", "statuesque", "statuette"]
    }, {
        "One who is skilled in collecting and tabulating numerical facts. ": ["statistician", "statuesque", "statuette", "stature"]
    }, {
        "Having the grace, pose, or quietude of a statue. ": ["statuesque", "statuette", "stature", "statute"]
    }, {
        "A figurine. ": ["statuette", "stature", "statute", "stealth"]
    }, {
        "The natural height of an animal body. ": ["stature", "statute", "stealth", "stellar"]
    }, {
        "Any authoritatively declared rule, ordinance, decree, or law. ": ["statute", "stealth", "stellar", "steppe"]
    }, {
        "A concealed manner of acting. ": ["stealth", "stellar", "steppe", "sterling"]
    }, {
        "Pertaining to the stars. ": ["stellar", "steppe", "sterling", "stifle"]
    }, {
        "One of the extensive plains in Russia and Siberia. ": ["steppe", "sterling", "stifle", "stigma"]
    }, {
        "Genuine. ": ["sterling", "stifle", "stigma", "stiletto"]
    }, {
        "To smother. ": ["stifle", "stigma", "stiletto", "stimulant"]
    }, {
        "A mark of infamy or token of disgrace attaching to a person as the result of evil-doing. ": ["stigma", "stiletto", "stimulant", "stimulate"]
    }, {
        "A small dagger. ": ["stiletto", "stimulant", "stimulate", "stimulus"]
    }, {
        "Anything that rouses to activity or to quickened action. ": ["stimulant", "stimulate", "stimulus", "stingy"]
    }, {
        "To rouse to activity or to quickened action. ": ["stimulate", "stimulus", "stingy", "stipend"]
    }, {
        "Incentive. ": ["stimulus", "stingy", "stipend", "Stoicism"]
    }, {
        "Cheap, unwilling to spend money. ": ["stingy", "stipend", "Stoicism", "stolid"]
    }, {
        "A definite amount paid at stated periods in compensation for services or as an allowance. ": ["stipend", "Stoicism", "stolid", "strait"]
    }, {
        "The principles or the practice of the Stoics-being very even tempered in success and failure. ": ["Stoicism", "stolid", "strait", "stratagem"]
    }, {
        "Expressing no power of feeling or perceiving. ": ["stolid", "strait", "stratagem", "stratum"]
    }, {
        "A narrow passage of water connecting two larger bodies of water. ": ["strait", "stratagem", "stratum", "streamlet"]
    }, {
        "Any clever trick or device for obtaining an advantage. ": ["stratagem", "stratum", "streamlet", "stringency"]
    }, {
        "A natural or artificial layer, bed, or thickness of any substance or material. ": ["stratum", "streamlet", "stringency", "stringent"]
    }, {
        "Rivulet. ": ["streamlet", "stringency", "stringent", "stripling"]
    }, {
        "Strictness. ": ["stringency", "stringent", "stripling", "studious"]
    }, {
        "Rigid. ": ["stringent", "stripling", "studious", "stultify"]
    }, {
        "A mere youth. ": ["stripling", "studious", "stultify", "stupendous"]
    }, {
        "Having or showing devotion to the acquisition of knowledge. ": ["studious", "stultify", "stupendous", "stupor"]
    }, {
        "To give an appearance of foolishness to. ": ["stultify", "stupendous", "stupor", "suasion"]
    }, {
        "Of prodigious size, bulk, or degree. ": ["stupendous", "stupor", "suasion", "suave"]
    }, {
        "Profound lethargy. ": ["stupor", "suasion", "suave", "subacid"]
    }, {
        "The act of persuading. ": ["suasion", "suave", "subacid", "subaquatic"]
    }, {
        "Smooth and pleasant in manner. ": ["suave", "subacid", "subaquatic", "subconscious"]
    }, {
        "Somewhat sharp or biting. ": ["subacid", "subaquatic", "subconscious", "subjacent"]
    }, {
        "Being, formed, or operating under water. ": ["subaquatic", "subconscious", "subjacent", "subjection"]
    }, {
        "Being or occurring in the mind, but without attendant consciousness or conscious perception. ": ["subconscious", "subjacent", "subjection", "subjugate"]
    }, {
        "Situated directly underneath. ": ["subjacent", "subjection", "subjugate", "subliminal"]
    }, {
        "The act of bringing into a state of submission. ": ["subjection", "subjugate", "subliminal", "sublingual"]
    }, {
        "To conquer. ": ["subjugate", "subliminal", "sublingual", "submarine"]
    }, {
        "Being beneath the threshold of consciousness. ": ["subliminal", "sublingual", "submarine", "submerge"]
    }, {
        "Situated beneath the tongue. ": ["sublingual", "submarine", "submerge", "submergence"]
    }, {
        "Existing, done, or operating beneath the surface of the sea. ": ["submarine", "submerge", "submergence", "submersible"]
    }, {
        "To place or plunge under water. ": ["submerge", "submergence", "submersible", "submersion"]
    }, {
        "The act of submerging. ": ["submergence", "submersible", "submersion", "submission"]
    }, {
        "Capable of being put underwater. ": ["submersible", "submersion", "submission", "submittal"]
    }, {
        "The act of submerging. ": ["submersion", "submission", "submittal", "subordinate"]
    }, {
        "A yielding to the power or authority of another. ": ["submission", "submittal", "subordinate", "subsequent"]
    }, {
        "The act of submitting. ": ["submittal", "subordinate", "subsequent", "subservience"]
    }, {
        "Belonging to an inferior order in a classification. ": ["subordinate", "subsequent", "subservience", "subservient"]
    }, {
        "Following in time. ": ["subsequent", "subservience", "subservient", "subside"]
    }, {
        "The quality, character, or condition of being servilely following another's behests. ": ["subservience", "subservient", "subside", "subsist"]
    }, {
        "Servilely following another's behests. ": ["subservient", "subside", "subsist", "subsistence"]
    }, {
        "To relapse into a state of repose and tranquillity. ": ["subside", "subsist", "subsistence", "substantive"]
    }, {
        "To be maintained or sustained. ": ["subsist", "subsistence", "substantive", "subtend"]
    }, {
        "Sustenance. ": ["subsistence", "substantive", "subtend", "subterfuge"]
    }, {
        "Solid. ": ["substantive", "subtend", "subterfuge", "subterranean"]
    }, {
        "To extend opposite to. ": ["subtend", "subterfuge", "subterranean", "subtle"]
    }, {
        "Evasion. ": ["subterfuge", "subterranean", "subtle", "subtrahend"]
    }, {
        "Situated or occurring below the surface of the earth. ": ["subterranean", "subtle", "subtrahend", "subversion"]
    }, {
        "Discriminating. ": ["subtle", "subtrahend", "subversion", "subvert"]
    }, {
        "That which is to be subtracted. ": ["subtrahend", "subversion", "subvert", "succeed"]
    }, {
        "An overthrow, as from the foundation. ": ["subversion", "subvert", "succeed", "success"]
    }, {
        "To bring to ruin. ": ["subvert", "succeed", "success", "successful"]
    }, {
        "To accomplish what is attempted or intended. ": ["succeed", "success", "successful", "successor"]
    }, {
        "A favorable or prosperous course or termination of anything attempted. ": ["success", "successful", "successor", "succinct"]
    }, {
        "Having reached a high degree of worldly prosperity. ": ["successful", "successor", "succinct", "succulent"]
    }, {
        "One who or that which takes the place of a predecessor or preceding thing. ": ["successor", "succinct", "succulent", "succumb"]
    }, {
        "Concise. ": ["succinct", "succulent", "succumb", "sufferance"]
    }, {
        "Juicy. ": ["succulent", "succumb", "sufferance", "sufficiency"]
    }, {
        "To cease to resist. ": ["succumb", "sufferance", "sufficiency", "suffrage"]
    }, {
        "Toleration. ": ["sufferance", "sufficiency", "suffrage", "suffuse"]
    }, {
        "An ample or adequate supply. ": ["sufficiency", "suffrage", "suffuse", "suggestible"]
    }, {
        "The right or privilege of voting. ": ["suffrage", "suffuse", "suggestible", "suggestive"]
    }, {
        "To cover or fill the surface of. ": ["suffuse", "suggestible", "suggestive", "summary"]
    }, {
        "That can be suggested. ": ["suggestible", "suggestive", "summary", "sumptuous"]
    }, {
        "Stimulating to thought or reflection. ": ["suggestive", "summary", "sumptuous", "superabundance"]
    }, {
        "An abstract. ": ["summary", "sumptuous", "superabundance", "superadd"]
    }, {
        "Rich and costly. ": ["sumptuous", "superabundance", "superadd", "superannuate"]
    }, {
        "An excessive amount. ": ["superabundance", "superadd", "superannuate", "superb"]
    }, {
        "To add in addition to what has been added. ": ["superadd", "superannuate", "superb", "supercilious"]
    }, {
        "To become deteriorated or incapacitated by long service. ": ["superannuate", "superb", "supercilious", "superficial"]
    }, {
        "Sumptuously elegant. ": ["superb", "supercilious", "superficial", "superfluity"]
    }, {
        "Exhibiting haughty and careless contempt. ": ["supercilious", "superficial", "superfluity", "superfluous"]
    }, {
        "Knowing and understanding only the ordinary and the obvious. ": ["superficial", "superfluity", "superfluous", "superheat"]
    }, {
        "That part of anything that is in excess of what is needed. ": ["superfluity", "superfluous", "superheat", "superintend"]
    }, {
        "Being more than is needed. ": ["superfluous", "superheat", "superintend", "superintendence"]
    }, {
        "To heat to excess. ": ["superheat", "superintend", "superintendence", "superintendent"]
    }, {
        "To have the charge and direction of, especially of some work or movement. ": ["superintend", "superintendence", "superintendent", "superlative"]
    }, {
        "Direction and management. ": ["superintendence", "superintendent", "superlative", "supernatural"]
    }, {
        "One who has the charge and direction of, especially of some work or movement. ": ["superintendent", "superlative", "supernatural", "supernumerary"]
    }, {
        "That which is of the highest possible excellence or eminence. ": ["superlative", "supernatural", "supernumerary", "supersede"]
    }, {
        "Caused miraculously or by the immediate exercise of divine power. ": ["supernatural", "supernumerary", "supersede", "supine"]
    }, {
        "Superfluous. ": ["supernumerary", "supersede", "supine", "supplant"]
    }, {
        "To displace. ": ["supersede", "supine", "supplant", "supple"]
    }, {
        "Lying on the back. ": ["supine", "supplant", "supple", "supplementary"]
    }, {
        "To take the place of. ": ["supplant", "supple", "supplementary", "supplicant"]
    }, {
        "Easily bent. ": ["supple", "supplementary", "supplicant", "supplicate"]
    }, {
        "Being an addition to. ": ["supplementary", "supplicant", "supplicate", "supposition"]
    }, {
        "One who asks humbly and earnestly. ": ["supplicant", "supplicate", "supposition", "suppress"]
    }, {
        "To beg. ": ["supplicate", "supposition", "suppress", "suppressible"]
    }, {
        "Conjecture. ": ["supposition", "suppress", "suppressible", "suppression"]
    }, {
        "To prevent from being disclosed or punished. ": ["suppress", "suppressible", "suppression", "supramundane"]
    }, {
        "Capable of being suppressed. ": ["suppressible", "suppression", "supramundane", "surcharge"]
    }, {
        "A forcible putting or keeping down. ": ["suppression", "supramundane", "surcharge", "surety"]
    }, {
        "Supernatural. ": ["supramundane", "surcharge", "surety", "surfeit"]
    }, {
        "An additional amount charged. ": ["surcharge", "surety", "surfeit", "surmise"]
    }, {
        "Security for payment or performance. ": ["surety", "surfeit", "surmise", "surmount"]
    }, {
        "To feed to fullness or to satiety. ": ["surfeit", "surmise", "surmount", "surreptitious"]
    }, {
        "To conjecture. ": ["surmise", "surmount", "surreptitious", "surrogate"]
    }, {
        "To overcome by force of will. ": ["surmount", "surreptitious", "surrogate", "surround"]
    }, {
        "Clandestine. ": ["surreptitious", "surrogate", "surround", "surveyor"]
    }, {
        "One who or that which is substituted for or appointed to act in place of another. ": ["surrogate", "surround", "surveyor", "susceptibility"]
    }, {
        "To encircle. ": ["surround", "surveyor", "susceptibility", "susceptible"]
    }, {
        "A land-measurer. ": ["surveyor", "susceptibility", "susceptible", "suspense"]
    }, {
        "A specific capability of feeling or emotion. ": ["susceptibility", "susceptible", "suspense", "suspension"]
    }, {
        "Easily under a specified power or influence. ": ["susceptible", "suspense", "suspension", "suspicious"]
    }, {
        "Uncertainty. ": ["suspense", "suspension", "suspicious", "sustenance"]
    }, {
        "A hanging from a support. ": ["suspension", "suspicious", "sustenance", "swarthy"]
    }, {
        "Inclined to doubt or mistrust. ": ["suspicious", "sustenance", "swarthy", "Sybarite"]
    }, {
        "Food. ": ["sustenance", "swarthy", "Sybarite", "sycophant"]
    }, {
        "Having a dark hue, especially a dark or sunburned complexion. ": ["swarthy", "Sybarite", "sycophant", "syllabic"]
    }, {
        "A luxurious person. ": ["Sybarite", "sycophant", "syllabic", "syllabication"]
    }, {
        "A servile flatterer, especially of those in authority or influence. ": ["sycophant", "syllabic", "syllabication", "syllable"]
    }, {
        "Consisting of that which is uttered in a single vocal impulse. ": ["syllabic", "syllabication", "syllable", "syllabus"]
    }, {
        "Division of words into that which is uttered in a single vocal impulse. ": ["syllabication", "syllable", "syllabus", "sylph"]
    }, {
        "That which is uttered in a single vocal impulse. ": ["syllable", "syllabus", "sylph", "symmetrical"]
    }, {
        "Outline of a subject, course, lecture, or treatise. ": ["syllabus", "sylph", "symmetrical", "symmetry"]
    }, {
        "A slender, graceful young woman or girl. ": ["sylph", "symmetrical", "symmetry", "sympathetic"]
    }, {
        "Well-balanced. ": ["symmetrical", "symmetry", "sympathetic", "sympathize"]
    }, {
        "Relative proportion and harmony. ": ["symmetry", "sympathetic", "sympathize", "symphonic"]
    }, {
        "Having a fellow-feeling for or like feelings with another or others. ": ["sympathetic", "sympathize", "symphonic", "symphonious"]
    }, {
        "To share the sentiments or mental states of another. ": ["sympathize", "symphonic", "symphonious", "symphony"]
    }, {
        "Characterized by a harmonious or agreeable mingling of sounds. ": ["symphonic", "symphonious", "symphony", "synchronism"]
    }, {
        "Marked by a harmonious or agreeable mingling of sounds. ": ["symphonious", "symphony", "synchronism", "syndicate"]
    }, {
        "A harmonious or agreeable mingling of sounds. ": ["symphony", "synchronism", "syndicate", "syneresis"]
    }, {
        "Simultaneousness. ": ["synchronism", "syndicate", "syneresis", "synod"]
    }, {
        "An association of individuals united for the prosecution of some enterprise. ": ["syndicate", "syneresis", "synod", "synonym"]
    }, {
        "The coalescence of two vowels or syllables, as e'er for ever. ": ["syneresis", "synod", "synonym", "synopsis"]
    }, {
        "An ecclesiastical council. ": ["synod", "synonym", "synopsis", "systematic"]
    }, {
        "A word having the same or almost the same meaning as some other. ": ["synonym", "synopsis", "systematic", "tableau"]
    }, {
        "A syllabus or summary. ": ["synopsis", "systematic", "tableau", "tacit"]
    }, {
        "Methodical. ": ["systematic", "tableau", "tacit", "taciturn"]
    }, {
        "An arrangement of inanimate figures representing a scene from real life. ": ["tableau", "tacit", "taciturn", "tack"]
    }, {
        "Understood. ": ["tacit", "taciturn", "tack", "tact"]
    }, {
        "Disinclined to conversation. ": ["taciturn", "tack", "tact", "tactician"]
    }, {
        "A small sharp-pointed nail. ": ["tack", "tact", "tactician", "tactics"]
    }, {
        "Fine or ready mental discernment shown in saying or doing the proper thing. ": ["tact", "tactician", "tactics", "tangency"]
    }, {
        "One who directs affairs with skill and shrewdness. ": ["tactician", "tactics", "tangency", "tangent"]
    }, {
        "Any maneuvering or adroit management for effecting an object. ": ["tactics", "tangency", "tangent", "tangible"]
    }, {
        "The state of touching. ": ["tangency", "tangent", "tangible", "tannery"]
    }, {
        "Touching. ": ["tangent", "tangible", "tannery", "tantalize"]
    }, {
        "Perceptible by touch. ": ["tangible", "tannery", "tantalize", "tantamount"]
    }, {
        "A place where leather is tanned. ": ["tannery", "tantalize", "tantamount", "tapestry"]
    }, {
        "To tease. ": ["tantalize", "tantamount", "tapestry", "tarnish"]
    }, {
        "Having equal or equivalent value, effect, or import. ": ["tantamount", "tapestry", "tarnish", "taut"]
    }, {
        "A fabric to which a pattern is applied with a needle, designed for ornamental hangings. ": ["tapestry", "tarnish", "taut", "taxation"]
    }, {
        "To lessen or destroy the luster of in any way. ": ["tarnish", "taut", "taxation", "taxidermy"]
    }, {
        "Stretched tight. ": ["taut", "taxation", "taxidermy", "technic"]
    }, {
        "A levy, by government, of a fixed contribution. ": ["taxation", "taxidermy", "technic", "technicality"]
    }, {
        "The art or process of preserving dead animals or parts of them. ": ["taxidermy", "technic", "technicality", "technique"]
    }, {
        "Technical. ": ["technic", "technicality", "technique", "technography"]
    }, {
        "Something peculiar to a particular art, trade, or the like. ": ["technicality", "technique", "technography", "technology"]
    }, {
        "Manner of performance. ": ["technique", "technography", "technology", "teem"]
    }, {
        "The scientific description or study of human arts and industries in their historic development.": ["technography", "technology", "teem", "telepathy"]
    }, {
        "The knowledge relating to industries and manufactures. ": ["technology", "teem", "telepathy", "telephony"]
    }, {
        "To be full to overflowing. ": ["teem", "telepathy", "telephony", "telescope"]
    }, {
        "Thought-transference. ": ["telepathy", "telephony", "telescope", "telltale"]
    }, {
        "The art or process of communicating by telephone. ": ["telephony", "telescope", "telltale", "temerity"]
    }, {
        "To drive together so that one slides into the another like the sections of a spy-glass. ": ["telescope", "telltale", "temerity", "temporal"]
    }, {
        "That gives warning or information. ": ["telltale", "temerity", "temporal", "temporary"]
    }, {
        "Recklessness. ": ["temerity", "temporal", "temporary", "temporize"]
    }, {
        "Pertaining to or concerned with the affairs of the present life. ": ["temporal", "temporary", "temporize", "tempt"]
    }, {
        "Lasting for a short time only. ": ["temporary", "temporize", "tempt", "tempter"]
    }, {
        "To pursue a policy of delay. ": ["temporize", "tempt", "tempter", "tenacious"]
    }, {
        "To offer to (somebody) an inducement to do wrong. ": ["tempt", "tempter", "tenacious", "tenant"]
    }, {
        "An allurer or enticer to evil. ": ["tempter", "tenacious", "tenant", "tendency"]
    }, {
        "Unyielding. ": ["tenacious", "tenant", "tendency", "tenet"]
    }, {
        "An occupant. ": ["tenant", "tendency", "tenet", "tenor"]
    }, {
        "Direction or inclination, as toward some objector end. ": ["tendency", "tenet", "tenor", "tense"]
    }, {
        "Any opinion, principle, dogma, or doctrine that a person believes or maintains as true. ": ["tenet", "tenor", "tense", "tentative"]
    }, {
        "A settled course or manner of progress. ": ["tenor", "tense", "tentative", "tenure"]
    }, {
        "Strained to stiffness. ": ["tense", "tentative", "tenure", "tercentenary"]
    }, {
        "Done as an experiment. ": ["tentative", "tenure", "tercentenary", "termagant"]
    }, {
        "The term during which a thing is held. ": ["tenure", "tercentenary", "termagant", "terminal"]
    }, {
        "Pertaining to a period of 300 years. ": ["tercentenary", "termagant", "terminal", "terminate"]
    }, {
        "Violently abusive and quarrelsome. ": ["termagant", "terminal", "terminate", "termination"]
    }, {
        "Pertaining to or creative of a boundary, limit. ": ["terminal", "terminate", "termination", "terminus"]
    }, {
        "To put an end or stop to. ": ["terminate", "termination", "terminus", "terrify"]
    }, {
        "The act of ending or concluding. ": ["termination", "terminus", "terrify", "territorial"]
    }, {
        "The final point or goal. ": ["terminus", "terrify", "territorial", "terse"]
    }, {
        "To fill with extreme fear. ": ["terrify", "territorial", "terse", "testament"]
    }, {
        "Pertaining to the domain over which a sovereign state exercises jurisdiction. ": ["territorial", "terse", "testament", "testator"]
    }, {
        "Pithy. ": ["terse", "testament", "testator", "testimonial"]
    }, {
        "A will. ": ["testament", "testator", "testimonial", "thearchy"]
    }, {
        "The maker of a will. ": ["testator", "testimonial", "thearchy", "theism"]
    }, {
        "A formal token of regard, often presented in public. ": ["testimonial", "thearchy", "theism", "theocracy"]
    }, {
        "Government by a supreme deity. ": ["thearchy", "theism", "theocracy", "theocrasy"]
    }, {
        "Belief in God. ": ["theism", "theocracy", "theocrasy", "theologian"]
    }, {
        "A government administered by ecclesiastics. ": ["theocracy", "theocrasy", "theologian", "theological"]
    }, {
        "The mixed worship of polytheism. ": ["theocrasy", "theologian", "theological", "theology"]
    }, {
        "A professor of divinity. ": ["theologian", "theological", "theology", "theoretical"]
    }, {
        "Based on or growing out of divine revelation. ": ["theological", "theology", "theoretical", "theorist"]
    }, {
        "The branch of theological science that treats of God. ": ["theology", "theoretical", "theorist", "theorize"]
    }, {
        "Directed toward knowledge for its own sake without respect to applications. ": ["theoretical", "theorist", "theorize", "thereabout"]
    }, {
        "One given to speculating. ": ["theorist", "theorize", "thereabout", "therefor"]
    }, {
        "To speculate. ": ["theorize", "thereabout", "therefor", "thermal"]
    }, {
        "Near that number, quantity, degree, place, or time, approximately. ": ["thereabout", "therefor", "thermal", "thermoelectric"]
    }, {
        "For that or this. ": ["therefor", "thermal", "thermoelectric", "thermoelectricity"]
    }, {
        "Of or pertaining to heat. ": ["thermal", "thermoelectric", "thermoelectricity", "thesis"]
    }, {
        "Denoting electricity produced by heat. ": ["thermoelectric", "thermoelectricity", "thesis", "thoroughbred"]
    }, {
        "Electricity generated by differences of temperature, ": ["thermoelectricity", "thesis", "thoroughbred", "thoroughfare"]
    }, {
        "An essay or treatise on a particular subject. ": ["thesis", "thoroughbred", "thoroughfare", "thrall"]
    }, {
        "Bred from the best or purest blood or stock. ": ["thoroughbred", "thoroughfare", "thrall", "tilth"]
    }, {
        "A public street or road. ": ["thoroughfare", "thrall", "tilth", "timbre"]
    }, {
        "One controlled by an appetite or a passion. ": ["thrall", "tilth", "timbre", "timorous"]
    }, {
        "Cultivation. ": ["tilth", "timbre", "timorous", "tincture"]
    }, {
        "The quality of a tone, as distinguished from intensity and pitch. ": ["timbre", "timorous", "tincture", "tinge"]
    }, {
        "Lacking courage. ": ["timorous", "tincture", "tinge", "tipsy"]
    }, {
        "A solution, usually alcoholic, of some principle used in medicine. ": ["tincture", "tinge", "tipsy", "tirade"]
    }, {
        "A faint trace of color. ": ["tinge", "tipsy", "tirade", "tireless"]
    }, {
        "Befuddled with drinks. ": ["tipsy", "tirade", "tireless", "tiresome"]
    }, {
        "Harangue. ": ["tirade", "tireless", "tiresome", "Titanic"]
    }, {
        "Untiring. ": ["tireless", "tiresome", "Titanic", "toilsome"]
    }, {
        "Wearisome. ": ["tiresome", "Titanic", "toilsome", "tolerable"]
    }, {
        "Of vast size or strength. ": ["Titanic", "toilsome", "tolerable", "tolerance"]
    }, {
        "Laborious. ": ["toilsome", "tolerable", "tolerance", "tolerant"]
    }, {
        "Moderately good. ": ["tolerable", "tolerance", "tolerant", "tolerate"]
    }, {
        "Forbearance in judging of the acts or opinions of others. ": ["tolerance", "tolerant", "tolerate", "toleration"]
    }, {
        "Indulgent. ": ["tolerant", "tolerate", "toleration", "topography"]
    }, {
        "To passively permit or put up with. ": ["tolerate", "toleration", "topography", "torpor"]
    }, {
        "A spirit of charitable leniency. ": ["toleration", "topography", "torpor", "torrid"]
    }, {
        "The art of representing on a map the physical features of any locality or region with accuracy. ": ["topography", "torpor", "torrid", "tortious"]
    }, {
        "Apathy. ": ["torpor", "torrid", "tortious", "tortuous"]
    }, {
        "Excessively hot. ": ["torrid", "tortious", "tortuous", "torturous"]
    }, {
        "Wrongful. ": ["tortious", "tortuous", "torturous", "tractable"]
    }, {
        "Abounding in irregular bends or turns. ": ["tortuous", "torturous", "tractable", "trait"]
    }, {
        "Marked by extreme suffering. ": ["torturous", "tractable", "trait", "trajectory"]
    }, {
        "Easily led or controlled. ": ["tractable", "trait", "trajectory", "trammel"]
    }, {
        "A distinguishing feature or quality. ": ["trait", "trajectory", "trammel", "tranquil"]
    }, {
        "The path described by a projectile moving under given forces. ": ["trajectory", "trammel", "tranquil", "tranquilize"]
    }, {
        "An impediment. ": ["trammel", "tranquil", "tranquilize", "tranquility"]
    }, {
        "Calm. ": ["tranquil", "tranquilize", "tranquility", "transalpine"]
    }, {
        "To soothe. ": ["tranquilize", "tranquility", "transalpine", "transact"]
    }, {
        "Calmness. ": ["tranquility", "transalpine", "transact", "transatlantic"]
    }, {
        "Situated on the other side of the Alps. ": ["transalpine", "transact", "transatlantic", "transcend"]
    }, {
        "To do business. ": ["transact", "transatlantic", "transcend", "transcendent"]
    }, {
        "Situated beyond or on the other side of the Atlantic. ": ["transatlantic", "transcend", "transcendent", "transcontinental"]
    }, {
        "To surpass. ": ["transcend", "transcendent", "transcontinental", "transcribe"]
    }, {
        "Surpassing. ": ["transcendent", "transcontinental", "transcribe", "transcript"]
    }, {
        "Extending or passing across a continent. ": ["transcontinental", "transcribe", "transcript", "transfer"]
    }, {
        "To write over again (something already written) ": ["transcribe", "transcript", "transfer", "transferable"]
    }, {
        "A copy made directly from an original. ": ["transcript", "transfer", "transferable", "transferee"]
    }, {
        "To convey, remove, or cause to pass from one person or place to another. ": ["transfer", "transferable", "transferee", "transference"]
    }, {
        "Capable of being conveyed from one person or place to another. ": ["transferable", "transferee", "transference", "transferrer"]
    }, {
        "The person to whom a transfer is made. ": ["transferee", "transference", "transferrer", "transfigure"]
    }, {
        "The act of conveying from one person or place to another. ": ["transference", "transferrer", "transfigure", "transfuse"]
    }, {
        "One who or that which conveys from one person or place to another. ": ["transferrer", "transfigure", "transfuse", "transfusible"]
    }, {
        "To give an exalted meaning or glorified appearance to. ": ["transfigure", "transfuse", "transfusible", "transfusion"]
    }, {
        "To pour or cause to pass, as a fluid, from one vessel to another. ": ["transfuse", "transfusible", "transfusion", "transgress"]
    }, {
        "Capable of being poured from one vessel to another. ": ["transfusible", "transfusion", "transgress", "transience"]
    }, {
        "The act of pouring from one vessel to another. ": ["transfusion", "transgress", "transience", "transient"]
    }, {
        "To break a law. ": ["transgress", "transience", "transient", "transition"]
    }, {
        "Something that is of short duration. ": ["transience", "transient", "transition", "transitory"]
    }, {
        "One who or that which is only of temporary existence. ": ["transient", "transition", "transitory", "translate"]
    }, {
        "Passage from one place, condition, or action to another. ": ["transition", "transitory", "translate", "translator"]
    }, {
        "Existing for a short time only. ": ["transitory", "translate", "translator", "translucence"]
    }, {
        "To give the sense or equivalent of in another language or dialect. ": ["translate", "translator", "translucence", "translucent"]
    }, {
        "An interpreter. ": ["translator", "translucence", "translucent", "transmissible"]
    }, {
        "The property or state of allowing the passage of light. ": ["translucence", "translucent", "transmissible", "transmission"]
    }, {
        "Allowing the passage of light. ": ["translucent", "transmissible", "transmission", "transmit"]
    }, {
        "That may e sent through or across. ": ["transmissible", "transmission", "transmit", "transmute"]
    }, {
        "The act of sending through or across. ": ["transmission", "transmit", "transmute", "transparent"]
    }, {
        "To send trough or across. ": ["transmit", "transmute", "transparent", "transpire"]
    }, {
        "To change in nature, substance, or form. ": ["transmute", "transparent", "transpire", "transplant"]
    }, {
        "Easy to see through or understand. ": ["transparent", "transpire", "transplant", "transposition"]
    }, {
        "To come to pass. ": ["transpire", "transplant", "transposition", "transverse"]
    }, {
        "To remove and plant in another place. ": ["transplant", "transposition", "transverse", "travail"]
    }, {
        "The act of reversing the order or changing the place of. ": ["transposition", "transverse", "travail", "travesty"]
    }, {
        "Lying or being across or in a crosswise direction. ": ["transverse", "travail", "travesty", "treacherous"]
    }, {
        "Hard or agonizing labor. ": ["travail", "travesty", "treacherous", "treachery"]
    }, {
        "A grotesque imitation. ": ["travesty", "treacherous", "treachery", "treasonable"]
    }, {
        "Perfidious. ": ["treacherous", "treachery", "treasonable", "treatise"]
    }, {
        "Violation of allegiance, confidence, or plighted faith. ": ["treachery", "treasonable", "treatise", "treble"]
    }, {
        "Of the nature of betrayal, treachery, or breech of allegiance. ": ["treasonable", "treatise", "treble", "trebly"]
    }, {
        "An elaborate literary composition presenting a subject in all its parts. ": ["treatise", "treble", "trebly", "tremendous"]
    }, {
        "Multiplied by three. ": ["treble", "trebly", "tremendous", "tremor"]
    }, {
        "Triply. ": ["trebly", "tremendous", "tremor", "tremulous"]
    }, {
        "Awe-inspiring. ": ["tremendous", "tremor", "tremulous", "trenchant"]
    }, {
        "An involuntary trembling or shivering. ": ["tremor", "tremulous", "trenchant", "trepidation"]
    }, {
        "Characterized by quivering or unsteadiness. ": ["tremulous", "trenchant", "trepidation", "trestle"]
    }, {
        "Cutting deeply and quickly. ": ["trenchant", "trepidation", "trestle", "triad"]
    }, {
        "Nervous uncertainty of feeling. ": ["trepidation", "trestle", "triad", "tribune"]
    }, {
        "An open braced framework for supporting the horizontal stringers of a railway-bridge. ": ["trestle", "triad", "tribune", "trickery"]
    }, {
        "A group of three persons of things. ": ["triad", "tribune", "trickery", "tricolor"]
    }, {
        "Any champion of the rights and liberties of the people: often used as the name for a newspaper. ": ["tribune", "trickery", "tricolor", "tricycle"]
    }, {
        "Artifice. ": ["trickery", "tricolor", "tricycle", "trident"]
    }, {
        "Of three colors. ": ["tricolor", "tricycle", "trident", "triennial"]
    }, {
        "A three-wheeled vehicle. ": ["tricycle", "trident", "triennial", "trimness"]
    }, {
        "The three-pronged fork that was the emblem of Neptune. ": ["trident", "triennial", "trimness", "trinity"]
    }, {
        "Taking place every third year. ": ["triennial", "trimness", "trinity", "trio"]
    }, {
        "Neatness. ": ["trimness", "trinity", "trio", "triple"]
    }, {
        "A threefold personality existing in the one divine being or substance. ": ["trinity", "trio", "triple", "triplicate"]
    }, {
        "Three things grouped or associated together. ": ["trio", "triple", "triplicate", "triplicity"]
    }, {
        "Threefold. ": ["triple", "triplicate", "triplicity", "tripod"]
    }, {
        "Composed of or pertaining to three related things or parts. ": ["triplicate", "triplicity", "tripod", "trisect"]
    }, {
        "The state of being triple or threefold. ": ["triplicity", "tripod", "trisect", "trite"]
    }, {
        "A three-legged stand, usually hinged near the top, for supporting some instrument. ": ["tripod", "trisect", "trite", "triumvir"]
    }, {
        "To divide into three parts, especially into three equal parts. ": ["trisect", "trite", "triumvir", "trivial"]
    }, {
        "Made commonplace by frequent repetition. ": ["trite", "triumvir", "trivial", "troublesome"]
    }, {
        "One of three men united coordinately in public office or authority. ": ["triumvir", "trivial", "troublesome", "truculence"]
    }, {
        "Of little importance or value. ": ["trivial", "troublesome", "truculence", "truculent"]
    }, {
        "Burdensome. ": ["troublesome", "truculence", "truculent", "truism"]
    }, {
        "Ferocity. ": ["truculence", "truculent", "truism", "truthful"]
    }, {
        "Having the character or the spirit of a savage. ": ["truculent", "truism", "truthful", "turgid"]
    }, {
        "A statement so plainly true as hardly to require statement or proof. ": ["truism", "truthful", "turgid", "turpitude"]
    }, {
        "Veracious. ": ["truthful", "turgid", "turpitude", "tutelage"]
    }, {
        "Swollen. ": ["turgid", "turpitude", "tutelage", "tutelar"]
    }, {
        "Depravity. ": ["turpitude", "tutelage", "tutelar", "tutorship"]
    }, {
        "The act of training or the state of being under instruction. ": ["tutelage", "tutelar", "tutorship", "twinge"]
    }, {
        "Protective. ": ["tutelar", "tutorship", "twinge", "typical"]
    }, {
        "The office of a guardian. ": ["tutorship", "twinge", "typical", "typify"]
    }, {
        "A darting momentary local pain. ": ["twinge", "typical", "typify", "typographical"]
    }, {
        "Characteristic. ": ["typical", "typify", "typographical", "typography"]
    }, {
        "To serve as a characteristic example of. ": ["typify", "typographical", "typography", "tyrannical"]
    }, {
        "Pertaining to typography or printing. ": ["typographical", "typography", "tyrannical", "tyranny"]
    }, {
        "The arrangement of composed type, or the appearance of printed matter. ": ["typography", "tyrannical", "tyranny", "tyro"]
    }, {
        "Despotic. ": ["tyrannical", "tyranny", "tyro", "ubiquitous"]
    }, {
        "Absolute power arbitrarily or unjustly administrated. ": ["tyranny", "tyro", "ubiquitous", "ulterior"]
    }, {
        "One slightly skilled in or acquainted with any trade or profession. ": ["tyro", "ubiquitous", "ulterior", "ultimate"]
    }, {
        "Being present everywhere. ": ["ubiquitous", "ulterior", "ultimate", "ultimatum"]
    }, {
        "Not so pertinent as something else to the matter spoken of. ": ["ulterior", "ultimate", "ultimatum", "ultramundane"]
    }, {
        "Beyond which there is nothing else. ": ["ultimate", "ultimatum", "ultramundane", "ultramontane"]
    }, {
        "A final statement or proposal, as concerning terms or conditions. ": ["ultimatum", "ultramundane", "ultramontane", "umbrage"]
    }, {
        "Pertaining to supernatural things or to another life. ": ["ultramundane", "ultramontane", "umbrage", "unaccountable"]
    }, {
        "Beyond the mountains, especially beyond the Alps (that is, on their Italian side). ": ["ultramontane", "umbrage", "unaccountable", "unaffected"]
    }, {
        "A sense of injury. ": ["umbrage", "unaccountable", "unaffected", "unanimous"]
    }, {
        "Inexplicable. ": ["unaccountable", "unaffected", "unanimous", "unanimity"]
    }, {
        "Sincere. ": ["unaffected", "unanimous", "unanimity", "unavoidable"]
    }, {
        "Sharing the same views or sentiments. ": ["unanimous", "unanimity", "unavoidable", "unbearable"]
    }, {
        "The state or quality of being of one mind. ": ["unanimity", "unavoidable", "unbearable", "unbecoming"]
    }, {
        "Inevitable. ": ["unavoidable", "unbearable", "unbecoming", "unbelief"]
    }, {
        "Unendurable. ": ["unbearable", "unbecoming", "unbelief", "unbiased"]
    }, {
        "Unsuited to the wearer, place, or surroundings. ": ["unbecoming", "unbelief", "unbiased", "unbridled"]
    }, {
        "Doubt. ": ["unbelief", "unbiased", "unbridled", "uncommon"]
    }, {
        "Impartial, as judgment. ": ["unbiased", "unbridled", "uncommon", "unconscionable"]
    }, {
        "Being without restraint. ": ["unbridled", "uncommon", "unconscionable", "unconscious"]
    }, {
        "Rare. ": ["uncommon", "unconscionable", "unconscious", "unction"]
    }, {
        "Ridiculously or unjustly excessive. ": ["unconscionable", "unconscious", "unction", "unctuous"]
    }, {
        "Not cognizant of objects, actions, etc. ": ["unconscious", "unction", "unctuous", "undeceive"]
    }, {
        "The art of anointing as with oil. ": ["unction", "unctuous", "undeceive", "undercharge"]
    }, {
        "Oily. ": ["unctuous", "undeceive", "undercharge", "underexposed"]
    }, {
        "To free from deception, as by apprising of the real state of affairs. ": ["undeceive", "undercharge", "underexposed", "undergarment"]
    }, {
        "To make an inadequate charge for. ": ["undercharge", "underexposed", "undergarment", "underman"]
    }, {
        "Insufficiently exposed for proper or full development, as negatives in photography. ": ["underexposed", "undergarment", "underman", "undersell"]
    }, {
        "A garment to be worn under the ordinary outer garments. ": ["undergarment", "underman", "undersell", "undersized"]
    }, {
        "To equip with less than the full complement of men. ": ["underman", "undersell", "undersized", "underhanded"]
    }, {
        "To sell at a lower price than. ": ["undersell", "undersized", "underhanded", "underlie"]
    }, {
        "Of less than the customary size. ": ["undersized", "underhanded", "underlie", "underling"]
    }, {
        "Clandestinely carried on. ": ["underhanded", "underlie", "underling", "undermine"]
    }, {
        "To be the ground or support of. ": ["underlie", "underling", "undermine", "underrate"]
    }, {
        "A subordinate. ": ["underling", "undermine", "underrate", "understate"]
    }, {
        "To subvert in an underhand way. ": ["undermine", "underrate", "understate", "undervalue"]
    }, {
        "To undervalue. ": ["underrate", "understate", "undervalue", "underworld"]
    }, {
        "To fail to put strongly enough, as a case. ": ["understate", "undervalue", "underworld", "underwrite"]
    }, {
        "To underestimate. ": ["undervalue", "underworld", "underwrite", "undue"]
    }, {
        "Hades. ": ["underworld", "underwrite", "undue", "undulate"]
    }, {
        "To issue or be party to the issue of a policy of insurance. ": ["underwrite", "undue", "undulate", "undulous"]
    }, {
        "More than sufficient. ": ["undue", "undulate", "undulous", "unfavorable"]
    }, {
        "To move like a wave or in waves. ": ["undulate", "undulous", "unfavorable", "ungainly"]
    }, {
        "Resembling waves. ": ["undulous", "unfavorable", "ungainly", "unguent"]
    }, {
        "Adverse. ": ["unfavorable", "ungainly", "unguent", "unicellular"]
    }, {
        "Clumsy. ": ["ungainly", "unguent", "unicellular", "univalence"]
    }, {
        "Any ointment or lubricant for local application. ": ["unguent", "unicellular", "univalence", "unify"]
    }, {
        "Consisting of a single cell. ": ["unicellular", "univalence", "unify", "unique"]
    }, {
        "Monovalency. ": ["univalence", "unify", "unique", "unison"]
    }, {
        "To cause to be one. ": ["unify", "unique", "unison", "unisonant"]
    }, {
        "Being the only one of its kind. ": ["unique", "unison", "unisonant", "Unitarian"]
    }, {
        "A condition of perfect agreement and accord. ": ["unison", "unisonant", "Unitarian", "unlawful"]
    }, {
        "Being in a condition of perfect agreement and accord. ": ["unisonant", "Unitarian", "unlawful", "unlimited"]
    }, {
        "Pertaining to a religious body that rejects the doctrine of the Trinity. ": ["Unitarian", "unlawful", "unlimited", "unnatural"]
    }, {
        "Illegal. ": ["unlawful", "unlimited", "unnatural", "unnecessary"]
    }, {
        "Unconstrained. ": ["unlimited", "unnatural", "unnecessary", "unsettle"]
    }, {
        "Artificial. ": ["unnatural", "unnecessary", "unsettle", "unsophisticated"]
    }, {
        "Not essential under the circumstances. ": ["unnecessary", "unsettle", "unsophisticated", "unspeakable"]
    }, {
        "To put into confusion. ": ["unsettle", "unsophisticated", "unspeakable", "untimely"]
    }, {
        "Showing inexperience. ": ["unsophisticated", "unspeakable", "untimely", "untoward"]
    }, {
        "Abominable. ": ["unspeakable", "untimely", "untoward", "unutterable"]
    }, {
        "Unseasonable. ": ["untimely", "untoward", "unutterable", "unwieldy"]
    }, {
        "Causing annoyance or hindrance. ": ["untoward", "unutterable", "unwieldy", "unwise"]
    }, {
        "Inexpressible. ": ["unutterable", "unwieldy", "unwise", "unyoke"]
    }, {
        "Moved or managed with difficulty, as from great size or awkward shape. ": ["unwieldy", "unwise", "unyoke", "up-keep"]
    }, {
        "Foolish. ": ["unwise", "unyoke", "up-keep", "upbraid"]
    }, {
        "To separate. ": ["unyoke", "up-keep", "upbraid", "upcast"]
    }, {
        "Maintenance. ": ["up-keep", "upbraid", "upcast", "upheaval"]
    }, {
        "To reproach as deserving blame. ": ["upbraid", "upcast", "upheaval", "upheave"]
    }, {
        "A throwing upward. ": ["upcast", "upheaval", "upheave", "uppermost"]
    }, {
        "Overthrow or violent disturbance of established order or condition. ": ["upheaval", "upheave", "uppermost", "uproarious"]
    }, {
        "To raise or lift with effort. ": ["upheave", "uppermost", "uproarious", "uproot"]
    }, {
        "First in order of precedence. ": ["uppermost", "uproarious", "uproot", "upturn"]
    }, {
        "Noisy. ": ["uproarious", "uproot", "upturn", "urban"]
    }, {
        "To eradicate. ": ["uproot", "upturn", "urban", "urbanity"]
    }, {
        "To throw into confusion. ": ["upturn", "urban", "urbanity", "urchin"]
    }, {
        "Of, or pertaining to, or like a city. ": ["urban", "urbanity", "urchin", "urgency"]
    }, {
        "Refined or elegant courtesy. ": ["urbanity", "urchin", "urgency", "usage"]
    }, {
        "A roguish, mischievous boy. ": ["urchin", "urgency", "usage", "usurious"]
    }, {
        "The pressure of necessity. ": ["urgency", "usage", "usurious", "usurp"]
    }, {
        "Treatment. ": ["usage", "usurious", "usurp", "usury"]
    }, {
        "Taking unlawful or exorbitant interest on money loaned. ": ["usurious", "usurp", "usury", "utilitarianism"]
    }, {
        "To take possession of by force. ": ["usurp", "usury", "utilitarianism", "utility"]
    }, {
        "The demanding for the use of money as a loan, a rate of interest beyond what is allowed by law. ": ["usury", "utilitarianism", "utility", "utmost"]
    }, {
        "The ethical doctrine that actions are right because they are useful or of beneficial tendency.": ["utilitarianism", "utility", "utmost", "vacate"]
    }, {
        "Fitness for some desirable practical purpose. ": ["utility", "utmost", "vacate", "vaccinate"]
    }, {
        "The greatest possible extent. ": ["utmost", "vacate", "vaccinate", "vacillate"]
    }, {
        "To leave. ": ["vacate", "vaccinate", "vacillate", "vacuous"]
    }, {
        "To inoculate with vaccine virus or virus of cowpox. ": ["vaccinate", "vacillate", "vacuous", "vacuum"]
    }, {
        "To waver. ": ["vacillate", "vacuous", "vacuum", "vagabond"]
    }, {
        "Empty. ": ["vacuous", "vacuum", "vagabond", "vagrant"]
    }, {
        "A space entirely devoid of matter. ": ["vacuum", "vagabond", "vagrant", "vainglory"]
    }, {
        "A wanderer. ": ["vagabond", "vagrant", "vainglory", "vale"]
    }, {
        "An idle wanderer. ": ["vagrant", "vainglory", "vale", "valediction"]
    }, {
        "Excessive, pretentious, and demonstrative vanity. ": ["vainglory", "vale", "valediction", "valedictorian"]
    }, {
        "Level or low land between hills. ": ["vale", "valediction", "valedictorian", "valedictory"]
    }, {
        "A bidding farewell. ": ["valediction", "valedictorian", "valedictory", "valid"]
    }, {
        "Student who delivers an address at graduating exercises of an educational institution. ": ["valedictorian", "valedictory", "valid", "valorous"]
    }, {
        "A parting address. ": ["valedictory", "valid", "valorous", "vapid"]
    }, {
        "Founded on truth. ": ["valid", "valorous", "vapid", "vaporizer"]
    }, {
        "Courageous. ": ["valorous", "vapid", "vaporizer", "variable"]
    }, {
        "Having lost sparkling quality and flavor. ": ["vapid", "vaporizer", "variable", "variance"]
    }, {
        "An atomizer. ": ["vaporizer", "variable", "variance", "variant"]
    }, {
        "Having a tendency to change. ": ["variable", "variance", "variant", "variation"]
    }, {
        "Change. ": ["variance", "variant", "variation", "variegate"]
    }, {
        "A thing that differs from another in form only, being the same in essence or substance. ": ["variant", "variation", "variegate", "vassal"]
    }, {
        "Modification. ": ["variation", "variegate", "vassal", "vaudeville"]
    }, {
        "To mark with different shades or colors. ": ["variegate", "vassal", "vaudeville", "vegetal"]
    }, {
        "A slave or bondman. ": ["vassal", "vaudeville", "vegetal", "vegetarian"]
    }, {
        "A variety show. ": ["vaudeville", "vegetal", "vegetarian", "vegetate"]
    }, {
        "Of or pertaining to plants. ": ["vegetal", "vegetarian", "vegetate", "vegetation"]
    }, {
        "One who believes in the theory that man's food should be exclusively vegetable. ": ["vegetarian", "vegetate", "vegetation", "vegetative"]
    }, {
        "To live in a monotonous, passive way without exercise of the mental faculties. ": ["vegetate", "vegetation", "vegetative", "vehement"]
    }, {
        "Plant-life in the aggregate. ": ["vegetation", "vegetative", "vehement", "velocity"]
    }, {
        "Pertaining to the process of plant-life. ": ["vegetative", "vehement", "velocity", "velvety"]
    }, {
        "Very eager or urgent. ": ["vehement", "velocity", "velvety", "venal"]
    }, {
        "Rapid motion. ": ["velocity", "velvety", "venal", "vendible"]
    }, {
        "Marked by lightness and softness. ": ["velvety", "venal", "vendible", "vendition"]
    }, {
        "Mercenary, corrupt. ": ["venal", "vendible", "vendition", "vendor"]
    }, {
        "Marketable. ": ["vendible", "vendition", "vendor", "veneer"]
    }, {
        "The act of selling. ": ["vendition", "vendor", "veneer", "venerable"]
    }, {
        "A seller. ": ["vendor", "veneer", "venerable", "venerate"]
    }, {
        "Outside show or elegance. ": ["veneer", "venerable", "venerate", "venereal"]
    }, {
        "Meriting or commanding high esteem. ": ["venerable", "venerate", "venereal", "venial"]
    }, {
        "To cherish reverentially. ": ["venerate", "venereal", "venial", "venison"]
    }, {
        "Pertaining to or proceeding from sexual intercourse. ": ["venereal", "venial", "venison", "venom"]
    }, {
        "That may be pardoned or forgiven, a forgivable sin. ": ["venial", "venison", "venom", "venous"]
    }, {
        "The flesh of deer. ": ["venison", "venom", "venous", "veracious"]
    }, {
        "The poisonous fluid that certain animals secrete. ": ["venom", "venous", "veracious", "veracity"]
    }, {
        "Of, pertaining to, or contained or carried in a vein or veins. ": ["venous", "veracious", "veracity", "verbatim"]
    }, {
        "Habitually disposed to speak the truth. ": ["veracious", "veracity", "verbatim", "verbiage"]
    }, {
        "Truthfulness. ": ["veracity", "verbatim", "verbiage", "verbose"]
    }, {
        "Word for word. ": ["verbatim", "verbiage", "verbose", "verdant"]
    }, {
        "Use of many words without necessity. ": ["verbiage", "verbose", "verdant", "verification"]
    }, {
        "Wordy. ": ["verbose", "verdant", "verification", "verify"]
    }, {
        "Green with vegetation. ": ["verdant", "verification", "verify", "verily"]
    }, {
        "The act of proving to be true, exact, or accurate. ": ["verification", "verify", "verily", "verity"]
    }, {
        "To prove to be true, exact, or accurate. ": ["verify", "verily", "verity", "vermin"]
    }, {
        "In truth. ": ["verily", "verity", "vermin", "vernacular"]
    }, {
        "Truth. ": ["verity", "vermin", "vernacular", "vernal"]
    }, {
        "A noxious or troublesome animal. ": ["vermin", "vernacular", "vernal", "versatile"]
    }, {
        "The language of one's country. ": ["vernacular", "vernal", "versatile", "version"]
    }, {
        "Belonging to or suggestive of the spring. ": ["vernal", "versatile", "version", "vertex"]
    }, {
        "Having an aptitude for applying oneself to new and varied tasks or to various subjects. ": ["versatile", "version", "vertex", "vertical"]
    }, {
        "A description or report of something as modified by one's character or opinion. ": ["version", "vertex", "vertical", "vertigo"]
    }, {
        "Apex. ": ["vertex", "vertical", "vertigo", "vestige"]
    }, {
        "Lying or directed perpendicularly to the horizon. ": ["vertical", "vertigo", "vestige", "vestment"]
    }, {
        "Dizziness. ": ["vertigo", "vestige", "vestment", "veto"]
    }, {
        "A visible trace, mark, or impression, of something absent, lost, or gone. ": ["vestige", "vestment", "veto", "vicarious"]
    }, {
        "Clothing or covering. ": ["vestment", "veto", "vicarious", "viceroy"]
    }, {
        "The constitutional right in a chief executive of refusing to approve an enactment. ": ["veto", "vicarious", "viceroy", "vicissitude"]
    }, {
        "Suffered or done in place of or for the sake of another. ": ["vicarious", "viceroy", "vicissitude", "vie"]
    }, {
        "A ruler acting with royal authority in place of the sovereign in a colony or province. ": ["viceroy", "vicissitude", "vie", "vigilance"]
    }, {
        "A change, especially a complete change, of condition or circumstances, as of fortune. ": ["vicissitude", "vie", "vigilance", "vigilant"]
    }, {
        "To contend. ": ["vie", "vigilance", "vigilant", "vignette"]
    }, {
        "Alert and intent mental watchfulness in guarding against danger. ": ["vigilance", "vigilant", "vignette", "vincible"]
    }, {
        "Being on the alert to discover and ward off danger or insure safety. ": ["vigilant", "vignette", "vincible", "vindicate"]
    }, {
        "A picture having a background or that is shaded off gradually. ": ["vignette", "vincible", "vindicate", "vindicatory"]
    }, {
        "Conquerable. ": ["vincible", "vindicate", "vindicatory", "vindicative"]
    }, {
        "To prove true, right, or real. ": ["vindicate", "vindicatory", "vindicative", "vinery"]
    }, {
        "Punitive. ": ["vindicatory", "vindicative", "vinery", "viol"]
    }, {
        "Revengeful. ": ["vindicative", "vinery", "viol", "viola"]
    }, {
        "A greenhouse for grapes. ": ["vinery", "viol", "viola", "violator"]
    }, {
        "A stringed instrument of the violin class. ": ["viol", "viola", "violator", "violation"]
    }, {
        "A musical instrument somewhat larger than a violin. ": ["viola", "violator", "violation", "violoncello"]
    }, {
        "One who transgresses. ": ["violator", "violation", "violoncello", "virago"]
    }, {
        "Infringement. ": ["violation", "violoncello", "virago", "virile"]
    }, {
        "A stringed instrument held between the player's knees. ": ["violoncello", "virago", "virile", "virtu"]
    }, {
        "A bold, impudent, turbulent woman. ": ["virago", "virile", "virtu", "virtual"]
    }, {
        "Masculine. ": ["virile", "virtu", "virtual", "virtuoso"]
    }, {
        "Rare, curious, or beautiful quality. ": ["virtu", "virtual", "virtuoso", "virulence"]
    }, {
        "Being in essence or effect, but not in form or appearance. ": ["virtual", "virtuoso", "virulence", "virulent"]
    }, {
        "A master in the technique of some particular fine art. ": ["virtuoso", "virulence", "virulent", "visage"]
    }, {
        "Extreme poisonousness. ": ["virulence", "virulent", "visage", "viscount"]
    }, {
        "Exceedingly noxious or deleterious. ": ["virulent", "visage", "viscount", "vista"]
    }, {
        "The face, countenance, or look of a person. ": ["visage", "viscount", "vista", "visual"]
    }, {
        "In England, a title of nobility, ranking fourth in the order of British peerage. ": ["viscount", "vista", "visual", "visualize"]
    }, {
        "A view or prospect. ": ["vista", "visual", "visualize", "vitality"]
    }, {
        "Perceptible by sight. ": ["visual", "visualize", "vitality", "vitalize"]
    }, {
        "To give pictorial vividness to a mental representation. ": ["visualize", "vitality", "vitalize", "vitiate"]
    }, {
        "The state or quality of being necessary to existence or continuance. ": ["vitality", "vitalize", "vitiate", "vituperable"]
    }, {
        "To endow with life or energy. ": ["vitalize", "vitiate", "vituperable", "vivacity"]
    }, {
        "To contaminate. ": ["vitiate", "vituperable", "vivacity", "vivify"]
    }, {
        "Deserving of censure. ": ["vituperable", "vivacity", "vivify", "vivisection"]
    }, {
        "Liveliness. ": ["vivacity", "vivify", "vivisection", "vocable"]
    }, {
        "To endue with life. ": ["vivify", "vivisection", "vocable", "vocative"]
    }, {
        "The dissection of a living animal. ": ["vivisection", "vocable", "vocative", "vociferance"]
    }, {
        "a word, especially one regarded in relation merely to its qualities of sound. ": ["vocable", "vocative", "vociferance", "vociferate"]
    }, {
        "Of or pertaining to the act of calling. ": ["vocative", "vociferance", "vociferate", "vociferous"]
    }, {
        "The quality of making a clamor. ": ["vociferance", "vociferate", "vociferous", "vogue"]
    }, {
        "To utter with a loud and vehement voice. ": ["vociferate", "vociferous", "vogue", "volant"]
    }, {
        "Making a loud outcry. ": ["vociferous", "vogue", "volant", "volatile"]
    }, {
        "The prevalent way or fashion. ": ["vogue", "volant", "volatile", "volition"]
    }, {
        "Flying or able to fly. ": ["volant", "volatile", "volition", "volitive"]
    }, {
        "Changeable. ": ["volatile", "volition", "volitive", "voluble"]
    }, {
        "An act or exercise of will. ": ["volition", "volitive", "voluble", "voluptuous"]
    }, {
        "Exercising the will. ": ["volitive", "voluble", "voluptuous", "voracious"]
    }, {
        "Having great fluency in speaking. ": ["voluble", "voluptuous", "voracious", "vortex"]
    }, {
        "having fullness of beautiful form, as a woman, with or without sensuous or sensual quality. ": ["voluptuous", "voracious", "vortex", "votary"]
    }, {
        "Eating with greediness or in very large quantities. ": ["voracious", "vortex", "votary", "votive"]
    }, {
        "A mass of rotating or whirling fluid, especially when sucked spirally toward the center.": ["vortex", "votary", "votive", "vulgarity"]
    }, {
        "Consecrated by a vow or promise. ": ["votary", "votive", "vulgarity", "vulnerable"]
    }, {
        "Dedicated by a vow. ": ["votive", "vulgarity", "vulnerable", "waif"]
    }, {
        "Lack of refinement in conduct or speech. ": ["vulgarity", "vulnerable", "waif", "waistcoat"]
    }, {
        "Capable of receiving injuries. ": ["vulnerable", "waif", "waistcoat", "waive"]
    }, {
        "A homeless, neglected wanderer. ": ["waif", "waistcoat", "waive", "wampum"]
    }, {
        "A vest. ": ["waistcoat", "waive", "wampum", "wane"]
    }, {
        "To relinquish, especially temporarily, as a right or claim. ": ["waive", "wampum", "wane", "wantonness"]
    }, {
        "Beads strung on threads, formerly used among the American Indians as currency. ": ["wampum", "wane", "wantonness", "warlike"]
    }, {
        "To diminish in size and brilliancy. ": ["wane", "wantonness", "warlike", "wavelet"]
    }, {
        "Recklessness. ": ["wantonness", "warlike", "wavelet", "weak-kneed"]
    }, {
        "Belligerent. ": ["warlike", "wavelet", "weak-kneed", "weal"]
    }, {
        "A ripple. ": ["wavelet", "weak-kneed", "weal", "wean"]
    }, {
        "Without resolute purpose or energy. ": ["weak-kneed", "weal", "wean", "wearisome"]
    }, {
        "Well-being. ": ["weal", "wean", "wearisome", "wee"]
    }, {
        "To transfer (the young) from dependence on mother's milk to another form of nourishment. ": ["wean", "wearisome", "wee", "well-bred"]
    }, {
        "Fatiguing. ": ["wearisome", "wee", "well-bred", "well-doer"]
    }, {
        "Very small. ": ["wee", "well-bred", "well-doer", "well-to-do"]
    }, {
        "Of good ancestry. ": ["well-bred", "well-doer", "well-to-do", "whereabouts"]
    }, {
        "A performer of moral and social duties. ": ["well-doer", "well-to-do", "whereabouts", "whereupon"]
    }, {
        "In prosperous circumstances. ": ["well-to-do", "whereabouts", "whereupon", "wherever"]
    }, {
        "The place in or near which a person or thing is. ": ["whereabouts", "whereupon", "wherever", "wherewith"]
    }, {
        "After which. ": ["whereupon", "wherever", "wherewith", "whet"]
    }, {
        "In or at whatever place. ": ["wherever", "wherewith", "whet", "whimsical"]
    }, {
        "The necessary means or resources. ": ["wherewith", "whet", "whimsical", "whine"]
    }, {
        "To make more keen or eager. ": ["whet", "whimsical", "whine", "wholly"]
    }, {
        "Capricious. ": ["whimsical", "whine", "wholly", "wield"]
    }, {
        "To utter with complaining tone. ": ["whine", "wholly", "wield", "wile"]
    }, {
        "Completely. ": ["wholly", "wield", "wile", "winsome"]
    }, {
        "To use, control, or manage, as a weapon, or instrument, especially with full command. ": ["wield", "wile", "winsome", "wintry"]
    }, {
        "An act or a means of cunning deception. ": ["wile", "winsome", "wintry", "wiry"]
    }, {
        "Attractive. ": ["winsome", "wintry", "wiry", "witchcraft"]
    }, {
        "Lacking warmth of manner. ": ["wintry", "wiry", "witchcraft", "witless"]
    }, {
        "Thin, but tough and sinewy. ": ["wiry", "witchcraft", "witless", "witling"]
    }, {
        "Sorcery. ": ["witchcraft", "witless", "witling", "witticism"]
    }, {
        "Foolish, indiscreet, or silly. ": ["witless", "witling", "witticism", "wittingly"]
    }, {
        "A person who has little understanding. ": ["witling", "witticism", "wittingly", "wizen"]
    }, {
        "A witty, brilliant, or original saying or sentiment. ": ["witticism", "wittingly", "wizen", "wizen-faced"]
    }, {
        "With knowledge and by design. ": ["wittingly", "wizen", "wizen-faced", "working-man"]
    }, {
        "To become or cause to become withered or dry. ": ["wizen", "wizen-faced", "working-man", "workmanlike"]
    }, {
        "Having a shriveled face. ": ["wizen-faced", "working-man", "workmanlike", "workmanship"]
    }, {
        "One who earns his bread by manual labor. ": ["working-man", "workmanlike", "workmanship", "wrangle"]
    }, {
        "Like or befitting a skilled workman. ": ["workmanlike", "workmanship", "wrangle", "wreak"]
    }, {
        "The art or skill of a workman. ": ["workmanship", "wrangle", "wreak", "wrest"]
    }, {
        "To maintain by noisy argument or dispute. ": ["wrangle", "wreak", "wrest", "wretchedness"]
    }, {
        "To inflict, as a revenge or punishment. ": ["wreak", "wrest", "wretchedness", "writhe"]
    }, {
        "To pull or force away by or as by violent twisting or wringing. ": ["wrest", "wretchedness", "writhe", "writing"]
    }, {
        "Extreme misery or unhappiness. ": ["wretchedness", "writhe", "writing", "wry"]
    }, {
        "To twist the body, face, or limbs or as in pain or distress. ": ["writhe", "writing", "wry", "yearling"]
    }, {
        "The act or art of tracing or inscribing on a surface letters or ideographs. ": ["writing", "wry", "yearling", "zealot"]
    }, {
        "Deviating from that which is proper or right. ": ["wry", "yearling", "zealot", "zeitgeist"]
    }, {
        "A young animal past its first year and not yet two years old. ": ["yearling", "zealot", "zeitgeist", "zenith"]
    }, {
        "One who espouses a cause or pursues an object in an immoderately partisan manner. ": ["zealot", "zeitgeist", "zenith", "zephyr"]
    }, {
        "The intellectual and moral tendencies that characterize any age or epoch. ": ["zeitgeist", "zenith", "zephyr", "zodiac"]
    }

];

// Route the incoming request based on type (LaunchRequest, IntentRequest, etc.)
// The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        //     if (event.session.application.applicationId !==
        // "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
        // context.fail("Invalid Application ID");      }

        if (event.session.new) {
            onSessionStarted({
                requestId: event.request.requestId
            }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
                context.succeed(buildResponse(sessionAttributes, speechletResponse));
            });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
                context.succeed(buildResponse(sessionAttributes, speechletResponse));
            });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);

    var sessionAttributes = {},
        speechOutput = "Let's play again";
    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "SAT Quiz"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString() + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " .",

        i,
        j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index) {
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure
    // there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++) {
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the
    // spot marked by the correctAnswerTargetLocation variable. Note that you can
    // have as many answers as you want but only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp,
        i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT) {
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++) {
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask
        // the user if they want to start a new game. Set a flag to track that we've
        // prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT, return an
        // error message to the user. Remember to guide the user into providing correct
        // values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and
        // can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp
                ? ""
                : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of " + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp
                ? ""
                : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes
    // if available else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes, buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then,
    // continue the game if there is one in progress, or provide the option to start
    // another one. Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to
    // demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. For example, say one, two, three, or four. To start a new game at any time, say, start game. To repeat the last question, say, repeat. Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . Would you like to keep playing?";
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes, buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {version: "1.0", sessionAttributes: sessionAttributes, response: speechletResponse};
}