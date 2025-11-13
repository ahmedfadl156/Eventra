'use client';

import { useForm } from 'react-hook-form';
import { useSignup } from '@/app/services/auth/useSignup';
import toast from 'react-hot-toast';

export default function SignupForm() {
    const {signup , signupIsPending} = useSignup()
const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset
} = useForm({
    mode: 'onBlur',
    defaultValues: {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupAs: 'user'
    }
});

const onSubmit = async (data) => {
    try {
        // Basic validation (react-hook-form handles most validation)
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        // Call signup with correct data structure
        signup({
            name: data.name,
            email: data.email,
            phone: data.phone,
            signupAs: data.signupAs,
            password: data.password
        });
        
        // Don't reset here - let the onSuccess callback handle it
    } catch (error) {
        console.error('Signup error:', error);
        toast.error('An unexpected error occurred');
    }
};

const validationRules = {
    name: {
    required: 'Name is required',
    minLength: {
        value: 3,
        message: 'Name must be at least 3 characters long'
    },
    pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Name can only contain letters and spaces'
    }
    },
    phone: {
    required: 'Phone number is required',
    pattern: {
        value: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/,
        message: 'Please enter a valid Egyptian phone number'
    }
    },
    email: {
    required: 'Email is required',
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    }
    },
    password: {
    required: 'Password is required',
    minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    }
    },
    confirmPassword: {
    required: 'Please confirm your password',
    validate: (value) => 
    value === getValues('password') || 'Passwords do not match'
    },
    signupAs: {
    required: 'Please select your account type'
    }
};

const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
const labelClasses = "block text-gray-700 font-semibold mb-2 text-sm";
const errorClasses = "text-red-500 text-xs mt-1 font-medium";

return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-auto p-8">
    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF]">
        Create Account
    </h2>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
        <label htmlFor="name" className={labelClasses}>
            Full Name
        </label>
        <input
            {...register('name', validationRules.name)}
            type="text"
            id="name"
            className={inputClasses}
            placeholder="Enter your full name"
            autoComplete="name"
        />
        {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
        )}
        </div>

        {/* Phone Field */}
        <div>
        <label htmlFor="phone" className={labelClasses}>
            Phone Number
        </label>
        <input
            {...register('phone', validationRules.phone)}
            type="tel"
            id="phone"
            className={inputClasses}
            placeholder="01xxxxxxxxx"
            autoComplete="tel"
        />
        {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
        )}
        </div>

        {/* Email Field */}
        <div>
        <label htmlFor="email" className={labelClasses}>
            Email Address
        </label>
        <input
            {...register('email', validationRules.email)}
            type="email"
            id="email"
            className={inputClasses}
            placeholder="Enter your email address"
            autoComplete="email"
        />
        {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
        )}
        </div>

        {/* Password Field */}
        <div>
        <label htmlFor="password" className={labelClasses}>
            Password
        </label>
        <input
            {...register('password', validationRules.password)}
            type="password"
            id="password"
            className={inputClasses}
            placeholder="Create a strong password"
            autoComplete="new-password"
        />
        {errors.password && (
            <p className={errorClasses}>{errors.password.message}</p>
        )}
        </div>

        {/* Confirm Password Field */}
        <div>
        <label htmlFor="confirmPassword" className={labelClasses}>
            Confirm Password
        </label>
        <input
            {...register('confirmPassword', validationRules.confirmPassword)}
            type="password"
            id="confirmPassword"
            className={inputClasses}
            placeholder="Confirm your password"
            autoComplete="new-password"
        />
        {errors.confirmPassword && (
            <p className={errorClasses}>{errors.confirmPassword.message}</p>
        )}
        </div>

        {/* Account Type Field */}
        <div>
        <label htmlFor="signupAs" className={labelClasses}>
            Account Type
        </label>
        <select
            {...register('signupAs', validationRules.signupAs)}
            id="signupAs"
            className={inputClasses}
        >
            <option value="user">Event Attendee</option>
            <option value="organizer">Event Organizer</option>
        </select>
        {errors.signupAs && (
            <p className={errorClasses}>{errors.signupAs.message}</p>
        )}
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            disabled={signupIsPending}
            className="w-full bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#6B4FE6] hover:to-[#1FB3E6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {signupIsPending ? 'Creating Account...' : 'Create Account'}
        </button>
    </form>
    </div>
    );
}
