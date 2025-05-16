import { 
    userSettings
} from '@/globals/userSettings';

import adjustFontSize from "@/tools/adjustFontSize";
import renderTools from "./renderTools";
import enableContrast from '@/tools/enableContrast';

export default function runAccessibility() {
    adjustFontSize(userSettings?.fontSize);
    renderTools();
    enableContrast(userSettings?.states?.contrast);
}