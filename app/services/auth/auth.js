import supabase from "../supabase";

export async function Signup({ name, email, phone, signupAs, password }) {
    try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name,
                    phone: phone,
                    role: signupAs
                }
            }
        });

        if (authError) {
            throw authError;
        }

        if (authData.user) {
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: authData.user.id,
                        full_name: name,
                        avatar_url: null,
                        role: signupAs,
                        created_at: new Date().toISOString(),
                        saved_events: []
                    }
                ])
                .select();

            if (profileError) {
                console.error('Profile creation error:', profileError);
                throw profileError;
            }

            return {
                user: authData.user,
                profile: profileData[0],
                session: authData.session
            };
        }

        return authData;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}


export async function Login({ email, password }) {
    try {
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (authError) {
            throw authError;
        }

        return authData;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}