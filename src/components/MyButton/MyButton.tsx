import React from 'react';
import './MyButton.css';

/*PropTypes의 경우 => 런타임 체킹을 위한 도구
 예를 들어 Typescript의 경우 => 정적 타입 검사 도구
* */

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * MyButton contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    radius?: string
}

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({
                             primary = false,
                             size = 'medium',
                             backgroundColor,
                             label,
                             radius,
                             ...props
                         }: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{backgroundColor, borderRadius: radius ? radius : 0}}
            {...props}
        >
            {label}
        </button>
    );
};
