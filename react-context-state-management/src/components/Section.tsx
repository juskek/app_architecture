import { useContext } from "react";
import { LevelContext } from "./LevelContext";



export default function Section({ children }: { children: any }) {
    // 2. Use the context
    // The first time this is called, there is no Provider so the default value is used
    const level = useContext(LevelContext);

    return (
        <section className="section">
            {/* 3. Provide the context above where it is used 
            This creates a new context for every Section that is created
            */}
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}